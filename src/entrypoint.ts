import { App } from "./Application/App"
import express from "express";
import router  from "./Bookings/router";

const expr = new App().build();
expr.use(express.json())
expr.use("/bookings", router);
expr.listen(process.env.PORT);
