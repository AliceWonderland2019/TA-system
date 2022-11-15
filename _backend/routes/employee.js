const express = require("express");
const employee = require("../models/employee");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const user = req.user;
        console.log("user:", user);
        const the_employee = await employee.findUserByUsername(user.username);
        res.status(201).json(the_employee);
    } catch (err) {
        console.error('Failed to get employee:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
}); 

router.put('/update', async (req, res, next) => {
    try {
        const user = req.user; 
        const body = req.body;
        const result = await employee.updateInfo(user.username, body.firstname, body.lastname, body.email, body.introduction);
        res.status(200).json(result);
    } catch (err){
        console.error("Could not update info: ", err);
        res.sendStatus(401).json({ message: err.toString() });
    }
    next();
});

router.put('/picture', async(req, res, next)=>{ //Change a rest_owner's address
    try{
        const user = req.user;
        const result = await employee.updateProfilePicture(user.username, req.body.profile_pic);
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
        const result = await employee.deleteProfilePicture(user.username);
        res.status(200).json(result);
    }
    catch(err){
        console.error('Failed to delete picture:', err());
        res.status(400).json({message:err.toString()});
    }
    next();

});

module.exports = router;
