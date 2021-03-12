const router = require('express').Router();
const productRouter = require('./product');


router.get("/", (req, res) => {
    res.status(200).json({
        "message": "Hello Word"
    });
});

router.use("/products", productRouter);
module.exports = router;