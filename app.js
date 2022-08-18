// var data = fetch("https://api.adviceslip.com/advice")
//    .then(function(response) {
//       return response.json();
//       })
//       .then(function(response) {
//       console.log(response);
//  });

quote = document.getElementById("quote");
id = document.getElementById("advice-number")
function quoteGenerator(){
   const response = fetch('https://api.adviceslip.com/advice?t=' + Math.random())
   .then(data =>{
      return data.json();
   })
   .then(data => {
      quote.innerHTML = '"' +  data.slip.advice + '."';
      id.innerHTML = "#" + data.slip.id;
      
   })
};

quoteGenerator();

console.log("Challenge by https://www.frontendmentor.io?ref=challenge");
console.log("Made by cajereta");
