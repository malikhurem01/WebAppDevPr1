const introMessages = [
  "Upoznajte nas...",
  "Vaše povjerenje je naša obaveza...",
  "Tradicija poslovanja...",
  "Zadovoljstvo mušterija na prvom mjestu..."
]

const statisticNumbers = [17, 5, 30];

let loadedEmployees = false;
let loadedStores = false;
let loadedYears = false;

const arrowDown = document.getElementById("arrowDown");

arrowDown.onclick = () => {
    window.scroll({
      top: 850
    });
}

window.onscroll = () => {
  if (window.pageYOffset > 100) {
    document.getElementById("header").classList.add("fixed");
    document.getElementById("header").classList.remove("reverseFixed");
  } else {
    document.getElementById("header").classList.add("reverseFixed");
    document.getElementById("header").classList.remove("fixed");
  }
  if(!loadedEmployees && !loadedStores && !loadedYears){
    if(window.pageYOffset > 150 && window.pageYOffset < 900) {
      loadStatistics();
    }
  }
};

const loadStatistics = () => {
  let numberElements = document.getElementsByClassName("numberOf");
      if(!loadedEmployees){
        loadedEmployees = true;
        let employeeCounter = 1;
        const employeeInterval = setInterval(() => {
          numberElements[0].textContent = employeeCounter++;
          if(employeeCounter > statisticNumbers[0]){
            numberElements[0].textContent += "+";
            clearInterval(employeeInterval);
          }
        }, 210);
      }
      if(!loadedStores){
        loadedStores = true;
        let storeCounter = 1;
        const storeInterval = setInterval(() => {
          numberElements[1].textContent = storeCounter++;
          if(storeCounter > statisticNumbers[1]){
            numberElements[1].textContent += "+";
            clearInterval(storeInterval);
          }
        }, 650);
      }
      if(!loadedYears){
        loadedYears = true;
        let yearCounter = 1;
        const yearInterval = setInterval(() => {
          numberElements[2].textContent = yearCounter++;
          if(yearCounter > statisticNumbers[2]){
            numberElements[2].textContent += "+";
            clearInterval(yearInterval);
          }
        }, 120);
      }
}

const callInterval = (element, introMessageIndex) => {
  let counter = 0;
  if(introMessageIndex == introMessages.length){
    callInterval(element, 0);
  }
  const message = introMessages[introMessageIndex];
  const messageInteval = setInterval(() => {
    element.textContent += message[counter++];
    if(counter === message.length+1){
      element.innerHTML = "<br />";
      clearInterval(messageInteval);
      callInterval(element, introMessageIndex+1);      
    }
  }, 150)
}

window.onload = () => {
  let introElement = document.querySelector("#aboutUsIntro");
  console.log(window.pageYOffset);
  if(window.pageYOffset > 120 && window.pageYOffset < 1200) {
    loadStatistics();
  }
  callInterval(introElement, 0);
}
