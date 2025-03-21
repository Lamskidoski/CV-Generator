import express from 'express';
import cors from 'cors';
import { createCV } from './functions/createCV';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/cv', createCV);

export default app;
