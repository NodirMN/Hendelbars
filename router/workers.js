const {Router} = require('express')
const Workers = require('../model/workers')
const router = Router()
const uploads = require('../middleware/file')

router.get('/workers',async(req,res)=>{
    let workers = await Workers.find().lean()
    res.render('page/workers',{
        isWorkers:true,
        workers
    })
})

router.get("/workers/new", (req, res) => {
    res.render("workers/new", {
        isWorkers: true,
    });
});


router.post('/',uploads.single('photo'), async(req,res)=>{
    let {bolim,ism,familiya} = req.body
    let photo = ''

    if (req.file) {
        photo = req.file.path
    }
        let newWorker = await new Workers({ism,familiya, bolim, photo})
        await newWorker.save()
    res.redirect('/workers')
})

router.get('/workers/delete/:id', async(req,res)=>{
            let _id = req.params.id
            await Workers.findByIdAndDelete(_id)
            res.redirect('/workers')
})


// router.get('/:id',async(req,res)=>{
//             const _id = req.params.id
//             let worker = await Workers.findOne({_id}).lean()
//             res.send(worker)
            
// })

module.exports = router  