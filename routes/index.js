const router = require("express").Router()

const festRoutes = require("./fests.routes")
router.use("/fests", festRoutes)

const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes)

const usersRoutes = require("./users.routes")
router.use("/users", usersRoutes)

module.exports = router