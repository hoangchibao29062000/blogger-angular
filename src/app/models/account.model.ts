export class Account {
    user: String= "";
    pass: String= "";
    name: String= "";
    address: String= "";
    date: Date = new Date;
    constructor(user: String="", pass: String="", name: String=""){
        this.user = user
        this.pass = pass
        this.name = name
    }
}