import { connectDB } from './db.js'
import app from './app.js'

connectDB()


app.listen(4000)
console.log('server in running port', 4000)