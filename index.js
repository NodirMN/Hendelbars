const express = require('express')
const path = require('path')
const app = express()
const exphbs = require('express-handlebars');
const mongoose = require('mongoose')

///routers
const WorkerRoutes = require('./router/workers')
const About = require('./router/about')
const userRouter = require('./router/user')

////Hendlebars nastroyka 
const hbs = exphbs.create({
    defaultLayout:'main',
    extname:'.hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','views')
app.use(express.urlencoded({ extended: true })); 
/////////////////////////////

app.use(express.static('public'))
app.use("/uploads", express.static("uploads"));

app.get('/',(req,res)=>{
    res.render('page/index',{
        isHome:true
        
    })
})

/////////////Router
app.use(WorkerRoutes);
app.use(About);
app.use('/users',userRouter)
/////////////////////





async function dev(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/workers");
        app.listen(3000,()=>{
            console.log('Server is running 3000');
        })
    } catch (error) {
        console.log(error);
    }
}
dev()
