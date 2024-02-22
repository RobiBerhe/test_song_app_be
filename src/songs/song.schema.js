
// validation schema for songs.

const { Validator, validators } = require("../lib/validator");

const createSongValidator = (data)=>{
    return Validator({
        title:[
            validators.isString("title isn't provided"),
            validators.min(2,"title should be a min of 3 chars"),
            validators.max(20,"title should be of max 20 chars")
        ],
        artist:[
            validators.isString("artist isn't provided"),
            validators.min(2,"artist should be a min of 3 chars"),
            validators.max(20,"artist should be of max 20 chars")
        ],
        album:[
            validators.isString("album isn't provided"),
            validators.min(2,"album should be a min of 3 chars"),
            validators.max(20,"album should be of max 20 chars")
        ],
        genre:[
            validators.isString("genre isn't provided"),
            validators.min(2,"genre should be a min of 3 chars"),
            validators.max(20,"genre should be of max 20 chars")
        ]
        },data);
}

module.exports = {
    createSongValidator,
}
