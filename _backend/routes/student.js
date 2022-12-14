const express = require("express");
const student = require("../models/student"); 
const job = require("../models/job"); 
const application = require("../models/application"); 
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
        const result = await student.updateInfo(user.username, body.firstname, body.lastname, body.email, body.introduction);
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

// job_id, student_id, status
// create new application 
router.post("/newapplications", async (req, res, next) => {
    try {  
        const body = req.body;
        console.log(body); 
        const result = application.createNewApplication(
          body.job_id,
          body.student_id,
          body.status,
          body.firstname,
          body.lastname,
          body.major,
          body.schoolyear,
          body.reason,
          body.introduction
        );
        res.status(201).json(result); 
    } catch (err) {
      console.error("Failed to create new application:", err);
      res.status(500).json({ message: err.toString() });
    }
    next();
  });

// GET /student/job?id=[id]&schedule=[schedule]&semester=[semester]
router.get("/job", async (req, res, next) => {
    try {  
        const course_id = req.query.course_id;
        const schedule = req.query.schedule;
        const semester = req.query.semester;
        const result = await job.searchJob(course_id, schedule, semester);
        res.status(200).json(result);
    } catch (err) {
      console.error("Failed to find jobs:", err);
      res.status(500).json({ message: err.toString() });
    }
    next();
  });

module.exports = router;

