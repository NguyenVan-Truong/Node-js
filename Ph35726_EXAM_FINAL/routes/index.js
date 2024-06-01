import routerAuth from "./auth.js";
import routerBook from "./book.js";

export default function route(app){
    app.use('/api/v1/books' , routerBook)
    app.use('/api/v1/auth' , routerAuth)
}