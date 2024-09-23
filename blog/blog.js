const domQuesn = [
    {
        id: 1,
        question: "What is the DOM in JavaScript?",
        answer: "The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a webpage as a tree of objects, allowing JavaScript to access, modify, and interact with the content, structure, and style of the webpage."
    },
    {
        id: 2,
        question: "How can you select an HTML element by its ID in JavaScript?",
        answer: "You can select an HTML element by its ID using the `document.getElementById('elementID')` method, which returns the element object if it exists, or `null` if it doesn't."
    },
    {
        id: 3,
        question: "What is the difference between `innerHTML` and `textContent`?",
        answer: "`innerHTML` returns or sets the HTML content of an element, meaning it can contain HTML tags and elements. `textContent` returns or sets only the text content of an element, ignoring any HTML tags."
    },
    {
        id: 4,
        question: "How can you create a new HTML element using JavaScript?",
        answer: "To create a new HTML element, you can use the `document.createElement('tagName')` method. For example, `document.createElement('div')` creates a new `div` element."
    },
    {
        id: 5,
        question: "How can you append a child element to an existing element in the DOM?",
        answer: "You can append a child element to an existing element using the `appendChild()` method. For example, `parentElement.appendChild(childElement)` adds the `childElement` as the last child of `parentElement`."
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

