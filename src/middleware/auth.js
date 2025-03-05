const adminAuth = (req, res, next) => {
  console.log("Inside Admin Auth");
  const token = "xyz";
  const isAuthorizedUser = token === "xyz";
  if (!isAuthorizedUser) {
    res.status(401).send("Unauthorized User");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
};
