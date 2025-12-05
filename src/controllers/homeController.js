const getHomePage = (req, res) => {
  res.send("Hello World!");
};
const getABC = (req, res) => {
  res.send("checking abc route");
};
const getHoi = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getABC,
  getHoi,
};
