import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/Api-Error.js'
import { pollBatchResults, submitBatch } from '../libs/judge0.libs.js';

export const executeCode = asyncHandler(async(req,resizeBy,next) => {
    const {source_code,stdin,language_id,expected_outputs,problemId} = req.body;
    const userId = req.user.id;

    if (!Array.isArray(stdin) || stdin.length === 0 || !Array.isArray(expected_outputs) || expected_outputs.length === 0)
        throw new ApiError (400,{},'Invalid of missing test cases')

    const submission = stdin.map((input) => ({
        source_code,
        stdin: input,
        language_id,
    }));

    const sumbitResponse = await submitBatch(submission)
    const tokens = sumbitResponse.map((res) => res.tokens)
    const results = await pollBatchResults(tokens);

    console.log('-----------------')
    console.log(results)

    let allPassed = true;
    const detailedResults = results.map((result, i) => {
    const stdout = result.stdout?.trim();
    const expected_output = expected_outputs[i]?.trim();
    const passed = stdout === expected_output;

    if (!passed) allPassed = false;

    return {
        testCase: i + 1,
        passed,
        stdout,
        expected: expected_output,
        stderr: result.stderr || null,
        compile_output: result.compile_output || null,
        status: result.status.description,
        memory: result.memory ? `${result.memory} KB` : undefined,
        time: result.time ? `${result.time} s` : undefined,
    }
})
console.log(detailedResults);
});