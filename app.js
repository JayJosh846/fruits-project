// requiring the mongoose servers dependency
const mongoose = require('mongoose');

// connecting to the mongoose servers
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

// Creating a Schema for fruitDB - (Adding a table to the fruitsDB)
const fruitShema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "fruit name required"]
        },
        rating: {
            type: Number,
            min: 1,
            max: 10 
        },
        review: String
    }
);

// Creating a Model for the fruits Collection (table) taking two parameters (collection name and Schema)
const Fruit = mongoose.model("Fruit", fruitShema);


//Adding (Inserting) a fruit (Apple) data into the "Fruit" collection
const fruit = new Fruit(
    {
        rating: 5,
        review: "You cannot a Peach now, can you?"
    }
);

//fruit.save();

//Creating a schema for the fruitDB - Another table into the fruitDB
const personSchema = new mongoose.Schema(
    {
        name: String,
        age: Number
    }
);


// Creating a Model for the Person Collection (table) taking two parameters (collection name and Schema)
const Person = mongoose.model("Person", personSchema);


//Adding (Inserting)  data into the "Person" collection (table)
const person1 = new Person(
    {
        name: "John",
        age: 37,
    }
);

//person1.save();


// Inserting more data into the fruits collection (table)
// const kiwi = new Fruit(
//     {
//         name: "kiwi",
//         rating: 10,
//         review: "The best fruit"
//     }
// );


// const orange = new Fruit(
//     {
//         name: "orange",
//         rating: 6,
//         review: "The sour fruit"
//     }
// );

// const banana = new Fruit(
//     {
//         name: "banana",
//         rating: 8,
//         review: "Good fruit"
//     }
// );


// Fruit.insertMany([kiwi, orange, banana], function(err)
// {
//     if (err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("Succesffully saved fruits into fruitsDB!");
        
//     }
// });

// Fruit.find(function(err, fruits)
// {
//     if (err)
//     {
//         console.log(err);
//     }

//     else
//     {
//         console.log("List of fruits in collection", fruits);

//         fruits.forEach(function (fruit) 
//         {
//             console.log(fruit.name);      
//         });
//     }

     //mongoose.connection.close();
// });

// Fruit.updateOne({_id: "5ef1b44588a9ee74dae95e34"}, {name: "Peach"}, function(err)
// {
//     if (err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("Successfully updated the record");
        
//     }
// });

Fruit.deleteOne({_id:"5ef1b5caf222c7750422975e"}, function(err)
{
    if (err)
    {
        console.log(err);
    }

    else
    {
        console.log("Successfully deleted record");
        
    }
});