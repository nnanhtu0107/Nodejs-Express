import express from "express";
import homeControllers from "../controllers/homeControllers";
let router = express.Router();

const initWebRoute = (app) => {
    //app.METHOD(PATH, HANDLER) Basic routing
    router.get('/', homeControllers.getHompage); //method get dùng khi lấy thông tin về.
    router.get('/detail/user/:id', homeControllers.getDetailPage);
    router.post('/create-new-user', homeControllers.createNewUser);
    router.post('/delete-user', homeControllers.deleteUser);
    router.get('/edit-user/:id', homeControllers.getEditPage);
    router.post('/update-user', homeControllers.postUpdateUser);
    router.get('/about', (req, res) => {
        res.send('tudev')
    });
    return app.use("/", router)
    
}
// module.export = initWebRoutes;
export default initWebRoute;