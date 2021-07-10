const establishDBconnection = require("./db");
const { logError } = require("./helpers/logError");

const startServer = (app, port, environment) => {
  return new Promise((resolve, reject) => {
    app.listen(port, (err) => {
      if (err) {
        console.error('❌ Unable to connect to the server: ', err); // eslint-disable-line
        reject(err);
      } else {
        console.log(`🌍 Server listening on port ${port} - ${environment} environment`); // eslint-disable-line
        resolve();
      }
    });
  });
};

const launchDatabaseAndServer = async (app, port, environment) => {
  try {
    await establishDBconnection();
    await startServer(app, port, environment);
  } catch (err) {
    logError(err);
  }
};

module.exports = {
  launchDatabaseAndServer,
};
