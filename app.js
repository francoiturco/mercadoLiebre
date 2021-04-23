const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/ofertas', (req, res) => {
    res.sendFile(path.join(__dirname, './views/ofertas.html'));
});

app.get('/tiendasOficiales', (req, res) => {
    res.sendFile(path.join(__dirname, './views/tiendasOficiales.html'));
});

app.get('/vender', (req, res) => {
    res.sendFile(path.join(__dirname, './views/vender.html'));
});

app.get('/ayuda', (req, res) => {
    res.sendFile(path.join(__dirname, './views/ayuda.html'));
});

app.get('/creaTuCuenta', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/ingresa', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/misCompras', (req, res) => {
    res.sendFile(path.join(__dirname, './views/misCompras.html'));
});

app.listen('3001', () => console.log('Servidor Andando'));
