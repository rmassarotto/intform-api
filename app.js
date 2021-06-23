const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3005;
const cors = require('cors')
const auth = require('./middleware/auth');

const alternativa = require('./routes/alternativa');
const tipo = require('./routes/tipo');
const usuario = require('./routes/usuario');
const categoria = require('./routes/categoria');
const questionario = require('./routes/questionario');
const questao = require('./routes/questao');
const respostaQuestionario = require('./routes/respostaQuestionario');
const login = require('./routes/login');

app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
  })
);

app.use('/login', login)
// app.use(auth);
app.use('/alternativa', alternativa)
app.use('/categoria', categoria)
app.use('/questionario', questionario)
app.use('/questao', questao)
app.use('/tipo', tipo)
app.use('/respostaQuestionario', respostaQuestionario)
app.use('/usuario', usuario)

//-----------------
// app.set('port', port)
// app.get('/', function (request, response) {
//   var result = 'App is running'
//   response.send(result);
// }).listen(app.get('port'), function () {
//   console.log('App is running, server is listening on port ', app.get('port'));
// });
//----------------
app.listen(process.env.PORT || 5000)
// app.listen(port, () => {
//   console.log(`Running in http://localhost:${port}`);
// })