const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

app.post("/events", async (req, res) => {
  try {
    const event = req.body;

    await axios.post("http://localhost:4000/events", event);
    await axios.post("http://localhost:4001/events", event);
    // await axios.post("http://localhost:4002/events", event);

    res.send({ status: "OK" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
