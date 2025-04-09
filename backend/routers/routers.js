import express from 'express';
const router = express.Router();

router.get("/login", (req, res) => {
    res.send("hello")
})

router.get("/signup", (req, res) => {
    res.send("signup")
})


export default router;