import express from "express";
import { data } from "../Data/data";
import { Request, Response, NextFunction } from 'express';

const router = express.Router();
router.get('/', function(req: Request, res: Response, next: NextFunction) {
    res.json(data);
})

router.post('/', function(req: Request, res: Response, next: NextFunction){
    data.push(req.body)
    res.sendStatus(201)
})

export = router;


