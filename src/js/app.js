// const getCookie = function(greeting) {
//     return greeting;
// }

// var count = 0;
// const countButton = document.getElementById("countButton");
// const displayCount = document.getElementById("displayCount");
// countButton.onclick = function(){
//   count++;
//   displayCount.innerHTML = count;
// }
// resetButton.onclick = function(){
//   count = 0;
//   displayCount.innerHTML = count;
// }

// if (displayCount === 10) {
//     alert("You have earned a Clicking Companion!");
// }

const updateClicker = (dashboardElement, cookieObject) => {
    dashboardElement.innerText = cookieObject.getCookieCount();
}

const makeAcceleratorButton = (buttonClickElement, dashboardElement, cookieObject) => {
    buttonClickElement.addEventListener('click', ()=>{
        cookieObject.cookieCounter();
        updateClicker(dashboardElement, cookieObject);
    })
}

const buttonClickElement = document.querySelector('.floorboard__accelerator');
const dashboardElement = document.querySelector('.dashboard__cookieCounter');
const myCookie = new Cookie();

makeAcceleratorButton(buttonClickElement, dashboardElement, myCookie);
updateClicker(dashboardElement, myCookie);