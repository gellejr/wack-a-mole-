const square = document.querySelectorAll(".square")
const mole = document.querySelectorAll(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")



let result = 0
let curruntTime = timeLeft.textContent

function randomSquare() {
	square.forEach(className => {
		className.classList.remove('mole')
	})
	let randomPosition = square[Math.floor(Math.random() * 9)]
	randomPosition.classList.add('mole')

	//assign the id of the randomPosition to hitPosition for us to use later
	hitPosition = randomPosition.id
}

square.forEach(id => {
	id.addEventListener('mouseup', () => {
		if(id.id === hitPosition){
			result = result + 1
			score.textContent = result
		}
	})
})



function moveMole() {
	let timerId = null
	timerId = setInterval(randomSquare, 1000)
}

moveMole()



function countDown() {
   curruntTime--
   timeLeft.textContent =  curruntTime

   if(curruntTime ===0 ) {
   	clearInterval(timerId)
   	alert("GAME IS OVR! YOUR FINAL SCORE IS "  + result)
   }
} 	

let  timerId = setInterval(countDown, 1000)