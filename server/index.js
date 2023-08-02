const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const Post = require("./Model/Post");

// mongodb+srv://hwangyouna04:@cluster0.rdbpqai.mongodb.net/?retryWrites=true&w=majority

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//서버를 열고
// app.listen(port, () => {
//     mongoose
//         // .connect("mongodb+srv://hwangyouna04:@cluster0.rdbpqai.mongodb.net/?retryWrites=true&w=majority")
//         .then(() => {
//     console.log(`Example app listening at http://localhost:${port}`);
//     console.log("Connecting MongoDB...");
//     })
// })

// 서버에 기능 구현
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../client/build/index.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/api/test", (req, res) => {
    const CommunityPost = new Post({title: "test", content: "테스트입니다."})
    CommunityPost.save().then(() => {
    res.status(200).json({ success : true, text: "안녕하세요" })
    });
})