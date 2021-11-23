const express = require('express');
const cors =require('cors');
const repoContext = require('./repository/repository-wrapper');



const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000,function(){
    console.log("Server started. Listening on port 3000")

    app.get('/api/songs', (req,res)=>{
    const songs= repoContext.songs.findAllSongs();
    return res.send(songs)
})

});