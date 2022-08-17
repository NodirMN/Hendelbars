const {Router} = require('express')


const router = Router();



router.get("/about", (req, res) => {
    res.render("page/about", {
            isAbout: true,
    });
});


module.exports = router;