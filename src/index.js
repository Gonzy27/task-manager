const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('No se pueden realizar peticiones GET');
//     next();
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('Sitio en mantención');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Servidor levantado en puerto ${port}`);
});

const jwt = require('jsonwebtoken');
const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {
    expiresIn: '7 days'
  });
  console.log(token);

  const data = jwt.verify(token, 'thisismynewcourse');
  console.log(data);
};

myFunction();
