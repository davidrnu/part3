const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = encodeURI(process.argv[2]);
const url = `mongodb+srv://david:${password}@phonebook.tjxltwy.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("person", personSchema);

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    console.log("phonebook")
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`);
    });
    mongoose.connection.close();
    process.exit(0);
  });
} else if (process.argv.length === 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  });

  person.save().then((result) => {
    console.log(
      `added ${process.argv[3]} number ${process.argv[4]} to phonebook`
    );
    mongoose.connection.close();
  });
}
