
const { songsController } = require('../songs/songs.controller');

const router = require('express').Router()


router.post("/songs", (req, res) => songsController.createSong(req, res))
router.put("/songs/:id", (req, res) => songsController.updateSong(req, res))
router.delete("/songs/:id", (req, res) => songsController.deleteSong(req, res))
router.get("/songs", (req, res) => songsController.listSongs(req, res))

router.get("/songs/count", (req, res) => songsController.countSongs(req, res))
router.get("/genre/count", (req, res) => songsController.countGenres(req, res))
router.get("/album/count", (req, res) => songsController.countAlbums(req, res))
router.get("/artist/count", (req, res) => songsController.countArtist(req, res))

router.get("/songs/genre/:genre", (req, res) => songsController.listSongsByGenre(req, res))
router.get("/songs/genre/:genre/count", (req, res) => songsController.songsByGenreCount(req, res))

router.get("/songs/album/:album", (req, res) => songsController.listSongsByAlbum(req, res))
router.get("/songs/album/:album/count", (req, res) => songsController.songsByAlbumCount(req, res))

router.get("/songs/artist/:artist", (req, res) => songsController.listSongsByArtist(req, res))
router.get("/songs/artist/:artist/count", (req, res) => songsController.songsByArtistCount(req, res))



module.exports = router;