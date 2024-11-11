import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import path from "path";

import dotenv from "dotenv";
dotenv.config();

const port = 8800;
const __dirname = path.resolve();

const app = express();

// app.use({
//   origin: "url of front-end that you hosted",
//   credentials: true
//   })

// app.use(
//   cors({
//     origin: "https://estate-hub-omega.vercel.app",
//     methods: ["POST", "GET"],
//     credentials: true,
//     allowedHeaders: "Content-Type, Authorization",
//   })
// );
app.use(
  cors({
    origin: process.env.CLIENT_URL, // Make sure CLIENT_URL is defined
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(8800, () => {
  console.log("Server is running!");
});

// import express from "express";
// import cors from "cors";
// import postRoute from "./routes/post.route.js";
// import authRoute from "./routes/auth.route.js";
// import testRoute from "./routes/test.route.js";
// import userRoute from "./routes/user.route.js";
// import chatRoute from "./routes/chat.route.js";
// import messageRoute from "./routes/message.route.js";
// import cookieParser from "cookie-parser";

// const app = express();
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);
// app.use("/api/test", testRoute);
// app.use("/api/chats", chatRoute);
// app.use("/api/messages", messageRoute);

// app.listen(8800, () => {
//   console.log("Server is running ");
// });