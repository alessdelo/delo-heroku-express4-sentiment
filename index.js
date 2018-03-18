const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var header = "../partials/header2.ejs"
var nav = "../partials/nav4.ejs"
var footer = "../partials/footer1.ejs"

var indexData = {
  title:'page two',
  content:'bla2 bla2...',
  testfile:'testfile.ejs', 
  nav: nav,
  header: header,
  footer: footer
}


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
 .get('/', (req, res) => res.render('pages/index3',indexData))
    .get('/pag2', (req, res) => res.render('pages/pag2'))
    .get('/pag3', (req, res) => res.render('pages/pag3'))
    .get('/pag4', (req, res) => res.render('pages/pag4'))
    .get('/pag5', (req, res) => res.render('pages/pag5'))
.post('bla', (req, res) => res.render('pages/post'))


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
