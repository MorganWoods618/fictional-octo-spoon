const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officenumber){
        super(name, id, email)
        this.officenumber=officenumber
    }
    getofficenumber(){
        return this.officenumber
    }
    getrole(){
        return "Manager"
    }
}

module.exports = Manager

