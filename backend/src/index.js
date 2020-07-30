const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const app = express();

//falando para o express que estamos utilizando o cors para nosso backend poder 
//ser acessado pelo frontend
app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(8181, () => {
    console.log('🚀🚀 Server is running');
}); // tem que ser por último
