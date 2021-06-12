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
fetch("https://api.pexels.com/v1/collections/94y0vkn", {
  headers: {
    Authorization: "563492ad6f91700001000001207f3ab348db4147b699565de961df61",
  },
})
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    const html = data.data;
    for (let i = 0; i < data.media.length; i++) {
      var image = data.media[i].src.medium;
      image = document.createElement("img");
      
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

  var customerName = document.getElementById("customerName").value;

  var customerEmail = document.getElementById("customerEmail").value;

  var customerNum = document.getElementById("customerNum").value;

  var customerMsg = document.getElementById("customerMsg").value;

  if(customerName.trim().length < 1) {
    window.alert("Please enter a name");//success

  } else if (localStorage.customerArray != null){
    console.log("something is in local storage");//success

    var savedCustomerArray = JSON.parse(localStorage.getItem("customerArray")); //grabbing what is in storage

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

    //Appending to form
    var thanks = document.querySelector("#thanks");
    thanks.setAttribute("class", "reveal");
    thanks.textContent= "Thank you for signing up, " + customerObj.name + "! We will get in touch with you soon."

    //Hiding welcome
    var welcome = document.getElementById("welcome");
    welcome.setAttribute("class", "hide");

    //sending it back to storage
    savedCustomerArray.push(customerObj);
    localStorage.setItem("customerArray", JSON.stringify(savedCustomerArray));

  } else {
    console.log("there is nothing in local storage yet");//success

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

    //Appending to form
    var thanks = document.querySelector("#thanks");
    thanks.setAttribute("class", "reveal");
    thanks.textContent= "Thank you for signing up, " + customerObj.name + "! We will get in touch with you soon."

    customerArray.push(customerObj);

    localStorage.setItem("customerArray", JSON.stringify(customerArray));
  };

});

// PAOLA'S FUNCTIONS TO APPEND------------------------------------------
//Window reload function

window.addEventListener("load", function(event) {
  event.preventDefault();
  
  if(localStorage.customerArray != null) {
    var customerArray = JSON.parse(localStorage.getItem("customerArray"));
    console.log(customerArray[0].name);
    console.log(customerArray.length-1);
    
    var lastCustomer = customerArray.length - 1;
    var customerName = customerArray[lastCustomer].name
    
    var welcome = document.getElementById("welcome");
    welcome.textContent= "Welcome back, " + customerName + "!" + " We are happy to see you!"

    if(welcome.className == "hide") {
      welcome.setAttribute("class", "reveal");
    };

  } else {
    console.log("customer has not visited before");
    var welcome = document.getElementById("welcome");
    welcome.setAttribute("class", "hide");
  }
});

