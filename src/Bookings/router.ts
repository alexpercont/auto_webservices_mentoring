import express from "express";
import { data } from "../Data/data";
import { Request, Response, NextFunction } from 'express';

const router = express.Router();
router.get('/', function(req: Request, res: Response, next: NextFunction) {
    console.log("Requesting all data.")
    res.json(data);
})

router.post('/', function(req: Request, res: Response, next: NextFunction){
    const datos = req.body
    if (Object.keys(datos).length){
        console.log(datos)
        data.push(datos)
        res.sendStatus(201)
    } else {
        console.log("Request does not contain data");
        res.sendStatus(400);
    }
})

export = router;


