/**
 * @module routes/user
 * @description This module defines the routes for user-related operations.
 */

import express from "express";
import { getAllUsers, getUserById } from "../controllers/user.controller.js";

const router = express.Router();

/**
 * Route to fetch all users.
 * @route GET /api/v1/users
 * @group Users - Operations about users
 * @returns {Array} 200 - An array of user objects
 */
router.get("/", getAllUsers);

/**
 * Route to fetch a user by ID.
 * @route GET /api/v1/users/{id}
 * @group Users - Operations about users
 * @param {number} id.path.required - User ID
 * @returns {Object} 200 - A user object
 * @returns {Object} 404 - User not found
 */
router.get("/:id", getUserById);

export default router;
