import userDao from '../models/persistence/user.dao';

/**
 * Get all users.
 *
 * @returns {[]}
 */
const getAllUsers = () => userDao.getAll();

/**
 * Get a user from its ID.
 *
 * @param {integer} userId
 * @returns {T}
 */
const getUser = (userId) => userDao.get(userId);

/**
 * Update a user.
 *
 * @param {integer} userId
 * @param details
 * @returns {boolean|*}
 */
const updateUser = (userId, details) => userDao.update(userId, details);

/**
 * Add a user.
 *
 * @param {Object} details
 * @returns {*}
 */
const addUser = (details) => userDao.insert(details);

/**
 * Remove a user.
 *
 * @param {integer} userId
 * @returns {*}
 */
const removeUser = (userId) => userDao.remove(userId);

export default {
    getUser,
    getAllUsers,
    updateUser,
    addUser,
    removeUser
}

