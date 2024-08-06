const express = require('express');
require('dotenv').config();

const userRouter = require('./api/routes/users.route');
const playerRoute = require('./api/routes/players.route');
const statsRouter = require('./api/routes/player_stats.route');

const swaggerUI = require("swagger-ui-express");
const  yaml  = require("yamljs");


const yamlpath = './api.yaml';
const swaggerJsDocs = yaml.load(yamlpath);


const app = express();
app.use(express.json());

app.use("/api/auth", userRouter);

app.use("/api/players", playerRoute);

app.use("/api/statistics", statsRouter);


//swagger documenttion api
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

const PORT = process.env.PORT;

//server Initialising
const server = app.listen(PORT, () => {
  
  console.log(`Server running on port http://localhost:${PORT}`);
});




// server.on("error", (err) => {
//     if (err.code === 'EADDRINUSE') {
//       process.exit(1);
//     } else {
//       console.error('Server error:', err);
//       process.exit(1);
//     }
//   });

