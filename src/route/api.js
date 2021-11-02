import express from "express";
import APIControllers from '../controllers/APIControllers';
let router = express.Router();

const initAPIRoute = (app) => {
    //app.METHOD(PATH, HANDLER) Basic routing
    router.get('/users', APIControllers.getAllUsers); //method get -> READ data
    router.post('/create-users', APIControllers.createNewUser); //method post -> CREATE data
    router.put('/update-users', APIControllers.updateUser); //method pus -> UPDATE data
    router.delete('/delete-users/:id', APIControllers.deleteUser); //method delete -> DELETE data
    return app.use("/api/v1/", router)
    
}
// module.export = initWebRoutes;
export default initAPIRoute;