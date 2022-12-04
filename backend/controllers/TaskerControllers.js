//Business Logic of Tasker goes here

//controller for home route
const home = (req, res) => {
  res.send("<h1>This is home of Tasker App</h1>");
};

//export controller
module.exports = { home };
