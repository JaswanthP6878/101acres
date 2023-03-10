import express, { Express, Request, Response } from 'express';
import cors from 'cors';
const app: Express = express();
const port = 8000
app.use(cors());


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/user', (req, res) => {
        res.json({data: "value"});
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});