var orm = require("../config/orm.js");

var linkedin = {
    all: function (cb) {
        orm.all("linkedin", function (res) {
            cb(res);
        });
    },
    create: function (cols, val1, val2, cb) {
        orm.create("linkedin", cols, val1, val2, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("linkedin", objColVals, condition, function (res) {
            cb(res);
        });
    },
};

module.exports = linkedin;