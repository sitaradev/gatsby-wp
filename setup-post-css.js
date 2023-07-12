const extractUrls = require("extract-urls");
const fs = require("fs")

var moreCss = []
console.log("loading links urls....")
fetch("https://tgibfnov2022.click/wp-json/wp/v2/pages?orderby=date&_embed")
.then(res => res.json())
.then(res => {
    const promises = []
    let links = []
    res.forEach((page) => {
        promises.push(fetch(page.link).then(res => res.text()))
        Promise.all(promises).then(resp => {
            resp.forEach(r => {
                links = links.concat(extractUrls(r)).filter(url => url.split("?")[0]?.endsWith(".css"))

            })
            const data = [...new Set(links)].map(url => `@import url("${url}");`).join("\n")
            fs.writeFile("./src/styles/global.css", data, (err) => {
                if(!err){
                    console.log("following dynamic css written successfully...")
                    console.log(data)
                }
            })

        })
    })
    
})