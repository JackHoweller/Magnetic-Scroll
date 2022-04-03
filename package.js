//Default scroll container is body
let container = document.body.style
//Apply key container styles
function magnetContainer(){
    container.width = "100vw";
    container.height = "100vh";
    container.overflowX = "scroll";
    container.scrollSnapType = "y mandatory";
    container.display = "block";
}
//Apply container children styles
function magnetChild(child){
    child.style.scrollSnapAlign = "start";
}
//Check for single-section or no-section setups. Modify scroll container target and children if true
function checkStructure (){
    const sections = [...document.getElementsByTagName('section')]
    let children
    switch(sections.length) {
        case 0:
            children = document.body.childNodes
            break;
        case 1:
            container = sections[0]
            children = sections[0].childNodes
            break;
        default:
            children = sections
    }
    return children
}
//Execute based on screen width
function magneticScroll(preference = "all"){
    let widthMinMax;
    switch(preference) {
        case "mobile":
            widthMinMax = [0,1000]
            break;
        case "desktop":
            widthMinMax = [768,9999]
            break;
        default:
            widthMinMax = [0,9999]
    }
    const screenWidth = screen.width;
    if (screenWidth > widthMinMax[0] && screenWidth < widthMinMax[1]) {
        checkStructure().forEach(function(section){
            magnetChild(section)
        });
        magnetContainer();
    }
}
