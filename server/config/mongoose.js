import "dotenv/config"
import mongoose from "mongoose"

const connectionStr = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_SECRET}@ds153495.mlab.com:53495/heroku_tlh6ksb4`
mongoose.connect(connectionStr)

export default mongoose
