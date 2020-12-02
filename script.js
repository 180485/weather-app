 //TODO: get 5 dates and tempat
 //TODO: compare cities
 //TODO: see searching record
 //TODO: input value error
 //TODO: CSS for chart
 //TODO: show image accordingly
 
 
 
 document.querySelector("#submit").addEventListener("click", function(e){
    
    e.preventDefault();

    var key = '40fa2b86a012472b917084a043e9cbd1';
    var city = document.getElementById("text").value;
   
    
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + city +'&key='+ key)
     

        .then (response => response.json ())  
        
         .then((data) => { console.log("response");    
             console.log(data)

        var today = data.data[0].temp;
        console.log (today);
        document.getElementById("output").innerHTML =  city + `${today} °c `

        //getting 5days forecast
        var dayOne = data.data[1].temp;
        var dayTwo = data.data[2].temp;
        var dayThree = data.data[3].temp;
        var dayFour = data.data[4].temp;
        var dayFive = data.data[5].temp;
        
        var dateone = data.data[1].valid_date;
        document.getElementById("dayone").innerHTML =  dayOne + "°c" ;
        document.getElementById("text1").innerHTML =  dateone ;

        var datetwo = data.data[2].valid_date;
        document.getElementById("daytwo").innerHTML =  dayTwo + "°c" ;
        document.getElementById("text2").innerHTML =  datetwo;
        
        var datethree = data.data[3].valid_date;
        document.getElementById("daythree").innerHTML =  dayThree + "°c" ;
        document.getElementById("text3").innerHTML =  datetwo ;

        var datefour = data.data[4].valid_date;
        document.getElementById("dayfour").innerHTML =  dayFour + "°c" ;
        document.getElementById("text4").innerHTML =  datefour ;

        var datefive = data.data[5].valid_date;
        document.getElementById("dayfive").innerHTML =  dayFive + "°c" ;
        document.getElementById("text5").innerHTML =  datefive ;
        
             
            
        })

    

 })
