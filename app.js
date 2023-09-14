const express = require('express');

const app = express();

const Url = require('./urlModel');

app.use(express.json({limit: '10kb'}))

app.use(express.urlencoded({extended:true, limit: '10kb'}))

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
   const url = await Url.find() 
 res.render('index', {
    url
    
 })   
    
})

app.post('/', async (req,res) =>{
const url = await Url.create({
    url: req.body.url,
    clicks: 0
})

res.status(200).redirect('/')
})


app.get('/:shorted', async (req,res) =>{

    try{
    let urls = await Url.find({generatedUrl: req.params.shorted})
    if (urls.length === 0) return res.status(404).render('error', { url });
    let url = urls[0]; // Access the first object in the array
        url.clicks++
        await url.save()
        res.redirect(url.url)
    }
        catch(err){
        console.log(err)
    }

    app.get('/*', async (req,res) =>{
        res.status(404).render('error')
    })

})





module.exports = app