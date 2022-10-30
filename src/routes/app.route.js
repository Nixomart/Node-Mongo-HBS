import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/editing", (req, res) => {
  res.render("editing");
});

export default router;
