import * as tweetRepository from "../data/tweets.js";

export async function getALLTweets(req, res) {
  const data = await tweetRepository.getAll();
  res.status(200).json(data);
}

export async function getTweetByUsername(req, res) {
  const username = req.query.username;
  const tweet = await tweetRepository.getByUsername(username);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.sendStatus(404);
  }
}

export async function getTweetById(req, res) {
  const id = req.params.id;
  const tweet = await tweetRepository.getById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Sorry ${id} is not found` });
  }
}

export async function createTweet(req, res) {
  const text = req.body.text;
  const username = req.body.username;
  const name = req.body.name;
  const tweet = await tweetRepository.create(text, username, name);
  if (tweet) {
    res.status(201).json(tweet);
  } else {
    res.status(204);
  }
}

export async function updateTweet(req, res) {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = await tweetRepository.update(id, text);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found` });
  }
}

export async function deleteTweet(req, res) {
  const id = req.params.id;
  await tweetRepository.remove(id);
  res.sendStatus(204);
}
