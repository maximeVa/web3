const mongoose = require("mongoose");

const password = process.argv[2];

const url = `mongodb+srv://petitbilouete2010:${password}@cluster0.8quo2rh.mongodb.net/?retryWrites=true&w=majority`;

const phoneSchema = new mongoose.Schema({
  name: String,
  phone: String,
});

const Phone = mongoose.model("Phone", phoneSchema);

mongoose
  .connect(url)
  .then(async() => {
    console.log("connected");

    if (process.argv.length === 3) {
      console.log("Phonebook:");
      await Phone.find({}).then((result) => {
        result.forEach((phone) => {
          console.log(phone);
        });
        mongoose.connection.close();
        process.exit(0);
      });
      
    }
    const name = process.argv[3];
    const number = process.argv[4];

    const phone = new Phone({
      name: name,
      phone: number,
    });

    return phone.save();
  })
  .then((data) => {
    console.log(`added ${data.name} number ${data.phone} to phonebook`);
    return mongoose.connection.close();
  })
  .catch((err) => console.log(err));
