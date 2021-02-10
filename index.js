function getFirstSelector(selector) {
    return document.querySelector(selector) 
}

function nestedTarget() {
    return document.querySelector("#nested .target")
}

function deepestChild() {
    return document.querySelector("#grand-node div div div div")
}

function increaseRankBy(n) {
    var numbers = document.querySelectorAll(".ranked-list li")
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].innerHTML = parseInt(numbers[i].innerHTML) + 3 
    }
}