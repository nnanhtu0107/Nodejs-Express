import express from "express";
import homeControllers from "../controllers/homeControllers";
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeControllers.getHompage);
    router.get('/about', (req, res) => {
        res.send('tudev')
    })
    return app.use("/", router)
    
}
// module.export = initWebRoutes;
export default initWebRoute;