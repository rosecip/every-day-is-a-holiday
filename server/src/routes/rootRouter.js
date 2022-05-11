import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import holidaysRouter from "./api/v1/holidaysRouter.js"
import reviewsRouter from "./api/v1/reviewsRouter.js"


const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter); 
rootRouter.use("/api/v1/holidays", holidaysRouter)
rootRouter.use("/api/v1/reviews", reviewsRouter)

export default rootRouter;
