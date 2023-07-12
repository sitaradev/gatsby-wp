const extractUrls = require("extract-urls");
const fs = require("fs")

const staticPages = ["https://tgibfnov2022.click/collaborate"]
const staticLinks = [
    "https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-38.css",
    "https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-17000.css?ver=1688729405",
    "https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-17263.css?ver=1688736520",
    "https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-20706.css?ver=1688736516",
    "https://tgibfnov2022.click/wp-content/uploads/elementor/css/post-17321.css?ver=1688736518"
]

console.log("loading links urls....")
fetch("https://tgibfnov2022.click/wp-json/wp/v2/pages?orderby=date&_embed")
.then(res => res.json())
.then(res => {
    const promises = [...staticPages]
    let links = [...staticLinks]
    res.forEach((page) => {
        promises.push(fetch(page.link).then(res => res.text()))
        Promise.all(promises).then(resp => {
            resp.forEach(r => {
                links = links.concat(extractUrls(r)).filter(url => url.split("?")[0]?.endsWith(".css"))

            })
            const data = [...new Set(links)].map(url => {
                let u = url.endsWith("'") ? url.substring(0, url.length - 1): url
                return `@import url("${u}");`
            }).join("\n")
            fs.writeFile("./src/styles/global.css", data, (err) => {
                if(!err){
                    console.log("following dynamic css written successfully...")
                    console.log(data)
                }
            })

        })
    })
    
})