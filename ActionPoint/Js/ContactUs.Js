const nav = document.querySelectorAll("section li")
const colorUnderlineOn = `color: #3a187b; text-decoration: underline`
const colorUnderlineOff = `color: #131313; text-decoration: none`
const displayOn = `display: block`
const displayFlex = `display: flex`
const displayOff = `display: none`

const navMoreInfo = document.querySelectorAll("section > div:nth-of-type(2) > div")
// const form = document.querySelector("form")
const buttonSubmit = document.querySelector("form button")
let formDetails = []

arrayNav = Array.from(nav)
arrayNavMoreinfo = Array.from(navMoreInfo)

// Code below is to switch between the various segments in the contact page
arrayNav[0].onclick = () => {
    arrayNav[0].style = colorUnderlineOn
    arrayNav[1].style = colorUnderlineOff
    arrayNav[2].style = colorUnderlineOff
    arrayNav[3].style = colorUnderlineOff
    arrayNav[4].style = colorUnderlineOff
    arrayNavMoreinfo[0].style = displayOn
    arrayNavMoreinfo[1].style = displayOff
    arrayNavMoreinfo[2].style = displayOff
    arrayNavMoreinfo[3].style = displayOff
    arrayNavMoreinfo[4].style = displayOff
}
arrayNav[1].onclick = () => {
    arrayNav[0].style = colorUnderlineOff
    arrayNav[1].style = colorUnderlineOn
    arrayNav[2].style = colorUnderlineOff
    arrayNav[3].style = colorUnderlineOff
    arrayNav[4].style = colorUnderlineOff
    arrayNavMoreinfo[0].style = displayOff
    arrayNavMoreinfo[1].style = displayFlex
    arrayNavMoreinfo[2].style = displayOff
    arrayNavMoreinfo[3].style = displayOff
    arrayNavMoreinfo[4].style = displayOff
}
arrayNav[2].onclick = () => {
    arrayNav[0].style = colorUnderlineOff
    arrayNav[1].style = colorUnderlineOff
    arrayNav[2].style = colorUnderlineOn
    arrayNav[3].style = colorUnderlineOff
    arrayNav[4].style = colorUnderlineOff
    arrayNavMoreinfo[0].style = displayOff
    arrayNavMoreinfo[1].style = displayOff
    arrayNavMoreinfo[2].style = displayOn
    arrayNavMoreinfo[3].style = displayOff
    arrayNavMoreinfo[4].style = displayOff
}
arrayNav[3].onclick = () => {
    arrayNav[0].style = colorUnderlineOff
    arrayNav[1].style = colorUnderlineOff
    arrayNav[2].style = colorUnderlineOff
    arrayNav[3].style = colorUnderlineOn
    arrayNav[4].style = colorUnderlineOff
    arrayNavMoreinfo[0].style = displayOff
    arrayNavMoreinfo[1].style = displayOff
    arrayNavMoreinfo[2].style = displayOff
    arrayNavMoreinfo[3].style = displayOn
    arrayNavMoreinfo[4].style = displayOff
}
arrayNav[4].onclick = () => {
    arrayNav[0].style = colorUnderlineOff
    arrayNav[1].style = colorUnderlineOff
    arrayNav[2].style = colorUnderlineOff
    arrayNav[3].style = colorUnderlineOff
    arrayNav[4].style = colorUnderlineOn
    arrayNavMoreinfo[0].style = displayOff
    arrayNavMoreinfo[1].style = displayOff
    arrayNavMoreinfo[2].style = displayOff
    arrayNavMoreinfo[3].style = displayOff
    arrayNavMoreinfo[4].style = displayOn
}

// Code below saves the data one by one into the localdatabase
buttonSubmit.onclick = (e) => {
    e.preventDefault()
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let email = document.getElementById("email")
    let companyName = document.getElementById("companyName")
    let phoneNumber = document.getElementById("phoneNumber")
    let message = document.getElementById("message")
    localStorage.setItem("firstName", firstName.value)
    localStorage.setItem("lastName", lastName.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("companyName", companyName.value)
    localStorage.setItem("phoneNumber", phoneNumber.value)
    localStorage.setItem("message", message.value)
    firstName.value = ""
    lastName.value = ""
    email.value = ""
    companyName.value = ""
    phoneNumber.value = ""
    message.value = ""
}
// Code below saves the data as a whole/string into the local database
// buttonSubmit.onclick = (e) => {
//     e.preventDefault()
//     let firstName = document.getElementById("firstName")
//     let lastName = document.getElementById("lastName")
//     let email = document.getElementById("email")
//     let companyName = document.getElementById("companyName")
//     let phoneNumber = document.getElementById("phoneNumber")
//     let message = document.getElementById("message")
//     let formDetailsInfo = {
//         "firstName": firstName.value,
//         "lastName": lastName.value,
//         "email": email.value,
//         "companyName": companyName.value,
//         "phoneNumber": phoneNumber.value,
//         "message": message.value
//     }
//     formDetails.push(formDetailsInfo)
//     firstName.value = ""
//     lastName.value = ""
//     email.value = ""
//     companyName.value = ""
//     phoneNumber.value = ""
//     message.value = ""
//     localStorage.setItem("Info", JSON.stringify(formDetails))
// }
