function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function char_loadin() {
    const elements = document.getElementsByClassName("welc_letter")
    for(var x = 0; x < elements.length; x++) {
        elements[x].style.borderLeft = "2px solid pink"
        await sleep(70)
        elements[x].style.color = "blueviolet"
        elements[x].style.borderLeft = "0px solid red"
    }
    await sleep(750)
    document.getElementById("welc_desc").style.opacity = 100
}

async function loadin() {
    await sleep (5500)
    document.getElementById("devices").style.opacity = 100
    for(var i = 0; i < (document.getElementsByClassName("about-div")).length; i++) {
        document.getElementsByClassName("about-div")[i].style.opacity = 100
    }
    document.getElementById("msg").style.opacity = 100
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

async function mouse_trail() {
    const trail = document.createElement("p")
    trail.setAttribute("id", "trail")
    document.body.appendChild(trail)
    document.addEventListener("mousemove", (details) => {
        trail.style.top = ( details.clientY - 30 ) + "px"
        trail.style.left = ( details.clientX - 15 )+ "px"
    })
}

char_loadin()

mouse_trail()

loadin()

tmp_underline()

console.info("All setup.")