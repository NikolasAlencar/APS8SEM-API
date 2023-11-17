import { Router } from "express";

import {
  UsersController,
  OptionsController,
  EmailController,
  InfosController,
} from "./../controllers";
import { authenticated } from "../shared/middleware/Authenticated";

const router = Router();

router.post("/auth/login", UsersController.authLogin);
router.post(
  "/adicionar/novo-usuario",
  authenticated,
  UsersController.addNewUser
);
router.post(
  "/obter/user/nome",
  authenticated,
  UsersController.getUserByUserName
);
router.post(
  "/obter/user/email",
  authenticated,
  UsersController.getUserByUserEmail
);
router.post(
  "/obter/options/options-register",
  authenticated,
  OptionsController.getRegister
);
router.post("/obter/options/options-sidenav", OptionsController.getSidenav);
router.post("/enviar-email", EmailController.sendMail);
router.get("/obter-mananciais", InfosController.getMananciais);

export { router };
