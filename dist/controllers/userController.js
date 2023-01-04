"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../repository/user/userService"));
class UserController {
    store(req, res) {
        try {
            const data = userService_1.default.store(req);
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
exports.default = new UserController();
//# sourceMappingURL=userController.js.map