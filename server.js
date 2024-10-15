const express = require('express');
const app  = express();

app.get('/greetings/:username' , (req , res) =>{

    const username = req.params.username;

    res.send(`hello there ${username}`);
    });


    app.get('/roll/:number' , (req , res) =>{

        const number = parseInt(req.params.number);
    

    if (isNaN (Number)){
       const roll = Math.floor(Math.random() * number) +1;

        res.send(`you rolled a ${roll}`);
    }

    else{

    res.send ('you must specify a number.');

    }
    });


    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];

      app.get('/collectibles/:index' , (req , res) =>{

        const index = parseInt(req.params.index);

        if (!isNaN(index) && index >= 0 && index<collectibles.length){
            const item = collectibles[index];
            res.send(`the ${item.name} can be yours if you paid ${item.price}`);
        }

        else{

            res.send('this item is not available try again later');
        }

       

      });

      app.get('/hello', (req, res) => {
        res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
    });

    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];
    
    app.get('/shoes', (req, res) => {
        const minPrice = parseInt(req.query['min-price']);
        const maxPrice = parseInt(req.query['max-price']);
        const shoeType = req.query.type;
    
        let filteredShoes = shoes;
    
        if (!isNaN(minPrice)) {
            filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
        }
    
        if (!isNaN(maxPrice)) {
            filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
        }
    
        if (shoeType) {
            filteredShoes = filteredShoes.filter(shoe => shoe.type === shoeType);
        }
    
        res.json(filteredShoes);
    });
    app.listen(3001, () =>{
        console.log('listening on port 3001');
    });