const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var header = "../partials/header.ejs"
var nav = "../partials/nav.ejs"
var footer = "../partials/footer.ejs"

var indexData = {
  title:'index page',
  content:'index... index... index...',
  testfile:'testfile.ejs', 
  nav: nav,
  header: header,
  footer: footer
}


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
 .get('/', (req, res) => res.render('pages/index',indexData))


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
