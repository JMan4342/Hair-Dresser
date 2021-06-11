//PAOLA'S FUNCTION FOR GOOGLE MAPS
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.24413848450306, lng: -110.9081052153426 },
    zoom: 15,
  });

  var marker = new google.maps.Marker({
    position: { lat: 32.24321493313871, lng: -110.90809476357072 },
    map: map,
  });

  marker.addListener("click", function () {
    window.open("https://goo.gl/maps/ei89BzkWAr8Ht4bs7");
  });
}

// Access photos from collection with Pexel API
// Render Pexel photos on screen.
// !!! NEED TO EITHER LOOP 3 IMAGES TO SHOW, OR ADD EACH IMAGE SEPARATE !!!
fetch("https://api.pexels.com/v1/collections/6qa6dek", {
  headers: {
    Authorization: "563492ad6f91700001000001207f3ab348db4147b699565de961df61",
  },
})
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })
  .then((data) => {
    const html = data.data;
    console.log(data);
    console.log(data.media[0].src.medium);
    for (let i = 0; i < data.media.length; i++) {
      
      var image = document.createElement("img");
      image.setAttribute("src", "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&h=350");
      var photo2 = document.querySelector("#photos[index]"); //Paola's note
      photo2.append(image);
    }
  });
