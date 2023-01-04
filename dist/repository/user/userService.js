"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../models/user"));
class UserService {
    store(req) {
        // return 'service called';
        const name = 'test type';
        const user = new user_1.default({
            name
        });
        user.save()
            .then((user) => {
            return {
                success: 1,
                user
            };
        })
            .catch((error) => {
            throw error;
        });
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map