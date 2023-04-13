import http from "http";
import app from "./routes/user.js"; // Update the module path here
import connectToDB from "./Connect/DB.js"; // Update the module path here

const port = process.env.PORT || 9110;
const server = http.createServer(app);

server.listen(port, () => {
  new connectToDB();
  console.log(`Server is running on port ${port}`);
});