import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import mainRoutes from './main.routes';
import userRoutes from './user.routes';

const app = express();
const port = 4000;

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
