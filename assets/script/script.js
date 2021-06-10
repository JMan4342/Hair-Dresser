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

// fetch("https://api.pexels.com/v1/collections/hair-dresser-6qa6dek", {
//   headers: {
//     Authorization: "563492ad6f91700001000001207f3ab348db4147b699565de961df61"
//   }
// })
//    .then(resp => {
//      return resp.json()
//    })
//    .then(data => {
//      console.log(data)
//    })

// Access photos from Pexel site through
fetch("https://api.pexels.com/v1/search?query=hairdresser&page=1&per_page=5", {
  headers: {
    Authorization: "563492ad6f91700001000001207f3ab348db4147b699565de961df61"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     console.log(data)
   })
