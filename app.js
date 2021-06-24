const express       = require('express');
const cors          = require('cors');
const helmet        = require("helmet");

const indexRouter   = require('./routes/index');
const config        = require('./config');

const app           = express();

app.use(cors(config.corsOpt));
app.use(helmet());
app.use(express.json());

app.use('/mail', indexRouter);

app.listen(config.port, () => {
  console.info(`Server run on port ${config.port}`);
})
module.exports = app;

