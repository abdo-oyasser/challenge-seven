let advice = document.querySelector(".advice")
let advId = document.querySelector(".adv-id span")
let dice = document.querySelector(".dice")
dice.onclick = () => {
    let randomOne = Math.floor(Math.random() * 100)
    let randomTwo = Math.floor(Math.random() * 100)
    let randomNum = randomOne + randomTwo
    if (randomNum > 180) {
        randomNum = randomOne
    }
    let adv = new XMLHttpRequest()
    adv.open("GET", `https://api.adviceslip.com/advice/${randomNum}`)
    adv.send()
    adv.onreadystatechange = () => {
        if (adv.readyState == 4 && adv.status == 200) {
            advId.innerHTML = `#${randomNum}`
            advice.innerHTML = JSON.parse(adv.response).slip.advice;
        }
    }
}

