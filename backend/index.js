/**
 * Configuration for OpenAI API
 * @typedef {Object} Configuration
 * @property {string} apiKey - The API key for OpenAI.
 */

/**
 * OpenAI API client.
 * @typedef {Object} OpenAIApi
 * @property {Configuration} configuration - The configuration for OpenAI API.
 */

const { Configuration, OpenAIApi } = require("openai");

/**
 * Express module
 * @const
 */
const express = require("express");

/**
 * Body Parser module
 * @const
 */
const bodyParser = require("body-parser");

/**
 * CORS module
 * @const
 */
const cors = require("cors");

/**
 * Load environment variables from .env file
 */
require("dotenv").config();

/**
 * Configuration object for OpenAI API
 * @type {Configuration}
 */
const configuration = {
  apiKey: process.env.API_KEY,
};

/**
 * OpenAI API client instance
 * @type {OpenAIApi}
 */
const openai = new OpenAIApi(configuration);

/**
 * Express application
 * @const
 */
const app = express();

/**
 * Middleware for parsing request bodies as JSON
 */
app.use(bodyParser.json());

/**
 * Middleware for handling Cross-Origin Resource Sharing (CORS)
 */
app.use(cors());

/**
 * Port number for the server
 * @const
 * @type {number}
 */
const port = 3080;

/**
 * Route for handling chat requests
 * @name POST/chat
 * @function
 * @memberof app
 * @param {string} message - The message sent by the client.
 * @returns {Object} The response JSON object containing the chat response.
 */
app.post("/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      temperature: 0.7,
      max_tokens: 2048,
    });
    res.json({
      message: response.data.choices[0].text,
    });
  } catch (err) {
    res.status(err?.response?.status ?? 400).json(
      err?.response?.data ?? {
        error: { message: "Failed to fetch message." },
      }
    );
  }
});

/**
 * Start the server
 */
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
