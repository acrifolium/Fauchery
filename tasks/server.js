const express = require('express');

module.exports = function(){
    var app = express();

    app.get('/api/token', function (req, res) {
        res.send({
            name: "olivier",
            test: "coucou"
        });
    });

    app.listen(3001, function () {
        console.log('Express local server listening on port 3001');
    });
}