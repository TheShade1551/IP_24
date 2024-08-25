import express from "express"
import router from "./routes/student.js"
const app = express()

app.use("/student", router)
app.listen(6969, () => {
    console.log("Hello!")
});