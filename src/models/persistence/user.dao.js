import users from '../data/users.data';

const get = (userId) => users.find((user) => user.id === userId);

const getAll = () => users;

/**
 * Update a user from its ID.
 *
 * @param {integer} userId
 * @param {Object} newDetails
 * @returns {boolean|*}
 */
const update = (userId, newDetails) => {
    let existingUser = null;
    let userIndex;

    users.map((user, index) => {
        if (user.id === userId) {
            existingUser = user;
            userIndex = index;
        }
    });

    if (!existingUser) {
        return false;
    }

    const updatedUser = {
        ...existingUser,
        ...newDetails
    };

    users.splice(userIndex, 1, updatedUser);

    return updatedUser;
}

/**
 * Insert a user.
 *
 * @param {Object} details
 * @returns {*&{id: number}}
 */
const insert = (details) => {
    const newUser = {
        id: users.length + 1,
        ...details
    };

    users.push(newUser);

    return newUser;
}

/**
 * Remove a user from its ID.
 *
 * @param {integer} userId
 * @returns {*}
 */
const remove = (userId) => {
    const deleteUser = (user, index) => {
        if (user?.id === userId) {
            // Remove the array element of the found user
            users.splice(index, 1);
        }
    };

    return users.find(deleteUser)
}

export default {
    get,
    getAll,
    update,
    insert,
    remove,
}
