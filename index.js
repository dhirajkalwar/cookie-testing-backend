const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
const router = express.Router();
app.use(cors({
    // origin: 'https://cookie-testing-frontend.vercel.app',
    origin: 'http://localhost:5174',
    credentials: true,
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Expose-Headers', 'jwtoken');
    next();
  });

app.post('/setCookie', (req,res) => {
    console.log(req.body.token);
    // res.cookie('token',req.body.token,{
    //     domain:'vercel.app',
    // });
    // res.setHeader('Set-Cookie', 'jwtoken=ejghqwertyuiopasdfghjklzxcvbnm34kjhdhiraj; max-age=86400; domain=localhost; path=/');
    res.setHeader('jwtoken', 'ejghqwertyuiopasdfghjklzxcvbnm34kjhdhiraj');
    res.json({message:'ok'});
})
app.get('/sendCookie', (req,res) => {
    console.log(req.headers['jwt']);
    console.log(req.headers['jwtoken']);
    console.log(req.cookies.token);
})

const port = process.env.PORT || 3000
app.listen(3000, () => {
    console.log(`welcome to server ${port}`);
})