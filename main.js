// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likerObject = document.getElementsByClassName('like-glyph')
for(let singleLike of likerObject) {
  singleLike.addEventListener('click', e=>{
if(e.target.innerHTML===EMPTY_HEART) {
  mimicServerCall()
  .then(res=>res)
  .catch((res) =>{
    document.getElementById('modal').className = ""
    document.getElementById('modal-message').innerHTML = res
    let timeOut = setTimeout(()=>{
      document.getElementById('modal').className = "hidden"
      singleLike.innerHTML = FULL_HEART
      singleLike.className = "activated-heart"
    }, 3000)
  })
  }
else if(e.target.innerHTML===FULL_HEART) {
      singleLike.innerHTML = EMPTY_HEART
      singleLike.className = ""
}
  })
}


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