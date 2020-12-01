
    
document.getElementById("run").addEventListener("click", function(){

    var key = '8d07c7290ddb4e174c1a5afa37c708b4';
    var city = "gent";
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + key)
     
    .then(response => {
        console.log (response); 
        return response.json();
    })

    .then(json => {
        console.log(json);
    })



})