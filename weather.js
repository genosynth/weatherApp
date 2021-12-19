async function makeAPICall(location){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=99e77aedd35265dd376a28d8055e5394`, {mode: 'cors'})
        const getWeather = await response.json();
        console.log(getWeather)
        displayWeather(getWeather);
    } catch(error){
        let div = document.querySelector("div");
        div.innerHTML="Not Found! - Please try using the search engine according to the below instructions";
        
        console.log("fuck")
    }
}



//let x = document.getElementById("search-box").innerText
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    makeAPICall(document.getElementById("search-box").value)
})
//makeAPICall(x);

function displayWeather(object){
    let div = document.querySelector("div");
    div.innerHTML="";

    let h1 = document.createElement("h1");
    h1.innerText = object.name+" ";
    let img = document.createElement("img");
    img.src = `http://openweathermap.org/images/flags/${object.sys.country.toLowerCase()}.png`;
    h1.appendChild(img)
    div.appendChild(h1)

    let spanCountry = document.createElement("span");
    spanCountry.innerText=object.sys.country;
    div.appendChild(spanCountry)
    
    let h2 = document.createElement("h2");
    h2.innerText = "Current Conditions"
    h2.style.color="rgb(255, 224, 47)"
    let img2 = document.createElement("img");
    img2.style.width="64px";
    img2.style.height="64px";
    img2.src = `https://openweathermap.org/img/wn/${object.weather[0].icon}@4x.png`
    h2.appendChild(img2)
    div.appendChild(h2);
   

    let span1 = document.createElement("span");
    span1.innerText = "Weather Description - "+ object.weather[0].description
    div.appendChild(span1);

    let span2 = document.createElement("span");
    span2.innerText = "Temperature - "+ object.main.temp+"°C";
    div.appendChild(span2);

    let span3 = document.createElement("span");
    span3.innerText = "Humidity - "+ object.main.humidity+"%";
    div.appendChild(span3);

    let span4 = document.createElement("span");
    let wind = ((object.wind.speed)*60*60)/1000
    span4.innerText = "Wind - "+ wind+"km/h";
    div.appendChild(span4);

  
}

//document.body.style.backgroundImage =`url("https://cdn.britannica.com/s:800x450,c:crop/23/204523-138-A67F2633/more-weather-climate.jpg")`
