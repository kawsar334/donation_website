


const showblog = document.getElementById("showblog");
const showHistory = document.getElementById("showHistory");
const donat_container = document.getElementById("donat_container");
const history_container = document.getElementById("history_container");
const closeModel = getElementById("closeModel");
const modal = getElementById("modal");
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
    showblog.classList.remove("bg-btn_bg");
});

closeModel.addEventListener('click',(e)=>{
    modal.classList.add("hidden")
    modal.classList.remove("flex")
})






// Global variable
let sum = 5500;
const mainAmount = getElementById('mainAmount');



const handleDonation = (inputVal, val, title) => {
    let value= parseInt(val.innerHTML);
 
   
   
    let date = new Date();
    if (isNaN(inputVal) || inputVal <= 0 || sum <= 0 || inputVal === "") {
        alert("Invalid Donate ammount");
    } else {
        sum -= inputVal;
        val.innerHTML = value += inputVal ;
        mainAmount.innerText = sum;
        modal.classList.add("flex")
        modal.classList.remove("hidden");
        history_container.innerHTML +=`
        <div class="flex flex-col justify-start items-start gap-3 border p-5 rounded w-[100%]">
            <h1 class="text-2xl font-semibold capitalize">${inputVal} ${title.innerText}</h1>
            <p class="text-[gray] capitalize">${date}</p>
        </div>
        `;
    }
};

// Function for first donation click event
const handleClickOne = (e) => {
    let inputAmount1 = getElementById("input_ammount_1");
    let title1 = getElementById("title_1");
    const inputField1 = parseInt(getElementById("inputfiled_1").value);
    // let inputAmount1Value = parseInt(inputAmount1.innerHTML);
     
    handleDonation(inputField1, inputAmount1, title1);
};

// Function for second donation click event
const handleClickTwo = (e) => {
    let inputAmount2 = getElementById("input_ammount_2");
    let title2 = getElementById("title_2");
    const inputField2 = parseInt(getElementById("inputfiled_2").value);
    // const inputAmount1Value = parseInt(inputAmount2.innerText);
    // inputAmount2.innerText += inputField2;
    handleDonation(inputField2, inputAmount2, title2);
};

// Function for third donation click event
const handleClickThree = (e) => {
    let inputAmount3 = getElementById("input_ammount_3");
    let title3 = getElementById("title_3");
    const inputField3 = parseInt(getElementById("inputfiled_3").value);
    // let inputAmount1Value = parseInt(inputAmount3.innerText);

    // inputAmount1Value += inputField3;
    handleDonation(inputField3, inputAmount3, title3);
};


