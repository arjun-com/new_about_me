function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function char_loadin() {
    document.getElementById("devices").style.opacity = 100
    const elements = document.getElementsByClassName("welc_letter")
    for(var x = 0; x < elements.length; x++) {
        elements[x].style.borderLeft = "2px solid pink"
        await sleep(500)
        elements[x].style.color = "blueviolet"
        elements[x].style.borderLeft = "0px solid red"
        console.log("done")
    }
    await sleep(750)
    document.getElementById("welc_desc").style.opacity = 100
}

async function tmp_underline() {
    await sleep(10000)
    var i = 0;
    const elements = document.getElementsByClassName("welc_word")
    while(true) {
        for(var x = 0; x < elements.length; x++) {
            if(x != i) {
                elements[x].style.letterSpacing = "1px"
                elements[x].style.color = "blueviolet"
                elements[x].style.borderBottom = "black"
            }
        }
        elements[i].style.letterSpacing = "1px"
        elements[i].style.color = "darkslateblue"
        elements[i].style.borderBottom = "1px solid darkslateblue"
        await sleep(800)
        i++
        if(i == elements.length) i = 0
    }
}

char_loadin()

tmp_underline()

