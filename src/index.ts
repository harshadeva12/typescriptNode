import App from "./app";

const app = new App(3000);
if (process.env.NODE_ENV !== 'test') {
    app.listen();
}
else {
    console.log('APP IS ON DEVELOPMENT ENVIRONMENT');
}

export default app;