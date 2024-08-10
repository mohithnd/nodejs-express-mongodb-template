const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const { DBConnection } = require("./config");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  DBConnection();

  console.log(`Server Is Started On Port: ${ServerConfig.PORT}`);
  // Logger.info("Successfully Started The Server");
});
