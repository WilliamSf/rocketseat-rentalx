import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import { specifcationsRoutes } from './routes/specifcations.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/specifcations', specifcationsRoutes);

app.listen(3333,  () => console.log('Server is running'));