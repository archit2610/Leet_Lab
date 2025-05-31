import { getJudge0LanguageId,submitBatch,pollBatchResults } from '../utils/judge0.utils.js';
import { db } from '../libs/db.js';
import { ApiError } from '../utils/Api-Error.js';
import { ApiResponse } from '../utils/Api-Response.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { json } from 'express';

export const createProblem = asyncHandler(async(req,res) => {
const { title, description, difficulty, tags, constraints, examples, testcases, codeSnippets, refrenceSolution } = req.body;

    for (const {Language, solutionCode} of Object.entries(refrenceSolution)) {
        const languageId = getJudge0LanguageId(Language);

        if (!languageId) { return res.status(400).json({ message: `Unsupported language: ${Language}` });}

        const submissions = testcases.map((testcase, index) => ({ 
            source_code: solutionCode,
            language_id: languageId,
            stdin: input,
            expected_output: output,
        }))
        
        const submissionsResults = await submitBatch(submissions);
        const tokens = submissionsResults.map((res) => res.token); 
        const results = await pollBatchResults(tokens);

        for (let i = 0; i < results.length; i++) {
        const result = results[i];
        console.log("Result-----", result);
       
        if (result.status.id !== 3) {
          return res.status(400).json({
            error: `Testcase ${i + 1} failed for language ${Language}`,
          });
        }
      }
    }

    const newProblem = await db.problem.create({
      data: {
        title,
        description,
        difficulty,
        tags,
        examples,
        constraints,
        testcases,
        codeSnippets,
        referenceSolutions,
        userId: req.user.id,
      },
    });

    return res.status(201).json({
      sucess: true,
      message: "Message Created Successfully",
      problem: newProblem,
    });
});

export const getAllProblems = asyncHandler(async(req,res) => { 
  const problems = await db.PROBLEM.findMany({
    include:{
      solvedBy:{
        where:{
          userId:req.user.id
        }
      }
    }
  });

  if (!problems)
    throw new ApiError (400,'No problems found')

  res.status(200).json(new ApiResponse(200,('Problems fetched succesfully')))
});

export const getProblemById = asyncHandler(async(req,res) => {
  const { id } = req.params;
  
  const problem = await db.PROBLEM.findUnique({
    where:{
      id,
    },
  });
  
  if (!problem)
    throw new ApiError (400,'No Such Problem')
  
  res.status(200).json(new ApiResponse(200,('Problem fetched succesfully')))
  
});

export const updateProblem = asyncHandler(async(req,res) => { 
  const { id } = req.params;
  
  const problem = await db.PROBLEM.findUnique({
    where:{
      id,
    },
  });
  
  if (!problem) {
    throw new ApiError (400,'No Such Problem')
  }
  else {
    const { title, description, difficulty, tags, constraints, examples, testcases, codeSnippets, refrenceSolution } = req.body;

    for (const {Language, solutionCode} of Object.entries(refrenceSolution)) {
        const languageId = getJudge0LanguageId(Language);

        if (!languageId) { return res.status(400).json({ message: `Unsupported language: ${Language}` });}

        const submissions = testcases.map((testcase, index) => ({ 
            source_code: solutionCode,
            language_id: languageId,
            stdin: input,
            expected_output: output,
        }))
        
        const submissionsResults = await submitBatch(submissions);
        const tokens = submissionsResults.map((res) => res.token); 
        const results = await pollBatchResults(tokens);

        for (let i = 0; i < results.length; i++) {
        const result = results[i];
        console.log("Result-----", result);
       
        if (result.status.id !== 3) {
          return res.status(400).json({
            error: `Testcase ${i + 1} failed for language ${Language}`,
          });
        }
      }
    }

     const updatedProblem = await db.problem.update({
        where: {
            id: problemId,
            userId: userId,
        },
        data: {
            title,
            description,
            difficulty,
            examples,
            constraints,
            testcases,
            codeSnippets,
            referenceSolutions,
            tags: {
                set: [],
                connectOrCreate: tags.map((tag) => ({
                    where: { value: tag.value },
                    create: { value: tag.value },
                })),
            },
        },
        include: {
            tags: true,
        },
    });

    res.status(200).json(new ApiResponse (200,{updateProblem},'Problem updated successfully'))
  }

  
});

export const deleteProblem = asyncHandler(async(req,res) => { 
  const {id} = req.params;
  
  const deletedProblem = await db.PROBLEM.delete({where:{id}});
  
  if (!deleteProblem)
    throw new ApiError (400,'Problem not found')
    
    res.status(200).json(new ApiResponse(200,('Problem deleted succesfully')))
    
  });
  
  export const solvedProblems = asyncHandler(async(req,res) => { 
    const problems = await db.problem.findMany({
      where:{
        solvedBy:{
          some:{
            userId:req.user.id
          }
        }
      },
      include:{
        solvedBy:{
          where:{
            userId:req.user.id
          }
        }
      }
    })
    
    if (!problems)
      throw new ApiError (400,'No problem solved till now')
      
      res.status(200).json(new ApiResponse(200,('solvedproblems fetched succesfully')))
    
  });