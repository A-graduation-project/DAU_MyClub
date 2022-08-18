import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRouter from "./router/tweets.js";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/", tweetsRouter); //tweets도메인에서 이뤄진다.

//Not Found
app.use((req, res, next) => {
  res.sendStatus(404);
});
//Sever error
app.use((req, res, next) => {
  res.sendStatus(500);
});

app.listen(8080);
