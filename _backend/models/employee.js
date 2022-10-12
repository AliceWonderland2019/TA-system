const knex = require('../knex.js');
const EMPLOYEE_TABLE = 'employee';

const createNewEmployee = async (username, employee_id, email) => {
    const query = knex(EMPLOYEE_TABLE).insert({username, employee_id, email});
    console.log('Raw query for createNewEmployee:', query.toString());
    const result = await query;
    return result;
};

const findUserByUsername = async (username) => {
    const query = knex(EMPLOYEE_TABLE).where({username});
    console.log('Raw query for findUserByUsername:', query.toString());
    const result = await query;
    return result;
};

const findUserByEmployeeID = async (employee_id) => {
    const query = knex(STUDENT_TABLE).where({z});
    console.log('Raw query for findUserByEmployeeID:', query.toString());
    const result = await query;
    return result;
};

module.exports = {
    createNewEmployee,
    findUserByUsername,
    findUserByEmployeeID
};