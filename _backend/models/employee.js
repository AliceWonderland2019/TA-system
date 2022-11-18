const knex = require('../knex.js');
const EMPLOYEE_TABLE = 'employee';

const createNewEmployee = async (firstname, lastname, username, employee_id) => { 
    const query = knex(EMPLOYEE_TABLE).insert({firstname, lastname, username, employee_id});
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
    const query = knex(EMPLOYEE_TABLE).where({employee_id});
    console.log('Raw query for findUserByEmployeeID:', query.toString());
    const result = await query;
    return result;
}; 

const updateFirstName = async (username, firstname) => {
    const query = await knex(EMPLOYEE_TABLE).where({username}).update({firstname});
    console.log('Raw query for updateFirstName:', query.toString());
    const result = await query;
    return result;
}

const updateLastName = async (username, lastname) => {
    const query = await knex(EMPLOYEE_TABLE).where({username}).update({lastname});
    console.log('Raw query for updateFirstName:', query.toString());
    const result = await query;
    return result;
}

const updateEmail = async (username, email) => {
    const query = await knex(EMPLOYEE_TABLE).where({username}).update({email});
    console.log('Raw query for updateFirstName:', query.toString());
    const result = await query;
    return result;
}

const updateIntroduction = async (username, introduction) => {
    const query = await knex(EMPLOYEE_TABLE).where({username}).update({introduction});
    console.log('Raw query for updateFirstName:', query.toString());
    const result = await query;
    return result;
}

const deleteProfilePicture = async(username) =>{
    const query = knex(EMPLOYEE_TABLE).where({username}).update({profile_pic: null}); 
    console.log('Raw query for deleteProfilePicture:', query.toString());
    const result = await query;
    return result;
}

const updateProfilePicture = async (username, profile_pic) => {
    const query = await knex(EMPLOYEE_TABLE).where({username}).update({profile_pic});
    console.log('Raw query for updateProfilePicture:', query.toString());
    const result = await query;
    return result;
}

const updateInfo = async (username, firstname, lastname, email, introduction ) => {
    if(firstname){
        const result1 = await updateFirstName(username, firstname);
    }
    if(lastname){
        const result1 = await updateLastName(username, lastname);
    }
    if(email){
        const result1 = await updateEmail(username, email);
    }
    if(introduction){
        const result1 = await updateIntroduction(username, introduction);
    }
    // const result = findUserByUsername(username);
    // return result;
    const query = await findUserByUsername(username);
    console.log('Raw query for updateInfo:', query.toString());
    const result = await query;
    return result;
}

module.exports = {
    createNewEmployee,
    findUserByUsername,
    findUserByEmployeeID,
    updateFirstName,
    updateLastName,
    updateEmail,
    updateIntroduction,
    deleteProfilePicture,
    updateProfilePicture,
    updateInfo
};