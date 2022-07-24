function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function char_loadin() {
    await sleep(700)
    const elements = document.getElementsByClassName("welc_letter")
    for(var x = 0; x < elements.length; x++) {
        elements[x].style.borderLeft = "2px solid pink"
        await sleep(120)
        elements[x].style.color = "blueviolet"
        elements[x].style.borderLeft = "0px solid red"
    }
    await sleep(750)
    document.getElementById("welc_desc").style.opacity = 100
}

async function loadin() {
    await sleep (4000)
    document.getElementById("devices").style.opacity = 100
    for(var i = 0; i < (document.getElementsByClassName("about-div")).length; i++) {
        document.getElementsByClassName("about-div")[i].style.opacity = 100
    }
    document.getElementById("msg").style.opacity = 100
}

async function mouse_trail() {
    const trail = document.createElement("p")
    trail.setAttribute("id", "trail")
    document.body.appendChild(trail)
    document.addEventListener("mousemove", (details) => {
        trail.style.top = ( details.clientY - 5) + "px"
        trail.style.left = ( details.clientX + 10 )+ "px"
    })
}

async function underline_wobbly() {
    await sleep(2000)
    document.getElementById("underline").style.transition = "3s"
    document.getElementById("underline").style.marginLeft = "0"
    document.getElementById("underline").style.marginRight = "0"
    await sleep(3000)
    for(var i = 0; i < 100000; i++) {
        if(i % 2) document.getElementById("underline").style.transform = "rotate(4deg)"
        else {
            document.getElementById("underline").style.transform = "rotate(-4deg)"
        }
        await sleep(2000)
    }
    document.getElementById("underline").style.transform = "rotate(0deg)"
}

char_loadin()

mouse_trail()

loadin()

document.getElementById("discord").onclick = () => { alert("arjun_#9968") }

document.getElementById("email").onclick = () => { 
    alert("arjun.main@proton.me")
    parent.location="mailto:arjun.main@protonmail.com" 
}

underline_wobbly()