import express from 'express';
import productsRouter from './routes/products';
import ordersRoute from './routes/orders';

const app = express();

app.use(express.json());

app.get('/status', (req, res) => res.status(200).json({ message: 'On fire!' }));

app.use('/products', productsRouter);
app.use('/orders', ordersRoute);

export default app;
