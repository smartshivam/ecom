import { User } from "../../models/user.model.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import validator from "validator";

// register controller for User

const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (
    validator.isEmpty(email, { ignore_whitespace: true }) ||
    validator.isEmpty(password, { ignore_whitespace: true })
  ) {
    throw new ApiError(400, "All feilds are required");
  }
  if (!validator.isEmail(email)) {
    throw new ApiError(400, "Email is invalid");
  }
  const isStrongPassword = validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  });

  if (!isStrongPassword) {
    throw new ApiError(400, "Password is not strong enough");
  }

  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw new ApiError(409, "Email is already registered");
  }

  const newUser = new User({ email, password, userType: "User" });
  await newUser.save();
  res.status(201).json(new ApiResponse(200, null, "Registration successfully"));
});

// login controller for User

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (
    validator.isEmpty(email, { ignore_whitespace: true }) ||
    validator.isEmpty(password, { ignore_whitespace: true })
  ) {
    throw new ApiError(400, "All feilds are required");
  }
  if (!validator.isEmail(email)) {
    throw new ApiError(400, "Email is invalid");
  }
  const existedUser = await User.findOne({ email });

  if (!existedUser) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isPasswordValid = await existedUser.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials");
  }
  //   const { passwo{rd: _, ...userDataWithoutPassword } = existedUser.toObject();

  // generating access token and refresh token

  let accessToken = existedUser.generateAccessToken();
  let refreshToken = existedUser.generateRefreshToken();
  let newrefreshTokens = [...existedUser.refreshToken, refreshToken];

  existedUser.accessToken = accessToken;
  existedUser.refreshToken = newrefreshTokens;
  await existedUser.save();
  const userDetail = {
    _id: existedUser._id,
    email: existedUser.email,
    token: accessToken,
  };
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 1000 * 60 * 60 * 24 * 10,
  });

  res.status(200).json(new ApiResponse(200, userDetail, "Login sucessfully"));
});

export { registerUser, loginUser };
