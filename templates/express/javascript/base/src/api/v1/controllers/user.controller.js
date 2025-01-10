/**
 * @module controllers/user
 * @description This module handles user-related requests.
 */

import {
    fetchAllUsers,
    fetchUserById,
} from "../../../modules/services/user.service.js";
import { responseHandler } from "../../../utils/responseHandler.js";

/**
 * Handles the request to fetch all users.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const getAllUsers = (req, res) => {
    const users = fetchAllUsers();
    responseHandler(res, 200, {
        success: true,
        message: "Users fetched successfully",
        data: users
    });
};

/**
 * Handles the request to fetch a user by ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const getUserById = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = fetchUserById(userId);

    if (!user) {
        responseHandler(res, 404, {
            success: false,
            message: "User not found",
            data: user
        });
    }

    responseHandler(res, 200, {
        success: true,
        message: "User fetched successfully",
        data: user
    });
};
