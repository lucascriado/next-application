import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json('Qualquer coisa!');
});

app.listen(9090, () => {
    console.log('Server is running on port 9090');
});
