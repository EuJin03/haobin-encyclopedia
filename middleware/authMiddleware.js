const admin = (req, res, next) => {
  if (req.body.token === "eujinhensem") {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

export default admin;
