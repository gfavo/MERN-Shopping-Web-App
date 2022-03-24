import express from "express";
import { getItems, mockItems, removeAll, getItemsByDep, postItem, getItemsByIds } from "../controllers/items.js";

const router = express.Router();

router.get("/", getItems);
router.get("/:department", getItemsByDep);
router.get("/actions/mock",mockItems);
router.post("/getItemsByIds",getItemsByIds)
router.get("/actions/removeAll",removeAll);
router.post("/", postItem);


export default router;