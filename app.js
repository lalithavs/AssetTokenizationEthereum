var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

Web3 = require("web3");

const EmployeeRewardsJSON = require(path.join(
  __dirname,
  "./build/contracts/EmployeeRewards.json"
));

// Defining the web3
const web3 = new Web3("http://127.0.0.1:7545");

// Retrieve the Admin account (first account in the list of accounts)
global.adminAccount;
web3.eth
  .getAccounts()
  .then((accounts) => {
    adminAccount = accounts[0];
    console.log("Deployer account: ", adminAccount);
  })
  .catch((err) => {
    console.log(err);
  });

// Retrieve the contract address and ABI from the truffle artifact file
const contractAddress = EmployeeRewardsJSON.networks["5777"].address;
const contractAbi = EmployeeRewardsJSON.abi;

// Create an instance to access the deployed contract using the ABI and address
ContractInstance = new web3.eth.Contract(contractAbi, contractAddress);

var indexRouter = require("./routes/index");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
