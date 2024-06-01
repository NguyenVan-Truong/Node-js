import routesAuth from "./auth.js";
import routesCar from "./car.js";

export default function router(app){
    app.use('/api/v1/cars',routesCar)
    app.use('/api/v1/auth',routesAuth)
}