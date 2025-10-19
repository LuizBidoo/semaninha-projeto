import express from 'express';
const app = express();
const port = 8080;
import router from "./routes/routes.js"

// using router
app.use('/', router);

// listener
app.listen(port, () => {
    console.log(`aplicação sendo escutada na porta ${port}`)
})