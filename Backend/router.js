import express from "express";
import * as tweetController from "../controller/tweets.js";

const router = express.Router();

//GET/모든 트윗 배열형태
router.get("/Alltweets", tweetController.getALLTweets);
//GET/?username=:username 특정 유저이름에 트윗을 가져오기 배열형태
router.get("/tweets/", tweetController.getTweetByUsername);
//GET/:id 특정 ID에 대한 트윗을 가져오기
router.get("/tweets/:id", tweetController.getTweetById);
//POST/     트윗 생성
router.post("/tweets", tweetController.createTweet);
//PUT/:id   업데이트
router.put("/tweets/:id", tweetController.updateTweet);
//DELETE/:id    삭제
router.delete("/tweets/:id", tweetController.deleteTweet);

export default router;
