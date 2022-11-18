const knex = require('../knex.js');
const APPPLICATION_TABLE = 'application';

const fetchApplication = async () => {
    const query = knex(APPPLICATION_TABLE); 
    const result = await query; 
    return result;
}

const createNewApplication = async (job_id, student_id, status) => {
    const query = knex(APPPLICATION_TABLE).insert({job_id, student_id, status}); 
    console.log('Raw query for createNewApplication:', query.toString());
    const result = await query; 
    return result;
} 
 
module.exports = {
    fetchApplication,
    createNewApplication
};