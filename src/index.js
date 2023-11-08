import connectDB from "./db/index.js";
import { app } from "./app.js";
import { PORT } from "./constants.js";

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is listing on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("server error",err);
    process.exit()
  });
