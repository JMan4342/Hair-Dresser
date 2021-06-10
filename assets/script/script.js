//PAOLA'S FUNCTION FOR GOOGLE MAPS
function initMap() {
  map = new google.maps.Map (document.getElementById("map"), {
      center: {lat: 32.24413848450306, lng: -110.9081052153426}, 
      zoom: 15,
  });

  var marker = new google.maps.Marker({
      position: {lat: 32.24321493313871, lng: -110.90809476357072},
      map: map,
  });

  marker.addListener("click", function(){
      window.open("https://goo.gl/maps/ei89BzkWAr8Ht4bs7");
  });
};


//PAOLA'S FUNCTION FOR PEXELS API
// var apiKey = 
// var pexelUrl = "https://api.pexels.com/v1/photos/", {
//     headers: {
//         Authorization: 
//     }
// }
    
// fetch(pexelUrl)
// .then(function (response) {
//     console.log(response)
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
// })
