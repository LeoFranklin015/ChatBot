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
let messages = [
  { role: "system", content: "You are a helpful code assistant." },
];
app.post("/", async (req, res) => {
  const { message } = req.body;
  messages.push({ role: "system", content: message });
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
    max_tokens: 100,
  });
  console.log(response.data.choices[0].message);
  if (response.data.choices[0].message) {
    res.json({ message: response.data.choices[0].message });
  }
  // res.status(200).json("Hello World");
});

app.listen(PORT, () => {
  console.log("Listening to the port");
});
