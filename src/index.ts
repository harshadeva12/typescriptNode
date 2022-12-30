import express, { Request, Response, NextFunction, Application, ErrorRequestHandler } from 'express'
import { Server } from 'http';
import createHttpError from 'http-errors';
// import controller from '@/controllers/userController.ts'

class App {
    public express: Application;
    public port: Number;

    constructor(port: Number){
        this.express = express();
        this.port = port;

        this.initializeDatabaseConnection();
        this.initializeMiddleware();
    }

    private initializeDatabaseConnection() : void
    {
        
    }
   
    private initializeMiddleware() : void
    {
        // this.express.use(errorHandler);
        this.express.use('/', (req: Request, res: Response, next: NextFunction) => {
                next(new createHttpError.NotFound());
            })
    }

// const app: Application = express();

// const PORT = 3000;

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

// const server: Server = app.listen(PORT, () => {
//     console.log('server is listening on port :' + PORT);
// })

}