import * as dotenv from 'dotenv';
import express, { Request, Response,Application } from 'express';
import cors from 'cors';
import morganMiddleware from './config/middleware/morgan';

dotenv.config();

if(!process.env.PORT){
    process.exit(1)
}

const PORT: number = parseInt(process.env.PORT, 10);

const app : Application = express();

//app configuration
app.use(morganMiddleware)
app.use(cors());
app.use(express.json())

//routes
app.get('/', (req: Request, res: Response) => {
    res.send('Something is happening!!')
    }
);

//server activation
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})