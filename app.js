console.log("ankit");

var xValues = ["total","weekly","expenses"];
var yValues = [7,10,5];
var barColors = ["yellow","green","red"];
new Chart("myChart",{
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      labels:['Something','Something','Something','Something','Something',],
      backgroundColor: barColors,
      data: yValues
    }],
  },
  options: {
    legend: {display: true},
    title: {
      display: false,
      text: ""
    },
     responsive: true,
    scales:{
            x: 
            {
                display: false,
                beginAtZero: true,
            },
            y:
            {
              display:false,
              beginAtZero: true,
            },
            
        }
  }
});

const labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
new Chart("lineChart",{
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        data: [12, 28, 15, 13, 11, 39, 23],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }],
    },
    options: {
      legend: {display: true},
      title: {
        display: true,
        text: "Total Contribution"
      },
       responsive: true,
      scales:{
              x: 
              {
                  display: true,
                  beginAtZero: true,
                  grid:{
                      display:false
                  }
              },
              y:
              {
                display:true,
                beginAtZero: true,
                grid:{
                    display:false
                }
              },
              
          }
    }
  });



  /*/////*/

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) 
  {
     slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}