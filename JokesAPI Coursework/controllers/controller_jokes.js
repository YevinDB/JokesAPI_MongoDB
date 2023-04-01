const Joke = require("../models/models_jokes")

const getJokes = async (req,res) => {
    try{
        const jokes = await Joke.find()
        res.status(200).json({success:true, data: jokes})
    }catch (error){
        res.status(409).json({success:false, data: [], error: error})
    }
}
const getJokeById = async (req, res) => {
    const jokeId  =req.params.id;
    try{
        const joke = await Joke.find({_id: jokeId})
        res.status(200).json({success:true, data: joke})
    }catch(error){
        res.status(409).json({success:false, data:[], error:error})
    }
}

const getJokeByType = async (req, res) => {
    const jokeType  =req.params.type;
    try{
        const jokes = await Joke.findOne({type: jokeType})
        res.status(200).json({success:true, data: jokes})
    }catch(error){
        res.status(409).json({success:false, data:[], error:error})
    }
}

//add jokes to DB
const postJokes = async(req, res) => {
    try {
        const newJoke = new Joke (req.body)
        const savedJoke = await newJoke.save()
        res.status(201).json({success:true, data: savedJoke})

    } catch(error){
        res.status(409).json({success:false, data: [], error: error})
    }
}


const updateJoke = async (req, res) => {
    const jokeId = req.params.id;
    try {
        const updatedJoke = await Joke.findOneAndUpdate(
            { _id: jokeId },
            req.body,
            { new: true }
        );
        res.status(200).json({ success: true, data: updatedJoke });
    } catch (error) {
        res.status(409).json({ success: false, data: [], error: error });
    }
};

const deleteJoke = async (req,res) => {
    const jokeId = req.params.id

    try{
        await Joke.findByIdAndDelete({_id: jokeId})
        res.status(200).json({success: true, data: "Joke deleted"})

    } catch(error) {
        res.status(409).json({success: false, data: [], error: error})
    }
}

module.exports = {
    getJokes,
    getJokeById,
    getJokeByType,
    postJokes,
    updateJoke,
    deleteJoke
}