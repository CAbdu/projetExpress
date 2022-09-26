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

app.get('/tournoi', (req, res) => {
    res.render('tournoi', {layout : 'index'})
})

app.get('/chercheUneTeam', (req, res) => {
    res.render('chercheUneTeam', {layout : 'index'})
})

app.get('/connection', (req, res) => {
    res.render('connection', {layout : 'index'});
})

app.get('/inscription', (req, res) => {
    res.render('inscription', {layout : 'index'});
});
app.listen(port, () => console.log(`App listening to port ${port}`))