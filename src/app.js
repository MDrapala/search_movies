const express = require('express')
const hbs = require('hbs')
const path = require('path')
const apiFilm = require('./utils/apiFilm')

const app = express()
const port = process.PORT || 3000

//Definir configuration express 
const publicDirectoryPath = path.join(__dirname, '../public/')
const viewsDirectoryPath = path.join(__dirname, '../templates/views')
const partialsDirectoryPath = path.join(__dirname, '../templates/partials')

//
app.set('view engine', 'hbs')
app.set('views', viewsDirectoryPath)
hbs.registerPartials(partialsDirectoryPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Accueil',
        name: 'Mathieu DRAPALA'
    })
})

//
app.get('/movies', (req, res) => {
    if (!req.query.name) {
        return res.send({
            error: 'You must provide a search term'
        })
    } else {
        apiFilm( req.query.name, (error, { date, title, language, pictures, describe } = {}) => {
            if (error) {
                return res.send({ error })
            } 
                
            res.send({
                pictures: pictures,
                title: title,
                describe: describe,
                language: language,
                date: date,
                name: req.query.name
            })
        })

    }
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Mathieu DRAPALA',
        errorMessage:'Page not found'
    })
}) 

app.listen(port, () => {
    console.log('Server is up on port '+ port +'.')
})