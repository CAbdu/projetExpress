/* eslint-disable prettier/prettier */
const express = require('express')
const { engine } = require ('express-handlebars');

const app = express()
const port = 3000
// const handlebars = require('express-handlebars')

app.set('view engine', 'handlebars')
app.engine('handlebars', engine({
    layoutsDir: `${__dirname  }/views/layouts`,
}))
app.use(express.static('public'))
app.get('/', (req, res) => {
res.render('main', {layout : 'index'})
})
app.listen(port, () => console.log(`App listening to port ${port}`))