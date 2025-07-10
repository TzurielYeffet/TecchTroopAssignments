
const songs = {

}


const addSong= function(songName,songLink){
    let identifier = songLink.split('=').pop()
    songs[songName] = identifier;
}

const getSong = function(songName){
    let fullLink = "https://www.youtube.com/watch?v=";
    return fullLink + songs[songName];
}

module.exports = {addSong,getSong};