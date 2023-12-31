const Router = require("koa-router");
const router = new Router();
const { getEvents, postEvent } = require("./controllers/events.controllers");

router.get("/events_list", getEvents);
router.post("/add_event", postEvent);

module.exports = router;
