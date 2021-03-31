// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EmployeeRewards is ERC20, Ownable{

    // Deployer address
    address private _admin;

    // Performance ratings
    enum performance {appalling, poor, average, excellent, outstanding}

    // Employee details
    struct Employee {
        uint256 employeeID;
        string employeeName;
        performance employeePerformance;
        bool isExistingEmployee;
    }

    mapping (address => Employee) public employees;

    // Initialize the token and admin account
    constructor() ERC20("Employee Rewards Token", "ERT") {
        _admin = msg.sender;
        _mint(_admin, 10000000000);
        _setupDecimals(0);
    }

    // Register a new employee
    function registerEmployee(
        address _address,
        uint256 _employeeID,
        string memory _employeeName) public onlyOwner {
            employees[_address].employeeID = _employeeID;
            employees[_address].employeeName = _employeeName;
            employees[_address].isExistingEmployee = true;
    }

    // Disable an employee and transfer the balance tokens to admin
    function disableEmployee(address _address) public onlyOwner {
        employees[_address].isExistingEmployee = false;
        _transfer(_address, _admin, balanceOf(_address));
    }

    // Check employee status
    function checkEmployeeStatus(address _address) internal view returns(bool) {
        return employees[_address].isExistingEmployee;
    }

    // Give employee performance rating and assign tokens
    function setPerformance(address _address, uint8 _rating) public onlyOwner {
        if(_rating == 1) {
            employees[_address].employeePerformance = performance.poor;
            _transfer(_admin, _address, 250);
        } else if(_rating == 2) {
            employees[_address].employeePerformance = performance.average;
            _transfer(_admin, _address, 500);
        } else if(_rating == 3) {
            employees[_address].employeePerformance = performance.excellent;
            _transfer(_admin, _address, 750);
        } else if(_rating == 4) {
            employees[_address].employeePerformance = performance.outstanding;
            _transfer(_admin, _address, 1000);
        }
    }

    // Check the employee status and burn tokens
    function deductTokens(address _address, uint256 _amount) public {
        require(checkEmployeeStatus(_address)==true, "The person is no more an employee");
        _burn(_address, _amount);
    }
}