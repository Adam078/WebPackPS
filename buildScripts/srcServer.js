import express  from 'express'
import path from 'path'
import open  from 'open'
import webpack from 'webpack'
import config from '../webpack.config';



const port = 3030
const app = express()
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '../src/index.html'))
})


app.get('/users', function(req,res){
  // hard coding for simplicity
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "Toby", "lastName": "Norton", "email": "tnorton@gmail.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@gmail.com"},
  ]);
});

app.listen(port, function(err){
  if(err){
    console.log(err) // eslint-disable-line
  }else{
    open('http://localhost:'+port)
  }
})
