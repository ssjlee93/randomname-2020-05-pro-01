var item = "";
var city = "LA"; 
var product = "eggs";

function prices() {

var settings = {
  "url": "https://grocerybear.com/getitems?city=" + city + "&product=" + product + "&num_days=7",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "api-key": "D88BB3392503C0DB49C15ADA11395CD1BFD7886CF8CB5763FFF5A228A0EF93A0"

  },
};

$.ajax(settings).done(function (response1) {
  console.log(response1);
  item = response1[0].title;
  console.log(item)
  
});

}

function nutrition() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://trackapi.nutritionix.com/v2/search/instant?query=" + item + "?field=nf_calories",
    "method": "GET",
    "headers": {
        "x-app-id": "84d7c19a",
        "x-app-key": "b8834860ea9e6560026dfa655c816765"
    }
