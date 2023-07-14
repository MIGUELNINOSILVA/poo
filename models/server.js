import express from 'express';
import cors from 'cors';
import routerTraders from '../routes/trader.routes.js';


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.traderPath = "/api/trader";
        //Middlewares
        this.middlewares();
        //Routing
        this.routes();
    }

    middlewares() {
        //Public direction
        this.app.use(express.static('public'));
        //Cors
        this.app.use(cors());
        //Express json
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.traderPath,routerTraders);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server runing on port ${this.port}`);
        });
    }
}

export default Server;