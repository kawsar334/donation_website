

const domQuesn = [
    {
        id: 1,
        question: "How do you select an element from the DOM?",
        answer: "You can select an element using methods like document.getElementById(), document.querySelector(), document.querySelectorAll(), document.getElementsByClassName(), or document.getElementsByTagName()."
    },
    {
        id: 2,
        question: "What is event delegation in the context of the DOM?",
        answer: "Event delegation is a technique where a single event listener is added to a parent element to manage events triggered by its child elements. This works due to event bubbling, reducing the need to attach listeners to multiple child elements."
    },
    {
        id: 3,
        question: "How do you manipulate an element's attributes or styles using the DOM?",
        answer: "You can manipulate an element's attributes using setAttribute() or by modifying properties directly, and change styles using the element's style property or classList for class-based styling."
    },
    {
        id: 4,
        question: "What is the purpose of the DOMContentLoaded event?",
        answer: "The DOMContentLoaded event fires when the HTML document has been completely loaded and parsed, without waiting for external resources like images and stylesheets to load. It's useful for running JavaScript code as soon as the DOM is ready."
    }
];

const getBlogElementById = (id) => {
    return document.getElementById(id);
}

const accordian_container = getBlogElementById("accordian_container");
const handleAccordian = (e) => {
    if (e.children[0].children[1].classList.contains("hidden")) {
        e.children[0].children[1].classList.remove("hidden")
        e.children[0].children[1].classList.add("vissible")
        // toggle icon class 
        e.children[1].classList.remove("fa-chevron-down");
        e.children[1].classList.add("fa-chevron-up");
    } else {
        e.children[0].children[1].classList.remove("vissible")
        e.children[0].children[1].classList.add("hidden")
        // toggle icon class 
        e.children[1].classList.add("fa-chevron-down");
        e.children[1].classList.remove("fa-chevron-up");
    }
}

for (let i = 0; i < domQuesn.length; i++) {
    accordian_container.innerHTML += `
      <div class="flex  justify-between items-center  border p-5 rounded w-[100%] cursor-pointer" onclick="handleAccordian(this)">
                <div>
                    <h1 class="text-2xl font-semibold capitalize">${domQuesn[i].question}</h1>
                    <p class="text-[gray] capitalize hidden p-5" id="para">${domQuesn[i].answer}</p>
                </div>
                <i class="fa-solid fa-chevron-down text-4xl cursor-pointer"></i>
            </div>
    `
}

