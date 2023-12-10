import Router from "koa-router";
import { SpotifyService } from "../services/SpotifyService";
import { SpotifyController } from "../controllers/SpotifyController";

const router = new Router();

const spotifyServiceInstance = new SpotifyService();
const spotifyControllerInstance = new SpotifyController(spotifyServiceInstance);

router.get("/spotify/login", spotifyControllerInstance.login);
router.get("/spotify/callback", spotifyControllerInstance.callback);

export default router;
