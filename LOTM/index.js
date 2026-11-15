
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.redirect("/intro.html");
});

const PORT = process.env.PORT || 8080;

// Export Express app for Vercel
module.exports = app;

// Start local server when running directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
