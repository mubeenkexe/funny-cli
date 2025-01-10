/**
 * @module services/user
 * @description This module provides user-related services.
 */

import { getUsers } from "../repositories/user.js";

/**
 * Fetches all users.
 * @returns {Array} List of users.
 */
export const fetchAllUsers = () => {
    return getUsers();
};

/**
 * Fetches a user by ID.
 * @param {number} id - The ID of the user to fetch.
 * @returns {Object|null} The user object or null if not found.
 */
export const fetchUserById = (id) => {
    const users = getUsers();
    return users.find((user) => user.id === id) || null;
};
