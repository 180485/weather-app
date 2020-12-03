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
        document.getElementById("info").innerHTML =  `${today} °c `;
        document.getElementById("info2").innerHTML= info ;

        
        //getting 5days forecast
        var dayOne = data.data[1].temp;
        var dayTwo = data.data[2].temp;
        var dayThree = data.data[3].temp;
        var dayFour = data.data[4].temp;
        var dayFive = data.data[5].temp;

       

       
        document.getElementById("dayone").innerHTML =  dayOne + "°c" ;
        document.getElementById("text1").innerHTML =  info;

        
        document.getElementById("daytwo").innerHTML =  dayTwo + "°c" ;
        document.getElementById("text2").innerHTML =  info;
        
        document.getElementById("daythree").innerHTML =  dayThree + "°c" ;
        document.getElementById("text3").innerHTML =  info ;

       
        document.getElementById("dayfour").innerHTML =  dayFour + "°c" ;
        document.getElementById("text4").innerHTML =  info ;

        
        document.getElementById("dayfive").innerHTML =  dayFive + "°c" ;
        document.getElementById("text5").innerHTML =  info;  
   
            
    })

    //making chart
    var ctx = document.getElementById("myChart").getContext('2d');
    var cuaca = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
     
 })
 
  

