import express from 'express';
import serverRouter from './routes/serverRouter.js';
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use(serverRouter);


const port : string | number  = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port: ${port}`));

export default app;
