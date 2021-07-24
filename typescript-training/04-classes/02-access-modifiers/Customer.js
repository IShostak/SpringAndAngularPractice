var Customerr = /** @class */ (function () {
    function Customerr(first, last) {
        this._firstName = first;
        this._lastName = last;
    }
    Object.defineProperty(Customerr.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (val) {
            this._firstName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customerr.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (val) {
            this._lastName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Customerr;
}());
//let myCustomer = new Customer();
//myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";
var myCustomerr = new Customerr("Martin", "Dixon");
console.log(myCustomerr.firstName); //without getter won't work
console.log(myCustomerr);
