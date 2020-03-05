const getCookie = function(greeting) {
    return greeting;
}

function cookieClick() {

    console.log('Click the Cookie!');
}

    var count = 0;
const countButton = document.getElementById("countButton");
const displayCount = document.getElementById("displayCount");
countButton.onclick = function(){
  count++;
  displayCount.innerHTML = count;
}
resetButton.onclick = function(){
  count = 0;
  displayCount.innerHTML = count;
}

