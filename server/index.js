import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import itemsRoute from "./routes/items.js";
import userRoute from "./routes/user.js";

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/items",itemsRoute);
app.use("/user",userRoute);

app.get("/", (req, res) => {
    res.send("Hello api!");
  });
  
  const PORT =  5000;
  
  mongoose
    .connect("YOUR MONGO DB CONNECTION KEY")
    .then(() =>
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    )
    .catch((error) => console.log(error));

