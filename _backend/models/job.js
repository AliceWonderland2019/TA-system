const knex = require('../knex.js');
const JOB_TABLE = 'job';

const fetchJob = async () => {

    const query = knex(JOB_TABLE); 
    const result = await query; 

    return result;
}


module.exports = {
    fetchJob
};