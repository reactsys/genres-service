const express = require('express');

const app = express();

app.use(express.json());

const genres = [
    {id:1, name:"genre1"},
    {id:2, name:"genre2"},
    {id:3, name:"genre3"},
    {id:4, name:"genre4"},
]

app.get("/api/genres",(req,res)=>{
    res.send(genres);
});

app.get("/api/genres/:id",(req,res)=>{
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("Genre with given id not found");
    res.send(genre);
});

app.post("/api/genres",(req,res)=>{

});

app.put("/api/genres/:id",(req,res)=>{

});

app.delete("/api/genres/:id",(req,res)=>{

});

let port = 4000;
app.listen(port,()=>{
    console.log(`Genre server started and listening on port: ${port}`);
})
