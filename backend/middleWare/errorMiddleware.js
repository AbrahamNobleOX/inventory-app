const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;

  // res.status(statusCode).json({
  //   message: err.message,
  //   stack: process.env.NODE_ENV === "development" ? err.stack : null,
  // });

  const stack = process.env.NODE_ENV === "development" ? err.stack : null;
  const cleanStack = stack
    ? stack
        .split("\n")
        .filter(
          (line) => line.includes("Inven-App") && !line.includes("node_modules")
        )
        .map((line) => line.trim())
    : null;

  res.status(statusCode).json({
    message: err.message,
    stack: cleanStack,
  });
};

module.exports = errorHandler;
