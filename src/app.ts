import express from 'express';
import productsRouter from './routes/products';

const app = express();

app.use(express.json());

app.get('/status', (req, res) => res.status(200).json({ message: 'On fire!' }));

app.use('/products', productsRouter);

export default app;
