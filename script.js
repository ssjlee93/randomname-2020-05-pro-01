function searchItems() {
    var keyword = $("#search").val().trim();
    var qurl = "https://google-shopping.p.rapidapi.com/search?language=EN&keywords=" + keyword + "&country=US";
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": qurl,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "google-shopping.p.rapidapi.com",
            "x-rapidapi-key": "fe7f8d06ecmsh1a3cdf165ed78bap1f81adjsnacbec97f711b"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

$("#searchBtn").on("click",searchItems)