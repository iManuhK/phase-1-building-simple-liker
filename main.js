// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likerObject = document.getElementsByClassName('like-glyph')
for( let liker of likerObject) {
  liker.addEventListener('click', mimicServerCall)
}
if(mimicServerCall.target%2===0){
  console.log (EMPTY_HEART)
}
else {
  console.log(FULL_HEART)
}
//  // fetch('http://mimicServer.example.com')
//   .then (response=>response)
//   .catch ()
// }




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
//mimicServerCall('http://mimicServer.example.com')