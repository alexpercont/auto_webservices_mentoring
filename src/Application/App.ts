import { Express } from "express";
import express from "express";

export class App {

    readonly express : Express;
    
    constructor(){
        this.express = express();
    }


    public build(): Express {
        return this.express;
    }
}
