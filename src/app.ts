import * as bodyParser from "body-parser";
import * as exress from "express";
import { registerRoutes } from "./routes";

class App {

    public app: exress.Application;

    constructor() {
        this.app = exress();
     
        this.middleware();
        this.setupRoutes();
    }

    private middleware(): void {

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private setupRoutes(): void {
        registerRoutes(this.app);
    }
}

export default new App().app;
