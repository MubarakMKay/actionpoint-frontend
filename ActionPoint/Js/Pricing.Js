const rowOf3 = document.querySelectorAll(".rowOf3")
const price = document.querySelectorAll(".price")
const getStarted = document.querySelectorAll(".getStarted")
const yearlyPrice = document.getElementById("yearly")
const monthlyPrice = document.getElementById("monthly")
const monthlyDiv = document.getElementById("monthlyDiv")
const fAQsLessInfo = document.querySelectorAll(".fAQsLessInfo")
const arrowDown = document.querySelectorAll(".fa-chevron-down")
const arrowUp = document.querySelectorAll(".fa-chevron-up")
const fAQsMoreInfo = document.querySelectorAll(".fAQsMoreInfo")

// arrayRowOf3 = Array.from(rowOf3)
// arrayFAQsLessInfo = Array.from(fAQsLessInfo)

// Code below for switching between yearly and monthly payment
yearlyPrice.onclick = () => {
    yearlyPrice.style = `background-color: #3A187B; color: #FFFFFF;`
    monthlyPrice.style = `background-color: #fff; color: #3A187B;`
    monthlyDiv.style = `display: none`
}
monthlyPrice.onclick = () => {
    monthlyPrice.style = `background-color: #3A187B; color: #FFFFFF;`
    yearlyPrice.style = `background-color: #fff; color: #3A187B;`
    monthlyDiv.style = `display: flex`
}

// Code below for distinguishing what payment method your hover over
// arrayRowOf3.forEach(standOut)
// function standOut(eachRow) {
//     eachRow.addEventListener("mouseover", () => {
//         eachRow.style = `border: 1px solid #3A187B; align-self: flex-end`
//         let eachPrice = eachRow.childNodes[1].children[2]
//         eachPrice.style = `background-color: #3A187B`
//         let eachButton = eachRow.childNodes[5].children[0]
//         eachButton.style = `background-color: #3A187B; color: #fff`
//     }) 
// }
// arrayRowOf3.forEach(standIn)
// function standIn(eachRow) {
//     eachRow.addEventListener("mouseleave", () => {
//         eachRow.style = `border: 0`
//         let eachPrice = eachRow.childNodes[1].children[2]
//         eachPrice.style = `background-color: #131313`
//         let eachButton = eachRow.childNodes[5].children[0]
//         eachButton.style = `background-color: #fff; color: #3A187B`
//     }) 
// }
// Better method
rowOf3.forEach((div, index) => {
    div.addEventListener("mouseover", () => {
        div.classList.add("hover")
        price[index].classList.add("hover")
        getStarted[index].classList.add("hover")
    })
});
rowOf3.forEach((div, index) => {
    div.addEventListener("mouseleave", () => {
        div.classList.remove("hover")
        price[index].classList.remove("hover")
        getStarted[index].classList.remove("hover")
    })
});


// Code below for expanding or reducing the FAQs
// arrayFAQsLessInfo.forEach(moreInfo)
// function moreInfo(eachFAQs) {
//     eachFAQs.addEventListener("click", () => {
//         let thisMoreInfo = eachFAQs.parentNode.childNodes[7]
//         thisMoreInfo.style = `display: block`
//         let thisArrowDown = eachFAQs.parentNode.childNodes[3]
//         thisArrowDown.style = `display: none`
//         let thisArrowUp = eachFAQs.parentNode.childNodes[5]
//         thisArrowUp.style = `display: inline-block`
//     })
// }
// Better method
arrowDown.forEach((p, index) => {
    p.addEventListener("click", () => {
        arrowDown[index].classList.add("hover")
        arrowUp[index].classList.add("hover")
        fAQsMoreInfo[index].classList.add("hover")
    })
});
arrowUp.forEach((p, index) => {
    p.addEventListener("click", () => {
        arrowDown[index].classList.remove("hover")
        arrowUp[index].classList.remove("hover")
        fAQsMoreInfo[index].classList.remove("hover")
    })
});
