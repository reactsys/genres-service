const express = require('express');
const router = express.Router();
const Joi = require('joi');

const genres = [
    {id:1, name:"genre1"},
    {id:2, name:"genre2"},
    {id:3, name:"genre3"},
    {id:4, name:"genre4"},
]

router.get("/",(req,res)=>{
    res.send(genres);
});

router.get("/:id",(req,res)=>{
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("Genre with given id not found");
    res.send(genre);
});

router.post("/",(req,res)=>{
    let result = validateGenre(req.body);
    if(result.error) return res.status(400).send(result.error);

    const genre = { 
        id: genres.length + 1,
        name: req.body.name
    };

    genres.push(genre);
    res.send(genre);
});

router.put("/:id",(req,res)=>{
    
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("Genre with given id not found");
    
    let result = validateGenre(genre);
    if(result.error) return res.status(400).send(result.error);

    genre.name = req.body.name;
    res.send(genre);
});

router.delete("/:id",(req,res)=>{
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("Genre with given id not found");

    const index = genres.indexOf(genre);
    genres.splice(index);

    res.send(genre);
});

function validateGenre(genre){
    const schema = {
        name: Joi.string().max(50).required()
    }

     return Joi.validate(genre, schema);
}

module.exports = router;