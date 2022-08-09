const registerButton = document.querySelector("#registerNow input")
let loginInfo = []
const detailsFromLocalStorage = JSON.parse(localStorage.getItem("loginInfo"))

registerButton.onclick = () => {
    let email = document.querySelector("#email input")
    let password = document.querySelector("#password input")
    loginInfoDetails = {
        "email": email.value,
        "password": password.value
    }
    loginInfo.push(loginInfoDetails)
    email.value = ""
    password.value = ""
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo))
    console.log(JSON.parse(localStorage.getItem("loginInfo")))
}