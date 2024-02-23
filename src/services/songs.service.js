const Song = require("../data/song.model");



const listSongs = async (filter = {},query={page:1,limit:2}) => {
    // return await Song.find({ ...filter });
    const songs = await Song.find({...filter})
                            .limit(query.limit)
                            .skip((query.page -1)*query.limit)
                            .exec();
    return songs;
}

const countSongs = async  (filter={})=>{
    return await Song.countDocuments({...filter});
}

const countSongsDistinct = async  (fieldName)=>{
    return (await Song.countDocuments({}).distinct(fieldName)).length;
}

const createSong = async (songDTO) => {
    if (!songDTO) throw new Error("no data was provided");
    return await Song.create({ ...songDTO });
}

const updateSong = async (id, songDTO) => {
    if (!id || !songDTO) throw new Error("no data was provided");
    return await Song.updateOne({ _id: id }, { ...songDTO });
}

const deleteSong = async (id) => {
    return await Song.deleteOne({ _id: id });
}

const SongService = {
    listSongs,
    createSong,
    updateSong,
    deleteSong,
    countSongs,
    countSongsDistinct
}
module.exports = SongService;