const axios = require("axios");
const { generateRandomString } = require("../utils/generateRandomString");

class SpotifyService {
  constructor() {
    this.clientId = process.env.SPOTIFY_CLIENT_ID;
    this.clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    this.redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  }

  getAuthenticationUrl() {
    const scopes = ["user-read-private", "user-read-email", "streaming"];
    const auth_query_parameters = new URLSearchParams({
      response_type: "code",
      client_id: this.clientId,
      scope: scopes,
      redirect_uri: this.redirectUri,
      state: generateRandomString(16),
    });
    const authUrl =
      "https://accounts.spotify.com/authorize?" +
      auth_query_parameters.toString();
    return authUrl;
  }

  async getAccessToken(code) {
    const tokenUrl = "https://accounts.spotify.com/api/token";
    const authHeader = Buffer.from(
      `${this.clientId}:${this.clientSecret}`
    ).toString("base64");
    const data = new URLSearchParams();
    data.append("grant_type", "authorization_code");
    data.append("code", code);
    data.append("redirect_uri", this.redirectUri);

    const response = await axios.post(tokenUrl, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${authHeader}`,
      },
    });

    return response.data.access_token;
  }
}

module.exports = SpotifyService;
