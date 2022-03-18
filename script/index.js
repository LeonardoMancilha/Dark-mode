function darkmode() {

    let element = document.querySelector("body#fundo");
    element.classList.toggle("mystyle");
    
    let text_title = document.getElementsByClassName("subject")[0];
    if (text_title.innerHTML === "Light Mode On") {
        text_title.innerHTML = "Dark Mode On";
        
    } else {
        text_title.innerHTML = "Light Mode On";
   
    }
    
    let paragraph = document.getElementsByClassName("subject")[1];
    if (paragraph.innerHTML === "Dark Mode") {
        paragraph.innerHTML = "Light Mode";
        
        
    } else {
        paragraph.innerHTML = "Dark Mode";
        
    }
}
