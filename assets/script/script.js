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
    for (let i = 0; i < data.media.length; i++) {
      var image = data.media[i].src.medium;
      image = document.createElement("img");
      
      console.log(data.media[i].src.medium);
      console.log(image)
      
      image.setAttribute("src", data.media[i].src.medium);
      var photo1 = document.querySelector("#photos"+[i]); 
      photo1.append(image);
    }
  });

//PAOLA'S FUNCTION FOR SUBMIT BUTTON AND LOCAL STORAGE

var customerArray = [];
var submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();

  console.log(this);//success, shows specific button pressed

  console.log(document.getElementById("customerName").value); //Success
  var customerName = document.getElementById("customerName").value;

  console.log(document.getElementById("customerEmail").value);//Success
  var customerEmail = document.getElementById("customerEmail").value;

  console.log(document.getElementById("customerNum").value);//Success
  var customerNum = document.getElementById("customerNum").value;

  console.log(document.getElementById("customerMsg").value); //Success
  var customerMsg = document.getElementById("customerMsg").value;

  if(customerName.trim().length < 1) {
    window.alert("Please enter a name");//success
  } else /*(localStorage == null)*/{
    console.log("something is in local storage");//success

    var customerName = document.getElementById("customerName").value;
    var customerEmail = document.getElementById("customerEmail").value;
    var customerNum = document.getElementById("customerNum").value;
    var customerMsg = document.getElementById("customerMsg").value;

    var customerObj = {
      name: customerName,
      email: customerEmail,
      number:  customerNum,
      message: customerMsg,
    }

    console.log(customerObj);

  } else {
    console.log("there is nothing in local storage yet");//success
  }

})
