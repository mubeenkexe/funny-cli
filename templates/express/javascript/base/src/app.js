/**
 * @module app
 * @description Main application file for the Express server.
 */

import express from "express";
import corsOptions from "./utils/cors.js";
import cors from "cors";
import greet from "./utils/greet.js";
import v1 from "./api/v1/routes.js";
import { errorHandler } from "./utils/errorHandler.js";

const app = express();

app.use(cors(corsOptions));

app.get("/", greet);
app.use("/api/v1", v1);
app.use(errorHandler);

export default app;
