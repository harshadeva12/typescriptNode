"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (req, res, next) => {
    res.send('Hello from it');
});
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        message: err.message || 'Unexpected error'
    });
};
app.use(errorHandler);
app.use('/', (req, res, next) => {
    next(new http_errors_1.default.NotFound());
});
const server = app.listen(PORT, () => {
    console.log('server is listening on port :' + PORT);
});
//# sourceMappingURL=index.js.map