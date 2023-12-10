import { SpotifyService } from "../services/SpotifyService";
import { Context } from "koa";

interface ISpotifyController {
  login: (ctx: Context) => void;
  callback: (ctx: Context) => void;
}

export class SpotifyController implements ISpotifyController {
  spotifyService: SpotifyService;

  constructor(service: SpotifyService) {
    this.spotifyService = service;
  }

  login(ctx: Context) {
    try {
      const authenticationUrl = this.spotifyService.getAuthenticationUrl();
      if (!authenticationUrl) {
        throw Error("No authentication url provided");
      }
      ctx.redirect(authenticationUrl);
    } catch (error) {
      console.log(error);
      ctx.status = 500;
      ctx.body = "Internal Server Error";
    }
  }

  async callback(ctx: Context) {
    try {
      const { code } = ctx.request.query;
      if (!code) {
        throw Error("No code provided");
      }
      const accessToken = await this.spotifyService.getAccessToken(
        code.toString()
      );
      ctx.body = accessToken;
    } catch (error) {
      console.log(error);
      ctx.status = 500;
      ctx.body = "Internal Server Error";
    }
  }
}
