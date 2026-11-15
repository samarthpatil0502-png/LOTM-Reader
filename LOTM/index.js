const express = require("express")
const app = express();
const path = require("path")

const PORT = 8080;

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"public", "intro.html"))
});
app.use(express.static(path.join(__dirname,"public")));

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});