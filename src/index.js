const express = require('express');
require('./db/config');
const taskRouter = require('./db/routers/task');
const userRouter = require('./db/routers/user');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Server is up and running on port:'+PORT);
});

app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' , credentials :  true}));
app.use(userRouter);
app.use(taskRouter);