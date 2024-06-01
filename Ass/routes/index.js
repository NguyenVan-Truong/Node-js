import routerProducts from './products.js';
export default function router(app){
    app.use('/api/v1/products',routerProducts)
}