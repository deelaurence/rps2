 let nameEl= document.getElementById("name-el")
 let greetEl=document.getElementById("greet-el")

 function themeMusic(){
  let audio = document.getElementById("theme-music")
  audio.play()
}     
function themeMusicOff(){
  let audio = document.getElementById("theme-music")
  audio.pause()
}     


function closeSound(){
  let audio = document.getElementById("close-sound")
  audio.play()
}     
function openSound(){
  let audio = document.getElementById("open-sound")
  audio.play()
}
     function mockSound(){
  let audio = document.getElementById("mock-sound")
  audio.play()
} 
    function whooshSound(){
  let audio = document.getElementById("whoosh-sound")
  audio.play()
}  

 

function angrySound(){
  let audio = document.getElementById("angry-sound")
  audio.play()
}     
function booSound(){
  let audio = document.getElementById("boo-sound")
  audio.play()
}     
function oceanSound(){
  let audio = document.getElementById("ocean-sound")
  audio.play()
}     
//This function creates a slide in effect to the game div 
 function openGame() {
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("mySidebar").style.display = "block";
        
        
           themeMusic()   
      }


 
//declaring a variable and setting it's value
//to a string that greets player according 
//to time 
let time= new Date().getHours();
let greetByTime;
if(time<12){
  greetByTime="how is your morning going so far?"
  
}
else if(time<16){
  greetByTime="Hope it's not too hot this afternoon?"
  
}
else{greetByTime="Good Evening, how was your day?"}

let karenCustom=document.getElementById("karen-custom")
//this function extracts the player name from the input and prints to DOM       

let greetStrong = document.getElementById("greet-strong")
 greetStrong.style.textTransform="uppercase"
function greet(){

     greetStrong.innerHTML=nameEl.value
     greetEl.innerHTML="Hi"+" "+greetStrong.innerText+", "+greetByTime
    }

//calling this function takes the game back to welcome/reward page
      function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
        themeMusicOff()
      }
//These variables prints player, bot and ref inputs to DOM      
let displayEl =  document.getElementById("display-el")
let botEl = document.getElementById("bot-el")
let refEl = document.getElementById("ref-el")
let gameEnd = document.getElementById("game-end")

//this function generates random numbers and if statements are used to 
//assign bot's inputs either rock, paper or scissors depending on the number
//generated
function randomNum(){
    let ranNum=Math.floor(Math.random()*3+1)
if(ranNum===1){
    botEl.innerText="rock"
    babaraMove()
    document.getElementById("babara-hand").src="images/Babararock.png"
    }
else if(ranNum===2){
    botEl.innerText="paper"
    babaraMove()
    document.getElementById("babara-hand").src="images/babara paper.png"
    }
else {
    botEl.innerText="scissors"
    babaraMove()
    document.getElementById("babara-hand").src="images/babara scissors.png"
    }
  } 
//two arrays that gets new items pushed in when there is a loss or win
let winArray =[]
let loseArray=[]

//this function determines the ref input based on the player input compared
//to the bot input at the end of each round, an item is pushed
//into the arrays above 
let scoreEl = document.getElementById("score-el")
let count=5


let analysisEl=document.getElementById("analysis-el")
function ref(){
 
  if(botEl.innerText==displayEl.innerText){
    refEl.innerText="Play again"
    analysisEl.innerText=""
    
    let commentaryIndex= Math.floor(Math.random()*25)
console.log(commentaryArr[commentaryIndex])
commentaryEl.innerText=commentaryArr[commentaryIndex]
    
  }
  else if(botEl.innerText=="rock" && displayEl.innerText=="paper"){
       refEl.innerText="you win"
      increment() 
       
       analysisEl.innerText="paper covers rock"
       winArray.push("win")
   }
  else if(botEl.innerText=="rock" && displayEl.innerText=="scissors"){
      refEl.innerText="you lose"
      decrement()
      analysisEl.innerText="rock smashes scissors"
      loseArray.push("lose")
  }
    else if(botEl.innerText=="paper" && displayEl.innerText=="rock"){
      refEl.innerText="you lose"
      decrement()
      analysisEl.innerText="paper covers rock"
      loseArray.push("lose")
  }
   else if(botEl.innerText=="paper" && displayEl.innerText=="scissors"){
      refEl.innerText="you win"
      increment()
      analysisEl.innerText="scissors cuts paper"
      winArray.push("win")
  }

   else if(botEl.innerText=="scissors" && displayEl.innerText=="rock"){
      refEl.innerText="you win"
      increment()
      analysisEl.innerText="rock smashes scissors"
      winArray.push("win")

  }
 else if(botEl.innerText=="scissors" && displayEl.innerText=="paper"){
      refEl.innerText="you lose"
      decrement()
      analysisEl.innerText="scissors cuts paper"
      loseArray.push("lose")
  }
  }
if(displayEl.innerText=="rock"){
  document.getElementById("player-hand").src="images/rock.png"
}
else if(displayEl.innerText=="paper"){
  console.log("image")
  document.getElementById("player-hand").src="images/paper.png"
}

function increment(){
  if(refEl.innerText=="you win"){
  count++
  console.log(count)
  scoreEl.innerText="0"+count
  if(count==10){
    scoreEl.innerText="yh!"
    commentaryEl.style.left="30%"  
   commentaryEl.style.top="40%"  
   document.getElementById("screen2").style.filter="blur(3px)"
   document.getElementById("babara-text").style.filter="blur(3px)"
   document.getElementById("screenText").style.filter="blur(3px)"
   document.getElementById("bot-dash").style.filter="blur(3px)"
   botEl.style.filter=("blur(3px)")
    
    commentaryEl.innerText="Arrrgh!!!!!!😡😡😡"
    angrySound()
    document.getElementById("game-screen-cont").style.display="none"
  }
}
}

