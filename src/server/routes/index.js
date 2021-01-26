"use strict";
exports.__esModule = true;
var express_1 = require("express");
var chirps_1 = require("./chirps");
var router = express_1["default"].Router();
router.use('/chirps', chirps_1["default"]);
exports["default"] = router;
