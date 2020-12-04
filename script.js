 //TODO: get 5 dates 
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

        //getting today/now forecast
            var today = data.data[0].temp;
            var info =  data.data[0].weather.description;
            console.log(info);

            console.log (today);
            document.getElementById("output").innerHTML =  city ;
            document.getElementById("info").innerHTML =  `${today}°c `;
            document.getElementById("info2").innerHTML= info ;

        
            //getting 5days forecast
            var dayOne = data.data[1].temp;
            var dayTwo = data.data[2].temp;
            var dayThree = data.data[3].temp;
            var dayFour = data.data[4].temp;
            var dayFive = data.data[5].temp;

        
            document.getElementById("dayone").innerHTML =  dayOne + " "+"°c" ;
            document.getElementById("text1").innerHTML =  info;

        
            document.getElementById("daytwo").innerHTML =  dayTwo +" "+ "°c" ;
            document.getElementById("text2").innerHTML =  info;
        
            document.getElementById("daythree").innerHTML =  dayThree + " "+"°c" ;
            document.getElementById("text3").innerHTML =  info ;

       
            document.getElementById("dayfour").innerHTML =  dayFour+ " "+ "°c" ;
            document.getElementById("text4").innerHTML =  info ;

        
            document.getElementById("dayfive").innerHTML =  dayFive + " "+ "°c" ;
            document.getElementById("text5").innerHTML =  info;  
   
            
    

    //making chart
    new Chart(document.getElementById("mixed-chart"), {
        type: 'bar',
        data: {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4","day 5"],
          datasets: [{
              label: "5 Days Weather",
              type: "line",
              borderColor: "#00FFFF",
              data: [dayOne,dayTwo,dayThree,dayFour,dayFive],
              fill: false
            }
        ]
      },
        options: {
          title: {
            display: true,
            text: 'Chart 5 days Weather'
          },
          legend: { display: false }
        }
    });
    
       
           
     

   

 })

})
  

