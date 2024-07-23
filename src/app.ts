import express, { Application } from "express";

class App {
    public app: Application;
    public port: number;

    constructor(port: number)
    {
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
    }

    private initializeMiddlewares(): void
    {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }))
    }

    public listen(): void
    {
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`);
        });
    }
}

export default App;
