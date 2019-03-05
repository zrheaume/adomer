import express from "express"
import path from "path"
// Import action routes
import actRoutes from "./actRoutes"
import apiRoutes from "./apiRoutes"

const router = express.Router()

router.use("/api", apiRoutes)
router.use("/act", actRoutes)
router.use((req, res) => {
   res.sendFile(path.resolve("client/build/index.html"))
})

export default router
