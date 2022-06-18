let busy = 0 // can click
const start = '115px'
const end = '50%'

const blinkMovement = (lids, endpoint) => {
	lids.forEach((lid, i) => {
		lid.classList.contains('top-lid')
			? lid.style.bottom = endpoint
			: lid.style.top = endpoint
	})
}

document.addEventListener('click', () => {
		// prevent clicking during the blink animation
	if (busy === 1) {
		console.log('clicked too fast')
		return
	}
	else {
		busy = 1 // can't click
			// get eye lid elements
		const topLids = document.getElementsByClassName('top-lid')
		const bottomLids = document.getElementsByClassName('bottom-lid')
			// put lids into an array
		const lids = [topLids[0],topLids[1],bottomLids[0],bottomLids[1]]
			// call blink movement function, then again with a delay
		blinkMovement(lids, end)
		setTimeout(() => {
			blinkMovement(lids, start)
			setTimeout(()=>{busy = 0},400) // can click again after reopening
		},500)
	}
})

var balls = document.getElementsByClassName("ball");
    document.onmousemove = () => {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";

      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
      }
    };