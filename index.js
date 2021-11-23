const express = require('express');
const cors =require('cors');
const repoContext = require('./repository/repository-wrapper');



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(3000,function(){
    console.log("Server started. Listening on port 3000")

    app.get('/api/songs', (req,res)=>{
    const songs= repoContext.songs.findAllSongs();
    return res.send(songs)
})
    app.get('/api/songs/:id',(req,res)=>{
        const id = req.params.id;
        const song= repoContext.songs.findSongById(id);
        return res.send(song);
    });
    app.post('/api/songs', (req, res)=>{
        const newSong = req.body;
        const addedSong=repoContext.songs.createSong(newSong);
        return res.send(addedSong)
    })

    app.delete('/api/songs/:id',(req, res)=>{
        const id = req.params.id;
        const updatedDataSet = repoContext.songs.deleteSong(id);
        return res.send(updatedDataSet)
    })
});
