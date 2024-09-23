


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




// global variable
let sum = 5500;
const mainAmount = getElementById('mainAmount');


const handleDonation =(inputVal,val,tittle)=>{    
    let date = new Date();
    if (isNaN(inputVal) || inputVal <= 0  || sum <=0) {
        alert("invalid input ");
    } else {
        sum -=inputVal;
        mainAmount.innerText =  sum;
        history_container.innerHTML+=`
        <div class="flex  flex-col justify-start items-start gap-3 border p-5 rounded w-[100%]">
                <h1 class="text-2xl font-semibold capitalize"> ${inputVal} ${tittle.innerText}</h1>
                <p class="text-[gray] capitalize">${date}</p>
            </div>
        
        `
       
    }
}

const handleClickOne = (e)=>{
    let input_ammount_1 = getElementById("input_ammount_1");
    console.log(input_ammount_1.innerHTML)
    let title_1 = getElementById("title_1");
    const inputfiled_1 = parseInt(getElementById("inputfiled_1").value);
    let input_ammount_1a_= parseInt(input_ammount_1.innerText)
    input_ammount_1a_ += inputfiled_1;    
    handleDonation(inputfiled_1, input_ammount_1, title_1)
}
// 
const handleClickTwo = (e)=>{
    let input_ammount_2 = getElementById("input_ammount_2");
    let title_2 = getElementById("title_2");
    const inputfiled_2 = parseInt(getElementById("inputfiled_2").value);
    input_ammount_2.innerText += inputfiled_2
    handleDonation(inputfiled_2, input_ammount_2, title_2)
}

// 
const handleClickthree = (e)=>{
    let input_ammount_3 = getElementById("input_ammount_3");
    let title_3 = getElementById("title_3");
    const inputfiled_3 = parseInt(getElementById("inputfiled_3").value);
    input_ammount_3.innerText += inputfiled_3
    handleDonation(inputfiled_3, input_ammount_3, title_3)

}


