import mongoose from "mongoose"

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
      type: Object
   }
})

const App = mongoose.model('App', AppSchema)
export default App