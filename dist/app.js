"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const api_1 = __importDefault(require("./routes/api"));
const body_parser_1 = require("body-parser");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import controller from '@/controllers/userController.ts'
class App {
    constructor(port) {
        this.express = (0, express_1.default)();
        this.port = port;
        this.initializeDatabaseConnection();
        this.initializeMiddleware();
    }
    initializeDatabaseConnection() {
    }
    initializeMiddleware() {
        // this.express.use(morgan('dev'));
        this.express.use('/', api_1.default);
        // Make sure you place body-parser before your CRUD handlers!
        this.express.use((0, body_parser_1.urlencoded)({ extended: true }));
        // to accept json row data request
        this.express.use(express_1.default.json());
        this.express.use((0, cookie_parser_1.default)());
        this.express.use((req, res, next) => {
            next(new http_errors_1.default.NotFound());
        });
    }
    listen() {
        this.express.listen(this.port, () => {
            console.log('server is listening on port :' + this.port);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map