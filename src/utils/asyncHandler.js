// const asyncHandler = (requestHandler) => {
//   return (req, res, next) => {
//       Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
//   }
// }

const asyncHandler = (func) => async (req, res, next) => {
  try {
    return await func(req, res, next);
  } catch (error) {
   return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};

export { asyncHandler };
