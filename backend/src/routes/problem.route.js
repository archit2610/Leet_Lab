import express from 'express';
import { authMiddleware, checkAdmin } from '../middleware/auth.middleware';
import { createProblem,
     getProblemById,
    getAllProblems,
    updateProblem,
    deleteProblem,
    solvedProblems
     } from '../contoller/problem.controller';

const probroutes = express.Router();

probroutes.post('/create-problem',authMiddleware, checkAdmin,createProblem);
probroutes.get('/get-problem/:id',authMiddleware, getProblemById);
probroutes.get('/get-problems',authMiddleware, getAllProblems);
probroutes.post('/update-problem',authMiddleware, checkAdmin,updateProblem);
probroutes.delete('/delete-problem',authMiddleware, checkAdmin,deleteProblem);
probroutes.get('/solved-problems',authMiddleware,solvedProblems);




export default probroutes;