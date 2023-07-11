fetch("https://tgibfnov2022.click")
.then(res => res.text())
.then(res => {
    console.log("res: ", res)
    // console.log(res.substr(res.indexOf("<head>"), res.indexOf("</hed>")))
})
.catch(err => {
    console.log("ERROR : ", err)
})