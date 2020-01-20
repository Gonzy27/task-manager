//CRUD
const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true , useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log('No se logró conectar a la base de datos');
    }

    const db = client.db(databaseName);

    //Borrar

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // db.collection('tasks').deleteOne({
    //     description: 'Descripción número Uno'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    //Actualizar

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5e24d31dd5e0734d248e249b')
    // }, {
    //     $set: {
    //         name: 'Rambo'
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount);
    // }).catch((error) => {
    //     console.log(error);
    // })

    //Lectura

    // db.collection('users').findOne({_id: new ObjectID('5e24e0a5c502ec3e645a09fa')}, (error, user) => {
    //     if(error){
    //         console.log('No se pudo consultar el usuario');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find({age: 25}).toArray((error, users) => {
    //     console.log(users);
    // });
    
    // db.collection('tasks').findOne({_id: new ObjectID('5e24dac5565e0a3c7cd86288')}, (error, task) => {
    //     if(error){
    //         return console.log('No se pudo encontrar la tarea');
    //     }     
    //     console.log(task);
    // });

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     if(error){
    //         return console.log('No se pudo realizar la consulta');
    //     }
    //     console.log(tasks);
    // })

    // db.collection('users').find({age: 25}).count((error, count) => {
    //     console.log(count);
    // });
    
    //Inserción

    // db.collection('users').insertOne({
    //     name: 'Gonzalo3',
    //     age: 26
    // }, (error, result) => {
    //     if(error){
    //         return console.log('No se pudo insertar el dato');
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name:'Fabián',
    //         age: 26
    //     },
    //     {
    //         name: 'Gonzalo2',
    //         age: 27
    //     }
    // ], (error, result) => {
    //      if(error){
    //         return console.log('No se pudieron insertar los datos');
    //      }
    //      console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Descripción número Uno',
    //         completed: true
    //     },
    //     {
    //         description: 'Descripción número Dos',
    //         completed: true
    //     },
    //     {
    //         description: 'Descripción número Tres',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('No se pudieron insertar los datos');
    //     }
    //     console.log(result.ops);
    // })


});