const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>  
window.getComputedStyle(element).getPropertyValue(style)


const initialColors = {
    //pegar esse estilo do css
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
     
}

const darkMode ={
    //pegar esse estilo do css
    bg: "#333333",
    bgPanel:"#434343" ,
    colorHeadings:"#366dff" , 
    colorText: "#b5b5b5"
     
}

const tranformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()




const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(tranformKey(key) , colors[key])
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})