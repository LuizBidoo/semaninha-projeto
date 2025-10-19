import { Router } from "express";

const router = Router();

// Importing controllers

import { root } from "../controllers/root.js";

// Creating routes

router.get('/', root);

export default router;