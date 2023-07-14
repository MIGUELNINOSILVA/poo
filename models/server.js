import express from 'express';
import cors from 'cors';
import routerTraders from '../routes/trader.routes.js';
import routerDinero from '../routes/dinero.routes.js';

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.traderPath = "/api/trader";
        this.dineroPath = "/api/dinero";
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
        this.app.use(this.dineroPath, routerDinero);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server runing on port ${this.port}`);
        });
    }
}

export default Server;