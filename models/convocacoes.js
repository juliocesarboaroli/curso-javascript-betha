var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _model = new Schema({
    nome: {
        type: String,
        required: [true, 'O nome é obrigatório']
    },
    email: {
        type: String,
        required: [true, 'O email é obrigatório']
    },
    telefone: {
        type: String,
        required: [true, 'O telefone é obrigatório']
    },
    estiloJogo: {
        type: String,
        enum: {
            values: ['Campo', 'Society', 'Futsal', 'Areia'],
            message: 'Tipo inválido'
        }
    },
    data: {
        type: Date,
        required: [true, 'A data é obrigatória']
    },
    horario: {
        type: String,
        required: [true, 'O horário é obrigatório']
    },
    campo: {
        type: String,
        required: [true, 'O nome do campo é obrigatório']
    },
    endereco: {
        type: String,
        required: [true, 'O endereço é obrigatório']
    },
    cep: String,
    goleiro: {
        type: Schema.Types.ObjectId,
        ref: 'goleiros'
    }
});

mongoose.model('convocacoes', _model);