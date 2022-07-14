const searchbtn=document.getElementById('srchbtn')
searchbtn.addEventListener('click',fun=()=>{
  cit=document.querySelector('#val').value
  let city=document.getElementById('cityname')
  let tempq=document.getElementById('temperature')
  let humidq=document.getElementById('humid')
  
  let descq=document.getElementById('description')
  let speedq=document.getElementById('wind')
  
  
  const lin=`https://api.openweathermap.org/data/2.5/weather?q=${cit}&units=metric&appid=6310b3c1a2ac102b8a6103234eda869f`

  fetch(lin).then(response=>{
    if(!response.ok){
        alert("No Weather Found")
    }
    return response.json()
  }).then(data=>{
  //console.log(data)
  const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    city.textContent="Weather in "+name
    tempq.textContent=temp+"°C"
    document.querySelector('.icon').src="https://openweathermap.org/img/wn/"+icon+
    ".png"
    
    descq.textContent = description;
    humidq.textContent =
      "Humidity: " + humidity + "%";
    speedq.textContent =
      "Wind speed: " + speed + " km/h";
    
     document.body.style.backgroundImage =
       "url('https://source.unsplash.com/1600x900/?" + name + "')";
})
})
document
    .querySelector("#val")
    .addEventListener("keydown", function (event) {
      if (event.key == "Enter") {
        fun();
      }
    });