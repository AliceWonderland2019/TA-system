const knex = require('../knex.js');
const STUDENT_TABLE = 'student';

const createNewStudent = async (firstname, lastname, username, student_id) => {
    const query = knex(STUDENT_TABLE).insert({firstname, lastname, username, student_id});
    console.log('Raw query for createNewStudentUser:', query.toString());
    const result = await query;
    return result;
};

const findUserByUsername = async (username) => {
    const query = knex(STUDENT_TABLE).where({username});
    console.log('Raw query for findUserByUsername:', query.toString());
    const result = await query;
    return result;
};

const findUserByStudentID = async (student_id) => {
    const query = knex(STUDENT_TABLE).where({student_id});
    console.log('Raw query for findUserByStudentID:', query.toString());
    const result = await query;
    return result;
};

const updateProfilePicture = async (username, profile_pic) => {
    const query = await knex(STUDENT_TABLE).where({username}).update({profile_pic});
    console.log('Raw query for updateProfilePicture:', query.toString());
    const result = await query;
    return result;
}

const deleteProfilePicture = async(username) =>{
    const query = knex(STUDENT_TABLE).where({username}).update({profile_pic: null}); 
    console.log('Raw query for deleteProfilePicture:', query.toString());
    const result = await query;
    return result;
}

module.exports = {
    createNewStudent,
    findUserByUsername,
    findUserByStudentID,
    updateProfilePicture,
    deleteProfilePicture
};