const express = ("express");
const asyncHandler = ("../../utils/asyncHandler");
const { create,find } = ("../../controllers/user");

const router = express.Router();

router.post("/find", asyncHandler(find));
router.post("/", asyncHandler(create));

module.exports = router;
