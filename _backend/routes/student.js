const express = require("express");
const student = require("../models/student");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const user = req.user;
        console.log("user:", user);
        const the_student = await student.findUserByUsername(user.username);
        res.status(201).json(the_student);
    } catch (err) {
        console.error('Failed to get student:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

router.put('/picture', async(req, res, next)=>{ //Change a rest_owner's address
    try{
        const user = req.user;
        const result = await student.updateProfilePicture(user.username, req.body.profile_pic);
        res.status(200).json(result);
    }
    catch(err){
        console.error("Failed to put picture: ", err);
        res.status(400).json({message:err.toString()});
    }
    next();
});
router.delete('/picture', async(req, res, next)=>{
    try{
        const user = req.user;
        const result = await student.deleteProfilePicture(user.username);
        res.status(200).json(result);
    }
    catch(err){
        console.error('Failed to delete picture:', err());
        res.status(400).json({message:err.toString()});
    }
    next();

});

module.exports = router;