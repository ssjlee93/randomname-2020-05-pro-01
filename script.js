var item = "";
var city = "";
var product = "";
var counter = 0;
var responseObj = {};

$(".city").on("click", function() {
  city = $(this).attr("data-city");
})
$(".item").on("click", function() {
  product = $(this).attr("data-item");
})

function search(event){
  event.preventDefault();
  prices();
  nutrition();
}

function prices() {
var settings = {
  "url": "https://grocerybear.com/getitems?city=" + city + "&product=" + product + "&num_days=7",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "api-key": "D88BB3392503C0DB49C15ADA11395CD1BFD7886CF8CB5763FFF5A228A0EF93A0"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
  console.log(city);
  responseObj.price = response[counter].price; 
  console.log(responseObj);

 
});

}

function nutrition() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://trackapi.nutritionix.com/v2/search/instant?query=" + product,
    "method": "GET",
    "headers": {
        "x-app-id": "84d7c19a",
        "x-app-key": "b8834860ea9e6560026dfa655c816765"
    }

}
$.ajax(settings).done(function (response) {
    console.log(response);
    var thumbnail = response.common[counter].photo.thumb;
   
    $("#nutritionPhoto").attr("src",thumbnail);
    
});

}

$("#searchBtn").on("click",search);

