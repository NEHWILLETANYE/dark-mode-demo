//1. select the elements
const body = document.body;
const darkBtn =document.getElementById('darkBtn');
const textBtn =document.getElementById('textBtn');
const message = document.getElementById('message');
const smallBtn = document.getElementById('smallBtn');
const mediumBtn = document.getElementById('mediumBtn');
const largeBtn = document.getElementById('largeBtn');
const boldBtn = document.getElementById('boldBtn');
const italicBtn = document.getElementById('italicBtn');
//1. Dark mode toggle using classList
darkBtn.addEventListener('click' , () => {
    body.classList.toggle('dark-mode');
});

// 2. cycle through different messages
const messagelist = [
   "Hello click the buttons to change me.",
   "Javascript makes pages interactive",
   "You can change text, size, and style",
   "keep clicking to see more messages."
];
let messageIndex = 0;

textBtn.addEventListener('click', () => {
   messageIndex =(messageIndex + 1) %
    messagelist.length;// loops back to 0
   message.textContent = messagelist[messageIndex];
});
      // 3. Text size buttons
  smallBtn.addEventListener('click' , () => {
         message.style.fontSize = "12px";
});
mediumBtn.addEventListener('click', () => {
   message.style.fontSize = "16px";
});
largeBtn.addEventListener('click' , () => {
         message.style.fontSize = "24px";
});
// 4. Bold and italic toggle
boldBtn.addEventListener('click', () => {
   message.style.fontWeight = message.style.fontWeight === "bold"? "normal" : "bold";
});
italicBtn.addEventListener('click', () => {
   message.style.fontStyle =
   message.style.fontStyle === "italic"? "normal" : "italic";
});