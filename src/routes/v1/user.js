const express = ("express");
const asyncHandler = ("../../utils/asyncHandler");
const { create } = ("../../controllers/user");

const router = express.Router();

router.post('/', asyncHandler(create));

module.exports = router;
