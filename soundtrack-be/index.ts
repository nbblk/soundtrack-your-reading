import Koa from "koa";
import parser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import compose from "koa-compose";
import { config } from "./config/config";

import healthCheckRoute from "./routes/healthcheckRoute";
import SpotifyRoutes from "./routes/spotifyRoutes";

const App = new Koa();
const port = 8000;
const middleware = [healthCheckRoute.routes(), SpotifyRoutes.routes()];

App.use(parser())
  .use(cors({ origin: "*" }))
  .use(logger())
  .use(compose(middleware))
  .listen(config.port, () => {
    console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`);
  });

export default App;
