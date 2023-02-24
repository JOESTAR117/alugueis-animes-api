import { Router } from "express";
import { Auth } from "../middlewares/Auth";
import { validId, validUser } from "../middlewares/Global";
import { AuthenticateUserController } from "../modules/AuthenticateUser/AuthenticateUserControllers";
import { CreateUserController } from "../modules/User/CreateUser/CreateUserControllers";
import { FindAllUsersControllers } from "../modules/User/findAllUser/FindAllUserControollers";
import { PasswordRecovery } from "../modules/User/PasswordRecovery/PasswordRecoveryController";
import { RefreshTokenUserController } from "../modules/User/RefreshTokenUser/RefreshTokenUserController";
import { UpdateUserController } from "../modules/User/UpdateUser/UpdateUserController";

const createUserController = new CreateUserController();
const findAllUsersController = new FindAllUsersControllers();
const updateUserController = new UpdateUserController();
const authenticateUserController = new AuthenticateUserController();

const refreshTokenUserController = new RefreshTokenUserController();

const passwordRecoveryController = new PasswordRecovery();

const user = Router();

user.post("/", createUserController.handle);
user.get("/", findAllUsersController.handle);
user.post("/login", authenticateUserController.handle);
user.post("/refresh-token", refreshTokenUserController.handle);

user.post("/recovery", passwordRecoveryController.handle);

user.patch("/:id", validId, validUser, updateUserController.handle);

export { user };
