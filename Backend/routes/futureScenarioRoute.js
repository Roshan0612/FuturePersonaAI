import express from 'express';
import { createScenario, getScenarios } from '../controller/futureScenarioController.js';

const router = express.Router();

router.post('/', createScenario);
router.get('/', getScenarios);

export default router;