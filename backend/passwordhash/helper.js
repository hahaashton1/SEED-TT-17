const bcrypt = require('bcrypt');

const hashPassword = (unsafePassword) => {
    const salt = bcrypt.genSaltSync();
    const hashPassword = bcrypt.hashSync(unsafePassword, bcrypt.genSaltSync());
    return {salt, hashPassword};
}

const isPasswordValid = (inputPassword, userHash) => {
    return bcrypt.compareSync(inputPassword, userHash);
}

module.exports = {hashPassword, isPasswordValid};

// const newPW = hashPassword("hello");
// console.log(isPasswordValid("hello3", newPW.hashPassword));