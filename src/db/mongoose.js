const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// const User = mongoose.model('User',{
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('El correo ingresado es inválido');
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value){
//             if(value < 0){
//                 throw new Error('El año debe ser mayor a 0');
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('La constraseña no puede incluir la palabra "password" en ella');
//             }
//         }
//     }
// });

// const me = new User({
//     name: '     Gonzalo    ',
//     email: '     Gonzalo.Espinoza@gmail.com     ',
//     password: 'super1PassWORD2er'
// });

// me.save().then(() => {
//     console.log(me);    
// }).catch((error) => {
//     console.log('Error!', error);
// });

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const taskOne = new Task({
    description: '    Descripción número TRES    '
});

taskOne.save().then(() => {
    console.log(taskOne);
}).catch((error) => {
    console.log(error);
});