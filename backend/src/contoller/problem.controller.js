import { getJudge0LanguageId,submitBatch,pollBatchResults } from '../utils/judge0.utils.js';
import { db } from '../libs/db.js';


export const createProblem = async(req,res) => {
const { title, description, difficulty, tags, constraints, examples, testcases, codeSnippets, refrenceSolution } = req.body;

try { 
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
  } 
  
  catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error While Creating Problem",
    });
  }
};

export const getAllProblems = async(req,res) => { 

}

export const getProblemById = async(req,res) => { 

}

export const updateProblem = async(req,res) => { 

}

export const deleteProblem = async(req,res) => { 

}

export const solvedProblems = async(req,res) => { 

}