

// common function 
const getElementUsingId = (id) => {
    return document.getElementById(id);
}

const showblog = getElementUsingId("showblog");
const showHistory = getElementUsingId("showHistory");
const donat_container = getElementUsingId("donat_container");
const history_container = getElementUsingId("history_container");
const closeModel = getElementUsingId("closeModel");
const modal = getElementUsingId("modal");

// show blog functinality 
showblog.addEventListener('click', (e) => {
    e.preventDefault();
    history_container.classList.add("hidden");
    donat_container.classList.remove("hidden");
    donat_container.classList.add("visible");
    showHistory.classList.remove("bg-btn_bg");
    showblog.classList.add("bg-btn_bg")
});

// show history functinality
showHistory.addEventListener("click", (e) => {
    e.preventDefault();
    history_container.classList.add("flex");
    history_container.classList.remove("hidden");
    donat_container.classList.add("hidden");
    showHistory.classList.add("bg-btn_bg");
    showblog.classList.remove("bg-btn_bg");
});

// toggle  popup message 
closeModel.addEventListener('click', (e) => {
    modal.classList.add("hidden")
    modal.classList.remove("flex")
});

let sum = 5500;
const mainAmount = getElementUsingId('mainAmount');
// common function 
const handleDonation = (inputVal, val, title) => {
    let value = Number(val.innerHTML);
    let date = new Date();
    
    if (isNaN(inputVal) || Number(inputVal) <= 0 || sum <= 0 || inputVal === "" || Number(inputVal) > sum) {
        alert("Invalid Donate Ammount");
    } else {
        sum -= inputVal;
        val.innerHTML = value += inputVal;
        mainAmount.innerText = sum;
        modal.classList.add("flex")
        modal.classList.remove("hidden");
        history_container.innerHTML += `
        <div class="flex flex-col justify-start items-start gap-3 border p-5 rounded w-[100%]">
            <h1 class="text-2xl font-semibold capitalize">${inputVal} Taka is  ${title.innerText}</h1>
            <p class="text-[gray] capitalize">${date}</p>
        </div>
        `;
    }
};
//  first 
const handleClickOne = (e) => {
    let inputAmount1 = getElementUsingId("input_ammount_1");
    let title1 = getElementUsingId("title_1");
    const inputField1 = Number(getElementUsingId("inputfiled_1").value);
    handleDonation(inputField1, inputAmount1, title1);
};
//  second 
const handleClickTwo = (e) => {
    let inputAmount2 = getElementUsingId("input_ammount_2");
    let title2 = getElementUsingId("title_2");
    const inputField2 = Number(getElementUsingId("inputfiled_2").value);
    handleDonation(inputField2, inputAmount2, title2);
};
//  third 
const handleClickThree = (e) => {
    let inputAmount3 = getElementUsingId("input_ammount_3");
    let title3 = getElementUsingId("title_3");
    const inputField3 = Number(getElementUsingId("inputfiled_3").value);
    handleDonation(inputField3, inputAmount3, title3);
};

// four
const handleClickFour = () => {
    let inputAmount4 = getElementUsingId("input_ammount_4");
    let title4 = getElementUsingId("title_4");
    const inputField4 = Number(getElementUsingId("inputfiled_4").value);
    handleDonation(inputField4, inputAmount4, title4);
}

