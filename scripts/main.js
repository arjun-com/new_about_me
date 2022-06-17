function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
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

main()