// import variables from '../sass/variables/_colors.scss';
// console.log(variables.changeableColor)

// Writing (Build your website ...) in the first navbar start ------------------------------------------------------------------------------------

let mainParagraph1 = document.querySelector(".test");
let mainParagraph = document.querySelector(".nav .main-paragraph h4");
console.log(mainParagraph1 = window.innerHeight);

let mainParagraphAudio = new Audio("../images/quick-mechanical-keyboard-14391.mp3");
let mainParagraphText = "Build Your Website & Mobile App With Us";
let mainParagraphCounter = 1;

setInterval(function() {
    mainParagraph.innerHTML = `${mainParagraphText.slice(0, mainParagraphCounter)}`;
    mainParagraphCounter++;
    if (mainParagraphCounter == 55) {
        mainParagraphCounter = 1;
    }
    mainParagraph.addEventListener("onmouseover", mainParagraphAudioOn);
}, 200);
function mainParagraphAudioOn() {
    mainParagraph.style.cssText = "cursor: pointer; "
    mainParagraphAudio.play();
}
// Writing (Build your website ...) in the first navbar end ------------------------------------------------------------------------------------

// setting the --changeable-color start -----------------------------------------------------------------------------------

let navMainLogoColors = document.querySelectorAll(".second-nav .box .dropdown-menu .colors li");

if (window.localStorage.getItem("mainLogoLightColor")) {
    document.documentElement.style.setProperty("--changeable-color", window.localStorage.getItem("mainLogoLightColor"));
    navMainLogoColors.forEach((e) => {
        e.classList.remove("active");
    });
    document.querySelector(`[data-color = "${window.localStorage.getItem("mainLogoLightColor")}"]`);
};

navMainLogoColors.forEach((li) => {
    li.addEventListener("click", (e) => {
        navMainLogoColors.forEach((li) => {
            li.classList.remove("active");
        });
        e.target.classList.add("active");
        window.localStorage.setItem("mainLogoLightColor", e.target.dataset.color);
        document.documentElement.style.setProperty("--changeable-color", `${e.target.dataset.color}`);
    });
});
// setting the --changeable-color end -----------------------------------------------------------------------------------

// The Keyboard start -------------------------------------------------------------------------------------------

