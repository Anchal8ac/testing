import express from 'express';
const router = express.Router();

router.get("/login", (req, res) => {
    res.send("hello")
})

router.post("/signup", (req, res) => {
    console.log(req.body)
    res.send("signup")
})


export default router;