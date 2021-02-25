require("dotenv").config();
const server = require("./api/server");

const PORT = process.env.NODE_ENV || 5555;

server.listen(PORT, () => {
  console.log(`\n*** Server listening on ${PORT} ***\n`);
});
