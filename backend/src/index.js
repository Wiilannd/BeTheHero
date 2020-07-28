const express = require('express');

const app = express();

app.get('/users', (request, response) => {
    response.send('Qualquer coisa aí');
});

app.listen(8181); // tem que ser por último

