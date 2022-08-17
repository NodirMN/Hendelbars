const {Router} = require('express')
const router = Router()
const Users = require('../model/users')

router.get('/login', async(req,res)=>{

})

router.post('/login', async(req,res)=>{
        
})

router.get('/reg', async(req,res)=>{
        let msg = req.query.msg
        msg = msg || ''
        res.render('users/reg',{
            msg
        })
})

router.post('/reg', async(req,res)=>{
        let{login,password,name} = req.body
        const checkUser = await Users.findOne({login}).lean()
        if(checkUser){
            res.redirect('/users/reg?msg=1')
        }else{
            let user = await new Users({login,password,name})
            await user.save()
            res.redirect('users/login')
        }
})

module.exports = router;