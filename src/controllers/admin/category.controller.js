import { Categories } from "../../models/category.model.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import validator from "validator";

// add category
const addCategory = asyncHandler(async (req, res) => {
  const { name, image, description } = req.body;

  if (validator.isEmpty(name, { ignore_whitespace: true })) {
    throw new ApiError(400, "Category name is required!!");
  }
  if (validator.isEmpty(image, { ignore_whitespace: true })) {
    throw new ApiError(400, "Category image is required!!");
  }

  //   Checking category name exists or not
  let existedCategory = await Categories.findOne({ name });
  if (existedCategory) {
    throw new ApiError(401, "Category name already exist");
  }

  const category = new Categories({ name, image, description });
  await category.save();

  res
    .status(200)
    .json(new ApiResponse(200, null, "Category added successfully"));
});

// get all categories

const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Categories.find({}, { __v: 0 });

  res
    .status(200)
    .json(new ApiResponse(200, categories, "Get all categories successfully"));
});

// get category detail
const getCategoryDetail = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const categoryDetail = await Categories.findById(id);
  if(categoryDetail){
    res
    .status(200)
    .json(
      new ApiResponse(200, categoryDetail, "Get Category detail successfully")
    );
  }
  else{
    throw new ApiError(400,"Category not found!!")
  }

});

const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const updateDocument = await Categories.findByIdAndUpdate(
    id,
    { $set: updatedData },
    { new: true, fields: { __v: 0 } }
  );

  if (updateDocument) {
    res
      .status(200)
      .json(new ApiResponse(200, updateDocument, "Updated Successfully"));
  } else {
    throw new ApiError(400, "Category not found");
  }
});

// delete  category
const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleteCat = await Categories.findByIdAndDelete(id);
  if (deleteCat) {
    res.status(200).json(new ApiResponse(200, null, "Deleted Successfully"));
  } else {
    throw new ApiError(400, "Category not found");
  }
});
export {
  addCategory,
  getAllCategories,
  getCategoryDetail,
  deleteCategory,
  updateCategory,
};
