import { Request, Response, NextFunction } from "express";
import UserService from "../repository/user/userService";
import User from "../models/user";

export interface UserInterface {
    store(req: Request, res: Response): any
}

class UserController implements UserInterface {


    public store(req: Request, res: Response): any {

        try {
            const data = UserService.store(req);
            res.status(200).json({
                message: 'User registered',
                data
            });
        }
        catch (e) {
            console.log('error occurred');
        }
    }
}

export default new UserController();