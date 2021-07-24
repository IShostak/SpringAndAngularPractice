class Customerr {
    private _firstName: string;
    private _lastName: string;

    constructor(first: string, last: string) {
        this._firstName = first;
        this._lastName = last;
    }

    
    public get firstName() : string {
        return this._firstName;
    }

    
    public get lastName() : string {
        return this._lastName;
    }

    
    public set lastName(val : string) {
        this._lastName = val;
    }

    
    public set firstName(val : string) {
        this._firstName = val;
    }
}

//let myCustomer = new Customer();

//myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";

let myCustomerr = new Customerr("Martin", "Dixon")

console.log(myCustomerr.firstName); //without getter won't work

console.log(myCustomerr);