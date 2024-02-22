const express  = require('express');
const config = require('./config');
const loader = require('./loader')
const router = require('./routes/song_routes');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(config.PORT,()=> console.log(`Server started listening on ${config.PORT}`));