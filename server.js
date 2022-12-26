const express = require('express')

const app = express();

app.set('views' , './views');

app.set('view engine', 'pug')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const products = [];



  
app.get('/', (req, res) => {
    res.render('form.pug')
  })

  
app.post('/products', async (req, res) => {
    const { name, price, URL } = req.body;
    products.push({ name, price, URL });
    res.redirect('/');
  });

  app.get('/products', async (req, res) => {
   
    res.render('table.pug', { products })
  })

const PORT = 8080;


app.listen(PORT, () => console.log (`Listening on port ${PORT}`))