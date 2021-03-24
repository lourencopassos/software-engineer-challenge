import { AddressInfo } from "net";
import dotenv from 'dotenv';
import express from "express";
import cors from "cors"
import { userRouter, authRouter } from "./routes";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.use('/users', userRouter)
app.use('/auth', authRouter)



export const server = app.listen(3000, () => {
  if (server) {

    const address = server.address() as AddressInfo;
    console.log(`Server running: http://localhost`);
  } else {
    console.error(`Server running failed`);
  }
});