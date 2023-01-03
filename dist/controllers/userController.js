"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../repository/user/userService"));
class UserController {
    store(req, res) {
        return userService_1.default.store(req, res);
        // const name = 'test type';
        // const user = new User({
        //     name
        // });
        // return user.save()
        //     .then((user) => res.status(200).json({ user }))
        //     .catch((error) => res.status(500).json({ error }));
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map