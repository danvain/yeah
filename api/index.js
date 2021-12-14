const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const helmet = require("helmet");
// const morgan = require("morgan");
// const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
// requiring the convesation and message route
// const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const roomRouter = require('./routes/roomRoute')
// const router = express.Router();
// const path = require("path");

// dotenv.config();

// creating a connection to our data base
mongoose.connect('mongodb://localhost:27017/final-chat-app',);


// app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   try {
//     return res.status(200).json("File uploded successfully");
//   } catch (error) {
//     console.error(error);
//   }
// });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
// using the convesations and message route
// app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/room", roomRouter)
app.listen(8800, () => {
  console.log("Backend server is running!");
});
