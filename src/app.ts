import express, { Request, Response, NextFunction, Application, ErrorRequestHandler, Router } from 'express'
import createHttpError from 'http-errors';
import morgan from 'morgan'
import router from './routes/api';
import {urlencoded} from  "body-parser";
import cookieParser  from "cookie-parser";
import { config } from 'dotenv';

// import controller from '@/controllers/userController.ts'

class App {
    public express: Application;
    public port: number;

    constructor(port: number) {
        this.express = express();
        this.port = port;

        this.initializeDatabaseConnection();
        this.initializeMiddleware();
    }

    private initializeDatabaseConnection(): void {
    }

    private initializeMiddleware(): void {
        // this.express.use(morgan('dev'));
        this.express.use('/', router);
        // Make sure you place body-parser before your CRUD handlers!
        this.express.use(urlencoded({ extended: true }))

        // to accept json row data request
        this.express.use(express.json())

        this.express.use(cookieParser());
        this.express.use((req: Request, res: Response, next: NextFunction) => {
            next(new createHttpError.NotFound());
        })
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log('server is listening on port :' + this.port);
        })
    }


    // app.get('/', (req: Request, res: Response, next: NextFunction) => {
    //     res.send('Hello from it');
    // })

    // const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
    //     res.status(err.status || 500)
    //     res.send({ message: err.message || 'Unexpected error' })
    // }

    // app.use(errorHandler);

    // app.use('/', (req: Request, res: Response, next: NextFunction) => {
    //     next(new createHttpError.NotFound());
    // })
}

export default App;
