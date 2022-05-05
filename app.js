const express = require("express")
const axios = require('axios')
let app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs")
const urlList = []

app.get("/", (req, res) => {
    res.render("home", {urlList: urlList})
})

app.post("/", (req, res) => {

    const url = req.body.url
    let shortLink
    axios
        .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then(resulData => {
            shortLink = resulData.data.result.full_short_link
            let urlContent = {
                url: url,
                shortLink: shortLink
            }
            urlList.push(urlContent)
            res.redirect("/")
        })
        .catch(error => {
            console.error(error)
        })


})

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
})