const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('welcome to a simple HTTP cookie server');
});

app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`,`encrypted cookie string Value`);
    res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
        maxAge: 5000,
        expires: new Date('01 12 2021'),
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
    });
    res.send('Cookie have been saved successfully');
});

app.listen(2000, () => console.log('The server is running port 2000...'));