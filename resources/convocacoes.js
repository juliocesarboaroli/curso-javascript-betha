var mongoose = require('mongoose');

var convocacoesModel = mongoose.model('convocacoes');
var parseParams = require('../utils/parse-params');

module.exports = function (app) {
    app.get('/api/convocacoes', function (req, resp) {
        convocacoesModel.find().populate('goleiro').then(function (data) {
            resp.json(data);
        }, function (error) {
            resp.status(500).send(error);
        })
    });

    app.post('/api/convocacoes', function (req, resp) {
        convocacoesModel.create(req.body).then(function (data) {
            resp.json(data);
        }, function (error) {
            resp.status(500).send(error);
        })
    });

    app.get('/api/convocacoes/:id', function (req, resp) {
        convocacoesModel.findById(req.params.id).then(function (data) {
            resp.json(data);
        }, function (error) {
            resp.status(500).send(error);
        })
    });

    app.put('/api/convocacoes/:id', function (req, resp) {
        var opts = {
            new: true,
            runValidators: true
        }
        convocacoesModel.findByIdAndUpdate(req.params.id, req.body, opts).then(function (data) {
            resp.json(data);
        }, function (error) {
            resp.status(500).send(error);
        })
    });

    app.delete('/api/convocacoes/:id', function (req, resp) {
        convocacoesModel.remove({_id: req.params.id}).then(function (data) {
            resp.json(data);
        }, function (error) {
            resp.status(500).send(error);
        })
    });
}