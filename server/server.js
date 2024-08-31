const express = require('express');
const app = express();
const path = require('node:path');
const PORT = 3000;
const cors = require('cors');
const corsOptions = {
    origin: 'http://127.0.0.1:5173'
}
const userRoutes = require('./routes/userRoutes');

app.set('views', path.join(__dirname, '../client/src/views'));

app.use(cors(corsOptions));
app.use('/', userRoutes);

app.listen(process.env.port || PORT, () => console.log(`The server has been runned on port: ${process.env.port || PORT}`));

