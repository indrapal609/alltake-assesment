import app from "./app.js";
import { connectDB } from "./config/connectDB.js";

connectDB();



app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}.`);
});
