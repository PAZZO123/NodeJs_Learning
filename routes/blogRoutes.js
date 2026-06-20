const express=require('express')
const router= express.Router()
const blogControllers=require('../controllers/blogControllers')
router.get('/' , (req, res)=>{
    res.redirect('/blogs')
})
//create
router.get('/blogs/create', blogControllers.blog_create_get)
router.get('/blogs',blogControllers.blog_index)
//post request
router.post('/blogs',blogControllers.blog_create_post)
//route parameter
router.get('/blogs/:id',blogControllers.blog_details )
//delete request
router.delete('/blogs/:id',blogControllers.blog_delete )

router.get('/about', (req, res)=>{
    //res.send('<p> Hello From Express in About !</p>')
    res.render('about',{title:'About Page'})
})
//redirects


module.exports=router;
