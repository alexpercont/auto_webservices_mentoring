import express from "express";
import { data } from "../Data/data";
import { Request, Response, NextFunction } from 'express';


function filterbyName(e: any, i: any, a: any){
    return e.name.includes()
}

const router = express.Router();
router.get('/', function(req: Request, res: Response, next: NextFunction) {
    const name = req.query.name;
    if (!name){
        console.log("Requesting all data.")
        res.json(data);
    } else {
        console.log("Requesting all data by name " + name);
        res.json(data.filter((e: any, i:any, a: any) => {
            return e.name.includes(name);
        }));
    }
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


