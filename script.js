
    
document.getElementById("run").addEventListener("click", function(){

    var key = '40fa2b86a012472b917084a043e9cbd1';
    var city = "gent";
    
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + city +'&key='+ key)
     
    .then(response => {
        console.log (response); 
        return response.json();
    })

    .then(json => {
        console.log(json);
    })



})

