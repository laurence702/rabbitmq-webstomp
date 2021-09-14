const express = require('express');
const webstomp = require('webstomp-client');
const websocket = require('ws');

const client = webstomp.over(new  websocket('ws://127.0.0.1:15674/ws'));
const app = express();
port = 5000;

let message = 'I am connected to rabbitMQ using webstomp';

function on_error(user, error) {
    console.log('Disconnected',user.name, error);
};

function on_connect(user) {
    console.log('connected', user.name);
    client.send('/exchange/web-service-endpoint', message, {'content-type':'text/plain'} );
};

client.connect('guest', 'guest', on_connect, on_error);


app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});