const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    Estudiante: {
        type: String,
        required: 'This field is required.'
    },
    Fecha: {
        type: Date
    },
    No_programa: {
        type: String
    },
    Lenguaje: {
        type: String
    },
    Numero: {
        type: String
    },
    Tipo: {
        type: String
    },
    Errores_ingresados: {
        type: String
    },
    Errores_eliminados: {
        type: String
    },
    Tiempo_reparacion: {
        type: String
    },
    Errores_reparacion: {
        type: String
    },
    Descripcion: {
        type: String
    }
});

// Custom validation for email
// employeeSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

mongoose.model('Employee', employeeSchema);