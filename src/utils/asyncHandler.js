const { NextFunction, Response } = require("express");

module.exports = function asyncHandler(controller) {
    return async function (req, res, next) {
        Promise.resolve(controller(req, res)).catch(next);
    };
}
