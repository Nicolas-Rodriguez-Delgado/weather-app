const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Set up static directory
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Nicolas Rodriguez'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Nicolas Rodriguez'
    })
})

app.get('/help', (req, res) => {
    console.log(req)
    res.render('help', {
        title: 'This is the help page'
    })
})


app.get('/weather', (req, res) => {
    res.send('Your weather')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})