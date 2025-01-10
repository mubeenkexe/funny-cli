/**
 * @module routes/index
 * @description This module connects all user-related routes with versioning.
 */

import express from "express";
import userRoutes from "./routes/user.routes.js";

const router = express.Router();

// Connect user routes
router.use("/users", userRoutes);

export default router;
