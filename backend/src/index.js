import express from 'express';
import dotenv from 'dotenv';
import authroutes  from './routes/auth.route.js';
import probroutes  from './routes/problem.route.js';
import cookieparser from 'cookie-parser';
import { exeCodeRoute } from './routes/executeCode.route.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieparser());

app.get('/',(req,res) => {
    res.send('hello world')
})

app.use('/api/v1/auth' , authroutes);
app.use('/api/v1/problem' , probroutes);
app.use('/api/v1/execute_code' , exeCodeRoute);


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})