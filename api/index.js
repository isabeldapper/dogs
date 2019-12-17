const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const pets = [{
        nome: "Charlene",
        especie: "Cachorro",
        foto: "http://data.biovet.com.br/file/2018/10/29/H104520-F00000-V006-2000x0.jpeg"
    },
    {
        nome: "Gordo",
        especie: "Cachorro",
        foto: "http://data.biovet.com.br/file/2018/10/29/H104520-F00000-V006-2000x0.jpeg"
    }
]

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
app.get("/pets", (req, res, next) => {
    res.json(pets);
});
app.post("/pets", (req, res, next) => {
    const pet = req.body

    pets.push(pet)

    res.json(pets.length)
});