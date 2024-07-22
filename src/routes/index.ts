import {express, Router} from "express";


const router: Router = express.Router();


router.get("/", {"msg": "hello world"})


export default router;
