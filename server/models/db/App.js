import mongoose from "mongoose"
import moment from "moment"

const getDate = () => moment().format("MM/DD/YYYY hh:mm:ss")

const AppSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      unique: true
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
   },
   content: {
      type: Object,
      required: true
   },
   added: {
      type: String,
      default: getDate
   },
   updated: {
      type: String,
      default: getDate
   },
   versions: {
      type: Number,
      default : 1
   }
})

const App = mongoose.model('App', AppSchema)
export default App