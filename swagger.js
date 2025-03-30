const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Astronomical Bodies API",
    description: "Stores information about planets and stars",
  },
  host: "ces-341-project2.onrender.com",
  schemes: ["https"]
};

const outputFile = "./swagger.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);