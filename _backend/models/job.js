const knex = require('../knex.js');
const JOB_TABLE = 'job';

const fetchJob = async () => {
    const query = knex(JOB_TABLE); 
    const result = await query; 
    return result;
}

const createNewJob = async (employee_id, course_id, course_name, schedule, posted_date, status, semster, salary, deadline, position, introduction) => {
    const query = knex(JOB_TABLE).insert({employee_id, course_id, course_name, schedule, posted_date, status, semster, salary, deadline, position, introduction}); 
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
    const query = knex(JOB_TABLE).where({course_id: course_id}); 
    console.log('Raw query for findJobByID:', query.toString());
    const result = await query; 
    return result;
}

const findJobBySchedule = async(schedule) => {
    const query = knex(JOB_TABLE).where({schedule: schedule}); 
    console.log('Raw query for findJobBSchedule:', query.toString());
    const result = await query; 
    return result;
}

const searchJob = async (course_name, course_id, schedule) =>{
    const results = await fetchJob();
    var results1 = results;
    if (course_name === undefined) {
      console.log('course_name was not given');
    }else{
      console.log('course_name: ',course_name);
      results1 = await findJobByName(course_name, results);
    }
    var results2 = results1;
    if (course_id === undefined) {
      console.log('course_id was not given');
    }else{
      console.log('course_id: ', course_id);
      results2 = await findJobByID(course_id, results1);
    }
    var results3 = results2;
    if (schedule === undefined) {
      console.log('schedule was not given');
    }else{
      console.log('schedule: ', schedule);
      results3 = await findJobBySchedule(schedule, results2);
    }
    return results3;
}

module.exports = {
    fetchJob,
    createNewJob,
    findJobByName,
    findJobByID,
    findJobBySchedule,
    searchJob
};