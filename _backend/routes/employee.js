const express = require("express");
const employee = require("../models/employee");
const job = require("../models/job"); 
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


router.get("/jobs", async (req, res, next) => {
    try { 
        const job_list = await job.fetchJob();
        res.status(201).json(job_list);
    } catch (err) {
        console.error('Failed to get jobs:', err);
        res.status(401).json({ message: err.toString() });
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

// employee_id, course_id, course_name, shcdule, posted_date, 
// status, semster, salary, deadline, position, introduction
// create new job
router.post("/newjobs", async (req, res, next) => {
    try {  
        const body = req.body;
        console.log(body); 
        const result = job.createNewJob(
          body.employee_id, 
          body.course_id,
          body.course_name,
          body.schedule,
          body.posted_date,
          body.status,
          body.semster,
          body.salary,
          body.deadline,
          body.position,
          body.introduction       
        );
        res.status(201).json(result); 
    } catch (err) {
      console.error("Failed to create new user:", err);
      res.status(500).json({ message: err.toString() });
    }
    next();
  });

module.exports = router;
