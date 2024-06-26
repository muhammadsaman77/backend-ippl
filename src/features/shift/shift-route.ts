import { Router } from "express";
import { JWTMiddleware } from "../../middlewares/jwt_middleware";
import { ShiftController } from "./shift-controller";

const shiftRoute: Router = Router();
shiftRoute.post("/", [JWTMiddleware.verifyToken, ShiftController.addShift]);
shiftRoute.delete("/:shift_id", [
  JWTMiddleware.verifyToken,
  ShiftController.deleteShift,
]);
shiftRoute.get("/", [JWTMiddleware.verifyToken, ShiftController.getAllshifts]);
shiftRoute.post("/assign-shift", [
  JWTMiddleware.verifyToken,
  ShiftController.addAssignShift,
]);
shiftRoute.get("/assign-shift", [
  JWTMiddleware.verifyToken,
  ShiftController.getAllAssignShifts,
]);
shiftRoute.put("/assign-shift/:employee_id", [
  JWTMiddleware.verifyToken,
  ShiftController.updateAssignShift,
]);

export default shiftRoute;
