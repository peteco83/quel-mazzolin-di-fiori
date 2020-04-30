const mongoose = require("mongoose")
const Client = require("../models/clientsSchema")
const faker = require("faker/locale/de")

const main = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/restaurant-database", { useNewUrlParser: true, useUnifiedTopology: true  })
    mongoose.connection.on("error", (err) => console.log(err))
    mongoose.connection.on("open", ()=> console.log("database connected"))

    try {
        await Client.deleteMany({});
        // to resolve all the pending promises inside the array 
        console.log("refresh/deleting users")
    }
    catch(err) {
        console.log(err)
    }
    
    // const clientPromises = Array(20).fill(null).map(() => {
    //     const client = new Client({
    //         firstName: faker.name.firstName(),
    //         lastName: faker.name.lastName(),
    //         email: faker.internet.email(),
    //         password: faker.internet.password(),
    //         phoneNumber: faker.phone.phoneNumber(),
    //         address: {
    //             street: faker.address.streetName(),
    //             zipCode: faker.address.zipCode()
    //         }
    //     })

    //     return client.save()
    // })
    
    // try {
    //     await Promise.all(clientPromises)
    //     console.log("users Added into the database")
    // } catch(err) {
    //     console.log(err)
    // }
}

main();