import express from 'express';
const router = express.Router();
import UserModel from '../model/user.js';


router.get("/",(req,res)=>{
    // res.send("hello rawat sir !")
    res.status(200).json({status: "OK", message: "Hello rawat sir!"})
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.password !== password) {
            console.log("Incorrect password");
            return res.status(401).json({ message: 'Incorrect password' });
        }
        console.log("Login successful");
        console.log(user);

        res.status(200).json({ message: 'successfully login', user });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: 'Server error' });
    }
});



router.post("/signup", (req, res) => {
    // console.log(req.body)
    const use = new UserModel(req.body);
    use.save()
})



export default router;