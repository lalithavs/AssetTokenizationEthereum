var express = require("express");
var router = express.Router();

// GET Requests
router.get("/", (req, res, next) => {
  res.render("index", { title: "Employee Rewards || Register Employee" });
});

router.get("/disable", (req, res, next) => {
  res.render("disable", { title: "Employee Rewards || Disable Employee" });
});

router.get("/appraisal", (req, res, next) => {
  res.render("appraisal", { title: "Employee Rewards || Employee Appraisal" });
});

router.get("/balance", (req, res, next) => {
  res.render("balance", { title: "Employee Rewards || Token Balance" });
});

router.get("/shop", (req, res, next) => {
  res.render("shop", { title: "Employee Rewards || Shop" });
});

// POST Requests
router.post("/registerEmployee", (req, res, next) => {
  console.log(req.body);
  ContractInstance.methods
    .registerEmployee(
      req.body.employeeAddress,
      req.body.employeeID,
      req.body.employeeName
    )
    .send({ from: adminAccount })
    .then(() => {
      res.render("result", {
        title: "Employee Rewards || Result",
        message: `Employee registered successfully.`,
      });
    })
    .catch(() => {
      res.render("result", {
        title: "Employee Rewards || Result",
        message: `Something went wrong. Please try again.`,
      });
    });
});

router.post("/rateEmployee", (req, res, next) => {
  console.log(req.body);
  ContractInstance.methods
    .setPerformance(req.body.employeeAddress, req.body.employeeRating)
    .send({ from: adminAccount })
    .then(() => {
      res.render("result", {
        title: "Employee Rewards || Result",
        message: `Employee appraised successfully.`,
      });
    })
    .catch(() => {
      res.render("result", {
        title: "Employee Rewards || Result",
        message: `Something went wrong. Please try again.`,
      });
    });
});

router.post("/buy", (req, res, next) => {
  console.log(req.body);
  ContractInstance.methods
    .deductTokens(req.body.address, req.body.item)
    .send({ from: adminAccount })
    .then(() => {
      res.render("result", {
        title: "Employee Rewards || Result",
        message: `Thank you for shopping. Please check your token balance.`,
      });
    })
    .catch(() => {
      res.render("result", {
        title: "Employee Rewards || Result",
        message: `Something went wrong. Please ensure you have sufficient token balance and/or you are a current employee and try again.`,
      });
    });
});

router.post("/disableEmployee", (req, res, next) => {
  console.log(req.body);
  ContractInstance.methods
    .disableEmployee(req.body.address)
    .send({ from: adminAccount })
    .then(() => {
      res.render("result", {
        title: "Employee Rewards || Result",
        message: `Employee disabled successfully.`,
      });
    })
    .catch(() => {
      res.render("result", {
        title: "Employee Rewards || Result",
        message: `Something went wrong. Please try again.`,
      });
    });
});

router.post("/checkBalance", (req, res, next) => {
  console.log(req.body);
  ContractInstance.methods
    .balanceOf(req.body.address)
    .call({ from: adminAccount })
    .then((result) => {
      console.log(result);
      res.render("result", {
        title: "Employee Rewards || Result",
        message: `The account balance is : ${result}`,
      });
    })
    .catch(() => {
      res.render("result", {
        title: "Employee Rewards || Result",
        message: `Something went wrong. Please try again.`,
      });
    });
});

module.exports = router;
