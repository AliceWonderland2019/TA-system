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
 

module.exports = {
    fetchJob,
    createNewJob
};