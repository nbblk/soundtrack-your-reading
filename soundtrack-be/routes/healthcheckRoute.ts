import { Context } from "koa";
import Router from "koa-router";

const router = new Router();

router.get("/healthcheck", async (ctx: Context) => {
  try {
    ctx.body = {
      status: "ok",
    };
  } catch (e) {
    console.error(e);
  }
});

export default router;
