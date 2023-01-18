const express = require("express");
const { Router } = require("express");
const asyncHandler = require("../../utils/asyncHandler");
const { create,find } = require("../../controllers/user");

let router = Router();

router.post("/find", asyncHandler(find));
router.post("/", asyncHandler(create));

module.exports = router;
