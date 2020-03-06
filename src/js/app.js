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

const makeCookieClickerButton = (buttonClickElement, dashboardElement, cookieObject) => {
    buttonClickElement.addEventListener('click', ()=>{
        cookieObject.cookieCounter();
        updateClicker(dashboardElement, cookieObject);
    })
}

const buttonClickElement = document.querySelector('.cookie_clicker');
const dashboardElement = document.querySelector('.dashboard_cookieCounter');
const myCookie = new Cookie();
const buttonResetElement = document.querySelector('.cookie_reset');

const resetClicker = (buttonClickElement, dashboardElement, cookieObject) => {
    buttonClickElement.addEventListener('click', ()=>{
        cookieObject.cookieReset();
        updateClicker(dashboardElement, cookieObject);
    })
}
makeCookieClickerButton(buttonClickElement, dashboardElement, myCookie);
updateClicker(dashboardElement, myCookie);
resetClicker(buttonResetElement, dashboardElement, myCookie);