var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
    nome: {
        type: String,
        required: [true, 'O nome é obrigatório']
    },
    telefone: {
        type: String,
        require: [true, 'O telefone é obrigatório']
    },
    email: String,
    altura: {
        type: Number,
        required: [true, 'A altura é obrigatória']
    },
    idade: {
        type: Number,
        required: [true, 'A idade é obrigatória']
    },
    peso: Number,
    tipoJogo: [{
        type: String,
        enum: {
            values: ['Campo', 'Society', 'Futsal', 'Areia'],
            message: 'Tipo inválido'
        }
    }],
    endereco: {
        type: String,
        required: [true, 'O endereço é obrigatório']
    }
});

mongoose.model('goleiros', _model);