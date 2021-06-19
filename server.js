const epxress = require("express");

const app = epxress();
app.use(epxress.json());
const connectDB = require("./DB/db");

const authRoute = require("./Routes/auth");


connectDB();

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.use("/api/auth", authRoute);

const port = 5000;
app.listen(port, () => console.log(`Server running at PORT ${port}`));
