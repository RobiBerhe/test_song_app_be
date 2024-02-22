const songService = require("../services/songs.service");
const { createSongValidator } = require("./song.schema");


const listSongs = async (req, res) => {
    const songs = await songService.listSongs();
    return res.json({ songs })
}

const countSongs = async (req,res)=>{
    const count = await songService.countSongs({});
    return res.json({songs:{count}})
}

const countGenres = async (req,res)=>{
    const count = await songService.countSongsDistinct("genre");
    return res.json({genres:{count}});
}

const countAlbums = async (req,res)=>{
    const count = await songService.countSongsDistinct("album");
    return res.json({albums:{count}});
}

const countArtist = async (req,res)=>{
    const count = await songService.countSongsDistinct("artist");
    return res.json({artists:{count}});
}

const createSong = async (req, res) => {
    const { body } = req;
    const { title, artist, album, genre } = body;
    const validator = createSongValidator({ title, artist, album, genre });
    const validationErrs = validator.validate();
    if (validationErrs.length > 0) return res.status(400).json({ errors: validationErrs });
    const song = await songService.createSong({ title, artist, album, genre });

    return res.json({ song });
}

const updateSong = async (req, res) => {
    const { id } = req.params;
    const { title, artist, album, genre } = req.body;
    const validator = createSongValidator({ title, artist, album, genre });
    const validationErrs = validator.validate();
    if (validationErrs.length > 0) return res.status(400).json({ errors: validationErrs });
    const updated = await songService.updateSong(id, { title, artist, album, genre })
    return res.json({ updated })
}

const deleteSong = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.json({ errors: ["id wasn't specified."] });
    const deleted = await songService.deleteSong(id);
    return res.json({ deleted });
}


const listSongsByGenre = async (req, res) => {
    const { genre } = req.params;
    if (!genre) return res.status(400).json({ errors: ["genre wasn't provided"] })
    const songs = await songService.listSongs({ genre: genre });
    return res.json({ songs })
}

const songsByGenreCount = async (req,res)=>{
    const {genre} = req.params;
    if(!genre) return res.status(400).json({ errors: ["genre wasn't provided"] });
    const count = await songService.countSongs({genre:genre});
    return res.json({genre:{name:genre,count}});
}

const listSongsByAlbum = async (req, res) => {
    const { album } = req.params;
    if (!album) return res.json({ errors: ["album wasn't provided"] })
    const songs = await songService.listSongs({ album: album });
    return res.json({ songs })
}

const songsByAlbumCount = async (req,res)=>{
    const {album} = req.params;
    if(!album) return res.status(400).json({ errors: ["album wasn't provided"] });
    const count = await songService.countSongs({album:album});
    return res.json({album:{name:album,count}});
}


const listSongsByArtist = async (req, res) => {
    const { artist } = req.params;
    if (!artist) return res.json({ errors: ["artist wasn't provided"] })
    const songs = await songService.listSongs({ artist: artist });
    return res.json({ songs })
}

const songsByArtistCount = async (req,res)=>{
    const {artist} = req.params;
    if(!artist) return res.status(400).json({ errors: ["artist wasn't provided"] });
    const count = await songService.countSongs({artist:artist});
    return res.json({artist:{name:artist,count}});
}

const songsController = {
    listSongs,
    createSong,
    updateSong,
    deleteSong,
    listSongsByGenre,
    listSongsByAlbum,
    listSongsByArtist,
    songsByGenreCount,
    songsByAlbumCount,
    songsByArtistCount,
    countSongs,
    countAlbums,
    countArtist,
    countGenres,
}
module.exports = {
    songsController
}