import routerUsers from "./user.js";
import routerAuth from "./auth.js";
export default function router(app) {
  app.use("/api/v1/user", routerUsers);
  app.use("/api/v1/auth", routerAuth);
}


