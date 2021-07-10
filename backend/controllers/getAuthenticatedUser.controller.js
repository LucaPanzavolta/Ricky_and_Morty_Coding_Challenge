const getAuthenticatedUser = (req, res) => {
  res.status(200).send({
    success: true,
    message: "You are authenticated.",
    data: req.user,
  });
};

module.exports = {
  getAuthenticatedUser,
};
