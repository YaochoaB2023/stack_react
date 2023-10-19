import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import notesRoutes from './routes/notes.routes.js'
import usersRoutes from './routes/users.routes.js'

const app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

app.use("/api", notesRoutes);
app.use("/api", usersRoutes);


export default app;