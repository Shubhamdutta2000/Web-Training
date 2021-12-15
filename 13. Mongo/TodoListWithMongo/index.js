import express from "express"
import { dbConnect } from "./config/db.js"
import bodyParser from "body-parser";
import todoRouter from "./routes/todoRoute.js"

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

//set up template engine
app.set('view engine', 'ejs');

//static files:  https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

//db connect
dbConnect()

// routes
app.use("/todo", todoRouter);

//listen to port
app.listen(3000);
console.log("Server started at port 3000");


//MVC structure: https://stackoverflow.com/questions/3623172/why-is-mvc-so-popular#:~:text=In%20MVC%2C%20the%20Controller%20and,0%20dependencies%20on%20the%20View.
// alternative to it : https://blog.ircmaxell.com/2014/11/alternatives-to-mvc.html