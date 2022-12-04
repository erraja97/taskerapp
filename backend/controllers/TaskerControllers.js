//Business Logic of Tasker goes here

//controller for home route
const home = (req, res) => {
  res.send("This is home of Tasker App");
};

//export controller
module.exports = { home };
