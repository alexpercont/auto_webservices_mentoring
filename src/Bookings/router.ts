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
    console.log(datos)
    data.push(datos)
    res.sendStatus(201)
})

export = router;


