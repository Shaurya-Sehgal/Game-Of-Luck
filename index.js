let correctscore = 0
let incorrectscore = 0
function checkmark(image){
    let n = Math.floor(Math.random()*100)
    if(image.src == "https://freepngimg.com/thumb/mario_bros/92967-mario-square-super-angle-bros-download-hq-png-thumb.png"){
        if(n % 2 == 0){
            correctscore = correctscore + 1
            image.src = "checkmark.png"
            document.getElementById("correctScore").innerText = correctscore
            if(correctscore == 6){
                location.href = "win.html"
            }
        }
        else{
            incorrectscore = incorrectscore + 1
            image.src = "xmark.png"
            document.getElementById("incorrectScore").innerText = incorrectscore
            if(incorrectscore == 6){
                location.href = "lose.html"
            }
        }     
    }

}
