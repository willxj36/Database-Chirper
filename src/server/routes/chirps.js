"use strict";
exports.__esModule = true;
var express_1 = require("express");
var chirpstore_1 = require("../chirpstore");
var router = express_1["default"].Router();
router.get('/:id?', function (req, res) {
    var id = req.params.id;
    if (id) {
        res.json(chirpstore_1.GetChirp(id));
    }
    else {
        res.send(chirpstore_1.GetChirps());
    }
});
router.post('/', function (req, res) {
    chirpstore_1.CreateChirp(req.body);
    res.sendStatus(200);
});
router.put('/:id', function (req, res) {
    chirpstore_1.UpdateChirp(req.params.id, req.body);
    res.send('Chirp updated successfully!');
});
router["delete"]('/:id', function (req, res) {
    chirpstore_1.DeleteChirp(req.params.id);
    res.send('Chirp deleted successfully!');
});
exports["default"] = router;
