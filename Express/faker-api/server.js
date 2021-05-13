const express = require("express");
const cors = require("cors");
const faker = require("faker");
const port = 8000;
const app = express();

app.use(cors());
app.use(express());


class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}


class Company{
    constructor() {
        this.id = faker.datatype.uuid();
        this.address = {
        street : faker.address.streetName(),
        city : faker.address.cityName(),
        state : faker.address.state(),
        zipcode : faker.address.zipCode(),
        country : faker.address.country()
    }}
}



app.get("/", (req, res) => {
    res.json({message: "ok"});
});

app.get("/api/user/new", (req, res) => {
    res.json({ user: new User()})
})

app.get("/api/companies/new", (req, res)=>{
    res.json({company: new Company()});
})

app.get("/api/user/company", (req, res) =>{
    res.json({user: new User(), company: new Company()})
})


app.listen(port, () => console.log(`Listening on port ${port}`));