let inputSearch = document.querySelector(".second-nav .box form input")
let keyboardBtn = document.querySelector(".keyboardBtn");
let theKeyboard = document.querySelector(".theKeyboard");
let languageBtn = document.querySelector(".languageBtn");
let keyboardCloseBtn = document.querySelector(".keyboardCloseBtn");
let spaceBtn = document.querySelector(".spaceBtn");
let tapBtn = document.querySelector(".tapBtn");
let accessoriesBtn = document.querySelector(".accessoriesBtn");
let upperBtn = document.querySelector(".upperBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let clearBtn = document.querySelector(".clearBtn");
let theLetterBtnExtend = document.querySelectorAll(".theLetterBtnExtend");
let theLetterBtn = document.querySelectorAll(".theLetterBtn");
let theLetterBtnSpans = document.querySelectorAll(".theLetterBtn span");
let theLetterBtnSpan = document.querySelector(".theLetterBtn .Active");

let btnsArray = [];
for(let i = 0; i < theLetterBtn.length; i++) {
    btnsArray.push(theLetterBtn[i]);
};
let extendBtnsArray = [];
for(let i = 0; i < theLetterBtnExtend.length; i++) {
    extendBtnsArray.push(theLetterBtnExtend[i]);
};

function inputFocus() {
    keyboardBtn.style.color = "#000";
}
function inputBlur() {
    keyboardBtn.style.color = "#fff";
}
keyboardCloseBtn.onclick  = function () {
    theKeyboard.classList.remove("Active");
    theKeyboard.classList.add("notActive");
    keyboardBtn.style.color = "#fff";
};
keyboardBtn.onclick = function () {
    theKeyboard.classList.toggle("Active");
    theKeyboard.classList.remove("notActive");
    inputSearch.focus();
    btnsArray.forEach(function (ele) {
        ele.classList.add("Active");
        ele.firstElementChild.classList.add("Active");
        ele.lastElementChild.classList.add("notActive");
    });
    extendBtnsArray.forEach(function (ele) {
        ele.classList.add("notActive");
    });
    if (window.getComputedStyle(theKeyboard, null).display === 'block') {
        keyboardBtn.style.color = "#000";
    } else {
        keyboardBtn.style.color = "#fff";
    }
};
accessoriesBtn.onclick = function () {
    inputSearch.focus();
    btnsArray.forEach(function (ele) {
        ele.classList.toggle("Active");
        ele.classList.toggle("notActive");
    });
    extendBtnsArray.forEach(function (ele) {
        ele.classList.toggle("Active");
        ele.classList.toggle("notActive");
    });
    if (theLetterBtnExtend[0].classList.contains("Active")) {
        accessoriesBtn.style.cssText = "background-color: lightgreen !important; transition: all 0.4s; color: #fff;";
    } else {
        accessoriesBtn.style.cssText = "background-color: #e3dfdf !important; transition: all 0.4s; color: green;";
    };
};
languageBtn.onclick = function () {
    inputSearch.focus();
    theLetterBtnSpans.forEach( function(e) {
        e.classList.toggle("Active");
        e.classList.toggle("notActive");
    });
};
theLetterBtn.forEach(function(e) {
    e.onclick = function () {
        inputSearch.focus();
        theLetterBtn.forEach(function(el) {
            el.classList.remove("clicked");
        })
        this.classList.add("clicked");
        document.querySelectorAll(".clicked span").forEach(function(e) {
        return e.className === "Active" ? inputSearch.value += e.innerHTML : "";
    });
};
});
theLetterBtnExtend.forEach(function(e) {
    e.onclick = function () {
        inputSearch.focus();
        theLetterBtnExtend.forEach(function(el) {
            el.classList.remove("clicked");
        });
        theLetterBtn.forEach(function(el) {
            el.classList.remove("clicked");
        });
        this.classList.add("clicked");
        document.querySelectorAll(".clicked span").forEach(function(e) {
        return inputSearch.value += e.innerText;
    });
};
});
spaceBtn.onclick = function () {
    inputSearch.focus();
    inputSearch.value += " ";
};
tapBtn.onclick = function () {
    inputSearch.focus();
    inputSearch.value += "    ";
};
deleteBtn.onclick = function () {
    inputSearch.focus();
    inputSearch.value = inputSearch.value.slice(0, inputSearch.value.length - 1);
};
clearBtn.onclick = function () {
    inputSearch.focus();
    inputSearch.value = inputSearch.value.slice(0, 0);
};
upperBtn.onclick = function () {
    inputSearch.focus();
    btnsArray.forEach(function (ele) {
        ele.firstElementChild.toggleAttribute("data-upperCase");
        if (ele.firstElementChild.hasAttribute("data-upperCase")) {
            ele.firstElementChild.innerHTML = ele.firstElementChild.innerHTML.toUpperCase();
        } else {
            ele.firstElementChild.innerHTML = ele.firstElementChild.innerHTML.toLowerCase();
        };
    });
    upperBtn.firstElementChild.classList.toggle("letterGreenLabel");
    upperBtn.lastElementChild.classList.toggle("letterGreenLabel");
}
// ----------------------------------------------------
const dragElement = (element, dragZone) => {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
//MouseUp occurs when the user releases the mouse button
    const dragMouseUp = () => {
        document.onmouseup = null;
//onmousemove attribute fires when the pointer is moving while it is over an element.
        document.onmousemove = null;
        element.classList.remove("drag");
    };
    const dragMouseMove = (event) => {
        event.preventDefault();
//clientX property returns the horizontal coordinate of the mouse pointer
        pos1 = pos3 - event.clientX;
//clientY property returns the vertical coordinate of the mouse pointer
        pos2 = pos4 - event.clientY;
        pos3 = event.clientX;
        pos4 = event.clientY;
//offsetTop property returns the top position relative to the parent
        element.style.top = `${element.offsetTop - pos2}px`;
        element.style.left = `${element.offsetLeft - pos1}px`;
    };
    const dragMouseDown = (event) => {
        event.preventDefault();
        pos3 = event.clientX;
        pos4 = event.clientY;
        element.classList.add("drag");
        document.onmouseup = dragMouseUp;
        document.onmousemove = dragMouseMove;
    };
    dragZone.onmousedown = dragMouseDown;
};

const dragAble = document.getElementById("dragAble");
const dragZone = document.getElementById("dragZone");

dragElement(dragAble, dragZone);
// The Keyboard end -------------------------------------------------------------------------------------------

// Line Under The Current Page start -------------------------------------------------------------------------------------------

let activeLink = document.querySelector(".second-nav .nav-item .active");
let activeLinkLine = document.createElement("span");
activeLinkLine.style.cssText = "width: 100px; height: 1px; position: absolute; left: 0; bottom: 0;";
activeLinkLine.style.width = getComputedStyle(activeLink).width;
activeLink.appendChild(activeLinkLine);
// Line Under The Current Page end -------------------------------------------------------------------------------------------

// h1's In The (.do-you-have-an-idea) section start -------------------------------------------------------------------------------------------

// window.onscroll = function () {
//     if (window.scrollY >= 600) {
//         // btn1.style.display = "block";
//     } else {
//         // btn1.style.display = "none";
//     }
// };
document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = window.scrollY;
});
let doYouHaveAnIdeaSectionTest = document.querySelector(".do-you-have-an-idea");
let doYouHaveAnIdeaSection = document.querySelector(".do-you-have-an-idea .container .box .h1-lines");
let FirstSentence = document.createElement("h1");
let FirstSentenceText = document.createTextNode("do you need a website for your idea??");
FirstSentence.style.cssText = "padding: 50px 0 0 0; text-transform: uppercase; letter-spacing: 5px;";
FirstSentence.appendChild(FirstSentenceText);
let secondSentence = document.createElement("h1");
let secondSentenceText = document.createTextNode("and a mobile application??");
secondSentence.style.cssText = "padding: 30px 0 0 0; text-transform: uppercase; letter-spacing: 5px;";
secondSentence.appendChild(secondSentenceText);
let thirdSentence = document.createElement("h1");
let thirdSentenceText = document.createTextNode("well...");
thirdSentence.style.cssText = "padding: 30px 0 0 0; text-transform: uppercase; letter-spacing: 5px;";
thirdSentence.appendChild(thirdSentenceText);
let fourthSentence = document.createElement("h1");
let fourthSentenceText = document.createTextNode("you came to the right place");
fourthSentence.style.cssText = "padding: 30px 0 0 0; text-transform: uppercase; letter-spacing: 5px;";
fourthSentence.appendChild(fourthSentenceText);
let fifthSentence = document.createElement("h1");
let fifthSentenceText = document.createTextNode("we would be happy to help you with that");
fifthSentence.style.cssText = "padding: 30px 0; text-transform: uppercase; letter-spacing: 5px;";
fifthSentence.appendChild(fifthSentenceText);
doYouHaveAnIdeaSection.appendChild(FirstSentence);
doYouHaveAnIdeaSection.appendChild(secondSentence);
doYouHaveAnIdeaSection.appendChild(thirdSentence);
doYouHaveAnIdeaSection.appendChild(fourthSentence);
doYouHaveAnIdeaSection.appendChild(fifthSentence);
// setTimeout(function() {
//     doYouHaveAnIdeaSection.appendChild(FirstSentence);
// }, 2000)
// setTimeout(function() {
//     doYouHaveAnIdeaSection.appendChild(secondSentence);
// }, 3000)
// setTimeout(function() {
//     doYouHaveAnIdeaSection.appendChild(thirdSentence);
// }, 4000)
// setTimeout(function() {
//     doYouHaveAnIdeaSection.appendChild(fourthSentence);
// }, 5000)
// setTimeout(function() {
//     doYouHaveAnIdeaSection.appendChild(fifthSentence);
// }, 6000)

// console.log(getComputedStyle(doYouHaveAnIdeaSection).margin-top)
// h1's In The (.do-you-have-an-idea) section end -------------------------------------------------------------------------------------------

// console.log(fun1());
// console.log(fun2());
// function fun1() {
//     console.log("function declaration");
// }
// let fun2 = function() {
//     console.log("function expression");
// }

// for(let i = 1; i <= 12; i++) {
//     console.log(`The ${i} Section`);
//     for(let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${j * i}`);
//     }
//     console.log("###########");
// }