async function makeAPICall(location){
    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=99e77aedd35265dd376a28d8055e5394`, {mode: 'cors'})
    const getWeather = await response.json();
    console.log(getWeather.main)
    } catch(error){
        console.log("fuck")
    }
}



//let x = document.getElementById("search-box").innerText
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    makeAPICall(document.getElementById("search-box").value)
})
//makeAPICall(x);