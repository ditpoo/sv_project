const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => {
    logger.info(`server running on port : ${port}`);
}).on('error', (e) => console.log(e));
