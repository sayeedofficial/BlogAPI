const epxress = require("express");

const app = epxress();
app.use(epxress.json());
const connectDB = require("./DB/db");

//CRUD User Management System Routes
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");

//CRUD Posts Management System Routes
const postRoute = require("./Routes/posts");

connectDB();

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

const port = 5000;
app.listen(port, () => console.log(`Server running at PORT ${port}`));
