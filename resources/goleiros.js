var mongoose = require('mongoose');

var goleiroModel = mongoose.model('goleiros');
var parseParams = require('../utils/parse-params');

module.exports = function (app) {
    app.get('/api/goleiros', function (req, resp) {
        goleiroModel.find(parseParams(req.query.filter), [], { sort: { nome: 1 } }).then(function (data) {
            resp.json(data);
        }, function (error) {
            resp.status(500).json(error);
        })
    });

    app.post('/api/goleiros', function (req, resp) {
        goleiroModel.create(req.body).then(function (data) {
            resp.json(data);
        }, function (error) {
            resp.status(500).json(error);
        })
    });

    app.get('/api/goleiros/:id', function (req, resp) {
        goleiroModel.findById(req.params.id).then(function (data) {
            resp.json(data);
        }, function (error) {
            resp.status(500).json(error);
        })
    });

    app.put('/api/goleiros/:id', function (req, resp) {
        var opts = {
            new: true,
            runValidators: true
        }
        goleiroModel.findByIdAndUpdate(req.params.id, req.body, { opts }).then(function (data) {
            resp.json(data);
        }, function (error) {
            resp.status(500).json(error);
        })
    });

    app.delete('/api/goleiros/:id', function (req, resp) {
        goleiroModel.remove({ _id: req.params.id }).then(function (data) {
            resp.json(data);
        }, function (error) {
            resp.status(500).json(error);
        })
    });
}