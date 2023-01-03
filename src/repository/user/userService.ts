import { Request, Response } from "express";
import User from "../../models/user";

class UserService {

    public store(req: Request): any {
        // return 'service called';
        const name = 'test type';

        const user = new User({
            name
        });

        user.save()
            .then((user: Object) => {
                return {
                    success: 1,
                    user
                }
            })
            .catch((error: any) => {
                throw error;
            });
    }
}

export default new UserService();