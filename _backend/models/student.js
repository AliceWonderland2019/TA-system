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

<<<<<<< Updated upstream
=======
// const updateInfo = async (username, firstname, lastname, email, introduction ) => {
//     if(firstname){
//         const result1 = await updateFirstName(username, firstname);
//     }
//     if(lastname){
//         const result1 = await updateLastName(username, lastname);
//     }
//     if(email){
//         const result1 = await updateEmail(username, email);
//     }
//     if(introduction){
//         const result1 = await updateIntroduction(username, introduction);
//     }
//     const query = await findUserByUsername(username);
//     console.log('Raw query for updateInfo:', query.toString());
//     const result = await query;
//     return result;
// }

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
    const result = findUserByUsername(username);
    return result;
    // const query = await findUserByUsername(username);
    // console.log('Raw query for updateInfo:', query.toString());
    // const result = await query;
    // return result;
}
>>>>>>> Stashed changes
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