
const express = require("express");
const router = express.Router();
const knex = require('../knex.js');
const JOB_TABLE = 'job';

//fetch the whole jobList
const fetchJob = async () => {
    const query = knex(JOB_TABLE); 
    const result = await query; 
    return result;
}

const createNewJob = async (employee_id, course_id, course_name, schedule, posted_date, status, semester, salary, deadline, position, introduction) => {
    const query = knex(JOB_TABLE).insert({employee_id, course_id, course_name, schedule, posted_date, status, semester, salary, deadline, position, introduction}); 
    console.log('Raw query for createNewJob:', query.toString());
    const result = await query; 
    return result;
} 
 
const findJobByName = async(course_name) => {
    const query = knex(JOB_TABLE).where({course_name: course_name}); 
    console.log('Raw query for findJobByName:', query.toString());
    const result = await query; 
    return result;
}

const findJobByID = async(course_id) => {
  const id='%'+course_id+'%';
  const query = knex(JOB_TABLE).whereLike('course_id',id );
    console.log('Raw query for findJobByID:', query.toString());
    const result = await query; 
    return result;
}

const findJobBySchedule = async(schedule) => {
    const query = knex(JOB_TABLE).where({schedule: schedule}); 
    console.log('Raw query for findJobBySchedule:', query.toString());
    const result = await query; 
    return result;
}
const findJobBySemester = async(semester) => {
  const query = knex(JOB_TABLE).where({semester: semester}); 
  console.log('Raw query for findJobBySemester:', query.toString());
  const result = await query; 
  return result;
}

//findJobByIDScheduleSemester
const findJobByIDScheduleSemester = async(course_id,schedule,semester) => {
  const id='%'+course_id+'%';
  const query = knex(JOB_TABLE).whereLike('course_id',id ).andWhere({schedule:schedule,semester:semester});
  console.log('Raw query for findJobByIDScheduleSemester', query.toString());
  const result = await query; 
  return result;
}
 //findJobByScheduleSemester
 const findJobByScheduleSemester= async(schedule,semester) => {
  const query = knex(JOB_TABLE).where({schedule:schedule,semester:semester});
  console.log('Raw query for findJobByScheduleSemester', query.toString());
  const result = await query; 
  return result;
}
//findJobByIDSemester
const findJobByIDSemester= async(course_id,semester) => {
  const id='%'+course_id+'%';
  const query = knex(JOB_TABLE).whereLike('course_id',id ).andWhere({semester:semester});
  console.log('Raw query for findJobByIDSemester:', query.toString());
  const result = await query; 
  return result;
}
//findJobByIDSchedule
const findJobByIDSchedule = async(course_id,schedule) => {
  const id='%'+course_id+'%';
  const query = knex(JOB_TABLE).whereLike('course_id',id ).andWhere({schedule:schedule}); 
  console.log('Raw query for findJobByIDSchedule:', query.toString());
  const result = await query; 
  return result;
}


const searchJob = async (course_id, schedule,semester) =>{
  var result;
  if (course_id === 'undefined'||course_id === '') {
    console.log('course_id was not given');
    if(schedule === 'undefined'||schedule === '') {
      console.log('schedule was not given');
      //findJobBySemester
      result = await findJobBySemester(semester);
    }else{
      if(semester === 'undefined'||semester === ''){
        //findJobBySchedule
        result = await findJobBySchedule(schedule);
      }
      else{
       //findJobByScheduleSemester
       result = await findJobByScheduleSemester (schedule,semester);
      }
    }
  }
  else{
    if(schedule === 'undefined'||schedule === '') {
      console.log('schedule was not given');
      if(semester === 'undefined'||semester === '') {
        console.log('semester was not given');
        //findJobByID
        result = await findJobByID(course_id);
      }
      else{
        //findJobByIDSemester
        result = await findJobByIDSemester(course_id,semester);
        
      }
    }
    else{
      if(semester === 'undefined'||semester === '') {
        console.log('semester was not given');
        //findJobByIDSchedule
        result = await findJobByIDSchedule(course_id,schedule);
      }
      else{
        //findJobByIDScheduleSemester
        result = await findJobByIDScheduleSemester(course_id,schedule,semester);
      }
    }
  }
  return result;
}
module.exports = {
    fetchJob,
    createNewJob,
    findJobByName,
    findJobByID,
    findJobBySchedule,
    findJobByScheduleSemester,
    findJobByIDSchedule,
    findJobByIDSemester,
    searchJob
};