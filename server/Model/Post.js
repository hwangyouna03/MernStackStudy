import mongoose, {Mongoose} from "mongoose";

const kittySchema = new Mongoose.Schema({
    title: String,
    content: String,
}, {collection : "Posts"});

const Post = mongoose.model("Post", postSchema);

module.exports = {Post};