function decrement(){
if(refEl.innerText=="you lose")
count--
scoreEl.innerText="0"+count
console.log(count)
if(count==0){
    scoreEl.innerText="no!"
   commentaryEl.style.left="30%"  
   commentaryEl.style.top="40%"  
   
   document.getElementById("screenText").style.filter="blur(3px)"
   document.getElementById("bot-dash").style.filter="blur(3px)"
   document.getElementById("screen2").style.filter="blur(3px)"
   document.getElementById("babara-text").style.filter="blur(3px)"
   botEl.style.filter="blur(3px)"

  mockSound()
    commentaryEl.innerText="I told you you're gonna lose😂😂"
    
  document.getElementById("game-screen-cont").style.display="none"
  }
}

let commentaryArr=["😀come'on baldhead","choose scissors next","choose scissors next","choose rock next","you are just too slow😫","booring😴","owww😖","tell me a joke😒","🥴","choose scissors next","hey! cheap clown🤡","show me your hand😠","aaaaargh!😠","😠","choose scissors next","hi loser🙂","I feel like punching you but, that'd be animal abuse😶","I was gonna give you a nasty look, but I see you already have one😂","you're gonna lose😁","you are not winning this","I'm typing this with my middle finger!😠", "get lost🤔","noob😏","you twat!","gonna roast you!🤨", "are you trying to beat me?"]





let commentaryEl = document.getElementById("commentary-el") 

//these functions perform several roles like 
//announcing what player, bot and ref inputs each round,
//calling the function that moves the player's hand into game center 
//when the game reaches the 5th round the program knows when the 
//the length of the arrays above reaches 5 
//so as to display text in the reward button
let rewardBtn=document.getElementById("reward-btn")     
function rock(){
 displayEl.innerText="rock"
 randomNum()
 ref()
 myMove()
 whooshSound()
 
 
document.getElementById("player-hand").src="images/rock.png"
 if(count==10||count==0){
      rewardBtn.style.display="block"
  
 }
}

function paper(){
 displayEl.innerText="paper"
 randomNum()
 ref()
 myMove()
 whooshSound()
  document.getElementById("player-hand").src="images/paper.png"
 if(count==10||count==0){
      rewardBtn.style.display="block"
  
 }
}
function sci(){
 displayEl.innerText="scissors"
 randomNum()
 ref()
 myMove()
 whooshSound()
 
 document.getElementById("player-hand").src="images/scissors.png"
 if(count==10||count==0){
      rewardBtn.style.display="block"
  
 }
 
}



//the ending part of the game is when the game reaches the 5th round
//the w3close funcion is triggered that closes the game page to the welcome/reward page
//this funcion also manipulates the items on the welcome page to 
//become the reward page
//it prints different rewards based on whether the player win or loses 
function reward(){
w3_close()
document.getElementById("hero-img").style.display="block"
if(count==10){
  
  oceanSound()
}
else{
booSound()
}
document.getElementById("bottom-design").style.display="none"
document.getElementById("hero-img").style.width="300px"
nameEl.style.display="none"
document.getElementById("start-btn").style.display="none"
document.getElementById("footer").style.display="flex"
if(count==0){
  
   document.getElementById("header-el").innerText="The losers corner"
  
  
document.getElementById("hero-img").src="images/chandler.gif"

}
else if(count==10){
  
  
  document.getElementById("header-el").style.letterSpacing="-2px"
  document.getElementById("sub-el").style.display="block"
  document.getElementById("header-el").innerText=""
  document.getElementById("header-el").style.fontSize="25px"
  document.getElementById("header-el").style.lineHeight="20px"
  document.getElementById("header-el").style.textAlign="center"
  document.getElementById("header-el").style.marginLeft="10vw"
  document.getElementById("header-el").style.marginRight="10vw"
  document.getElementById("header-el").style.marginTop="10px"
  document.getElementById("header-el").style.padding="5px"
  document.getElementById("header-el").style.marginBottom="0"
  document.getElementById("header-el").style.fontWeight="700"
  document.getElementById("header-el").style.color="grey"
  document.getElementById("header-el").style.backgroundColor="white"
  document.getElementById("header-el").style.borderRadius="0px 50px 50px 50px"
  document.getElementById("hero-img").src="images/barbara4.gif"
  document.getElementById("sub-el").innerText="You Idiot,I told you I don't lose"
}
}


  
var id = null;
          function myMove() {
            var elem = document.getElementById("player-hand");
            var pos = -20;
            clearInterval(id);
            id = setInterval(frame, 0);
            function frame() {
              if (pos == 0) {
                clearInterval(id);
              } else {
                pos++;
                // elem.style.top = pos + "px";
                elem.style.right = pos + "px";
              }
            }
          }
  
var idb = null;
          function babaraMove() {
            var elemb = document.getElementById("babara-hand");
            var posb = -20;
            clearInterval(idb);
            idb = setInterval(frameb, 0);
            function frameb() {
              if (posb == 0) {
                clearInterval(idb);
              } else {
                posb++;
                // elemb.style.top = posb + "px";
                elemb.style.left = posb + "px";
              }
            }
          }

function instruction(){
  document.getElementById("hero-img").style.display="none"
  openSound()
  console.log("happpppy")
  document.getElementById("instruct").style.display="block"
  document.getElementById("closeInfo").style.opacity="1"
}


function closeInstruction(){
  closeSound()
  document.getElementById("commentary-el").style.display="block"
  document.getElementById("game-screen-contain").style.display="flex"
  document.getElementById("instruct").style.display="none"
  document.getElementById("gameStart").style.display="block"
  greetEl.innerText="Choose Rock, Paper or Scissors"
}

function reload(){
  window.location.reload()
  return false
  
}

