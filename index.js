// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const connectDb = require("./config/db");
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("basic route for testing");
// });

// // routes
// app.use("/api/auth", require("./routes/authRoute"));

// connectDb().then(()=> {
//     app.listen(port, ()=> {
//         console.log(`server is running on port ${port}`);
//     })
// })

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./config/db");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// basic route
app.get("/", (req, res) => {
  res.send("basic route for testing");
});

// auth routes
app.use("/api/auth", require("./routes/authRoute"));

// connect DB and start server
// connectDb().then(() => {
//     console.log('attempting to start the server...')
//   app.listen(port, () => {
//     console.log(`server is running on port ${port}`);
//   });
// });
connectDb();
console.log('Database connected successfully, starting server...');
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
