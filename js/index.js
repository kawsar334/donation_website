


const showblog = document.getElementById("showblog");
const showHistory = document.getElementById("showHistory");
const donat_container = document.getElementById("donat_container");
const history_container = document.getElementById("history_container");

showblog.addEventListener('click', (e) => {
    e.preventDefault();
    history_container.classList.add("hidden");       
    donat_container.classList.remove("hidden");      
    donat_container.classList.add("visible");        
    showHistory.classList.remove("bg-btn_bg");       
    showblog.classList.add("bg-btn_bg")
});

showHistory.addEventListener("click", (e) => {
    e.preventDefault();
    history_container.classList.add("flex");         
    history_container.classList.remove("hidden");    
    donat_container.classList.add("hidden");         
    showHistory.classList.add("bg-btn_bg");          
    showblog.classList.remove("bg-btn_bg")

});


