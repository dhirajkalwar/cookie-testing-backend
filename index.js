const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
const router = express.Router();
app.use(cors({
    origin: 'https://cookie-testing-frontend.vercel.app',
    credentials: true,
}));
app.use(cookieParser());
app.use(bodyParser.json());

app.post('/setCookie', (req,res) => {
    console.log(req.body.token);
    res.cookie('token',req.body.token,{
        domain:'vercel.app',
    });
    res.json({message:'ok'});
})
app.get('/sendCookie', (req,res) => {
    console.log(req.headers['jwt']);
    console.log(req.cookies.token);
})

const port = process.env.PORT || 3000
app.listen(3000, () => {
    console.log(`welcome to server ${port}`);
})