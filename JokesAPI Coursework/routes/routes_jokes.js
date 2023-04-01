const express = require("express");
const {getJokes, getJokeById, postJokes, updateJoke, deleteJoke, getJokeByType} = require("../controllers/controller_jokes");


router = express.Router();

/**
 * @openapi
 *
 * /jokes/get:
 *   get:
 *     summary: Get all jokes from the MongoDB Jokes Collection
 *     tags:
 *       - Jokes
 *     description: Returns a list of all jokes in the MongoDB Jokes Collection
 *     responses:
 *       '200':
 *         description: A list of jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful
 *                   example: true
 *                 data:
 *                   type: array
 *                   description: An array of jokes
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The ID of the joke
 *                         example: "6405e5a923d66af561ae35c5"
 *                       type:
 *                         type: number
 *                         description: The type of the joke
 *                         example: 1
 *                       setup:
 *                         type: string
 *                         description: The setup of the joke
 *                         example: "Did you hear about the over-educated circle?"
 *                       punchline:
 *                         type: string
 *                         description: The punchline of the joke
 *                         example: "It has 360°!"
 *                 example:
 *                   success: true
 *                   data:
 *                     - _id: "6405e5a923d66af561ae35c5"
 *                       type: 1
 *                       setup: "Did you hear about the over-educated circle?"
 *                       punchline: "It has 360°!"
 *
 *       '409':
 *         description: An error occurred while fetching the jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful
 *                   example: false
 *                 data:
 *                   type: array
 *                   description: An empty array
 *                   items: {}
 *                 error:
 *                   type: object
 *                   description: The error that occurred
 *                   example: {}
 *
 */


router.get("/get", getJokes);



/**
 * @openapi
 * /jokes/get/{id}:
 *   get:
 *     summary: Get a joke from a specific ID from the MongoDB Jokes Collection.
 *     tags:
 *       - Jokes
 *     description: Returns a joke object based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the joke to retrieve.
 *     responses:
 *       200:
 *         description: Returns a joke object based on the provided ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful or not.
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The ID of the joke.
 *                         example: "6405e5a923d66af561ae35c5"
 *                       type:
 *                         type: number
 *                         description: The type of the joke.
 *                         example: 1
 *                       setup:
 *                         type: string
 *                         description: The setup of the joke.
 *                         example: "Did you hear about the over-educated circle?"
 *                       punchline:
 *                         type: string
 *                         description: The punchline of the joke.
 *                         example: "It has 360°!"
 *                       __v:
 *                         type: number
 *                         description: The version key of the joke.
 *                         example: 0
 *       409:
 *         description: Returns an error message if the request was unsuccessful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful or not.
 *                   example: false
 *                 data:
 *                   type: array
 *                   description: An empty array.
 *                   items: {}
 *                 error:
 *                   type: object
 *                   description: The error message.
 *                   example: "Joke not found."
 */



router.get("/get/:id", getJokeById);



/**
 * @openapi
 * /jokes/get/gettype/{type}:
 *   get:
 *     summary: Get a joke from a specific type from the MongoDB Jokes Collection
 *     tags:
 *       - Jokes
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: number
 *         description: The type of the joke to get
 *     responses:
 *       200:
 *         description: A joke object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     type:
 *                       type: number
 *                     setup:
 *                       type: string
 *                     punchline:
 *                       type: string
 *                     __v:
 *                       type: number
 *       409:
 *         description: Error object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items: {}
 *                 error:
 *                   type: object
 *
 */

router.get("/get/gettype/:type", getJokeByType);



/**
 * @openapi
 *
 * /jokes/post:
 *   post:
 *     summary: Post a joke to the MongoDB Jokes Collection
 *     tags:
 *       - Jokes
 *     description: Adds a new joke to the MongoDB Jokes Collection
 *     requestBody:
 *       description: The joke object to add
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: number
 *                 description: The type of the joke
 *                 example: 3
 *               setup:
 *                 type: string
 *                 description: The setup of the joke
 *                 example: "Did you hear about the over-educated circle?"
 *               punchline:
 *                 type: string
 *                 description: The punchline of the joke
 *                 example: "It has 360°!"
 *     responses:
 *       '201':
 *         description: The newly added joke
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful
 *                   example: true
 *                 data:
 *                   type: object
 *                   description: The added joke
 *                   properties:
 *                     type:
 *                       type: number
 *                       description: The type of the joke
 *                       example: 3
 *                     setup:
 *                       type: string
 *                       description: The setup of the joke
 *                       example: "Did you hear about the over-educated circle?"
 *                     punchline:
 *                       type: string
 *                       description: The punchline of the joke
 *                       example: "It has 360°!"
 *                     _id:
 *                       type: string
 *                       description: The ID of the added joke
 *                       example: "6426d7b872e138524a0749e2"
 *                     __v:
 *                       type: number
 *                       description: The version of the added joke
 *                       example: 0
 *                 example:
 *                   success: true
 *                   data:
 *                     type: 3
 *                     setup: "Did you hear about the over-educated circle?"
 *                     punchline: "It has 360°!"
 *                     _id: "6426d7b872e138524a0749e2"
 *                     __v: 0
 *
 *       '409':
 *         description: An error occurred while adding the joke
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful
 *                   example: false
 *                 data:
 *                   type: array
 *                   description: An empty array
 *                   items: {}
 *                 error:
 *                   type: object
 *                   description: The error that occurred
 *                   example: {}
 *
 */


router.post("/post", postJokes);






/**
 * @openapi
 *
 * /jokes/update/{id}:
 *   put:
 *     summary: Update a joke in the MongoDB Jokes Collection
 *     tags:
 *       - Jokes
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the joke to update
 *     requestBody:
 *       description: The updated joke object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: number
 *                 description: The type of joke
 *               setup:
 *                 type: string
 *                 description: The setup of the joke.
 *               punchline:
 *                 type: string
 *                 description: The punchline of the joke.
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: A successful response with the updated joke
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful or not
 *                 data:
 *                   type: object
 *                   description: The updated joke object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The ID of the joke
 *                     type:
 *                       type: number
 *                       description: The type of joke
 *                     setup:
 *                       type: string
 *                       description: The setup of the joke.
 *                     punchline:
 *                       type: string
 *                       description: The punchline of the joke.
 *                     __v:
 *                       type: number
 *                       description: The version of the joke object
 *       '409':
 *         description: An error response if the update was unsuccessful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful or not
 *                 data:
 *                   type: array
 *                   description: An empty array
 *                 error:
 *                   type: object
 *                   description: The error object
 */

router.put("/update/:id", updateJoke);



/**
 * @openapi
 * /jokes/delete/{id}:
 *   delete:
 *     summary: Deletes a joke from the MongoDB Jokes Collection
 *     tags:
 *       - Jokes
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the joke to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The joke was successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: string
 *                   example: Joke deleted
 *       409:
 *         description: There was an error deleting the joke
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: array
 *                   example: []
 *                 error:
 *                   type: string
 *                   example: Error message
 */


router.delete("/delete/:id", deleteJoke);

module.exports = router;