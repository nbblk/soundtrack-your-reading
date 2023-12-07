const { GET, POST, route } = require("awilix-koa");
class SpotifyController {
  constructor({ spotifyService }) {
    this.spotifyService = spotifyService;
  }

  @GET()
  @route("/spotify/login")
  async login(ctx) {
    try {
      const authenticationUrl = this.spotifyService.getAuthenticationUrl();
      ctx.redirect(authenticationUrl);
    } catch (error) {
      console.log(error);
      ctx.status = 500;
      ctx.body = "Internal Server Error";
    }
  }

  @GET()
  @route("/spotify/callback")
  async callback(ctx) {
    try {
      const { code } = ctx.request.query;
      const accessToken = await this.spotifyService.getAccessToken(code);
      ctx.body = accessToken;
    } catch (error) {
      console.log(error);
      ctx.status = 500;
      ctx.body = "Internal Server Error";
    }
  }
}

module.exports = SpotifyController;
