"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const app = new app_1.default(3000);
if (process.env.NODE_ENV !== 'test') {
    app.listen();
}
else {
    console.log('APP IS ON DEVELOPMENT ENVIRONMENT');
}
exports.default = app;
//# sourceMappingURL=index.js.map