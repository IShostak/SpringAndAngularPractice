"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
//let myCustomer = new Customer();
//myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";
var myCustomerr = new Customer_1.Customer("Martin", "Dixon");
console.log(myCustomerr.firstName); //without getter won't work
console.log(myCustomerr);
