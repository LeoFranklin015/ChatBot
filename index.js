const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = 3001;

const configuration = new Configuration({
  organization: "org-xRx1KtETkf7By6FYejMDAGuz",
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(bodyParser.json());

app.post("/", async (req, res) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `You are a chatbot to help solving programming questions from the user format the code in a presenatable manner..
    > ${message}
    Solution :`,
    max_tokens: 1000,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
  if (response.data.choices[0].text) {
    res.json({ message: response.data.choices[0].text });
  }
  // res.status(200).json("Hello World");
});

app.listen(PORT, () => {
  console.log("Listening to the port");
});
