function populateListViewTables (dataJson) {
    restaurantData = dataJson.data;
    
    createRestaurantTableIfNotExists();
    
    insertValuesIntoRestaurantTable(restaurantData);
}

function populateListView (results)
{
    var restaurant_card_div;
    $("#restaurant-list").html("");
    $.each(results.rows, function(key,value){
        restaurant_card_div = "<li id='restaurant_card_"+key+"' class='restaurant-card'>";
        restaurant_card_div += "<div class='restaurant-card-content'>"; //card div
        restaurant_card_div += "<div class='restaurant-card-image-holder'>"; //image div
        restaurant_card_div += "<img src=" + value.logoURL + " class='restaurant-card-image'/>"
        restaurant_card_div += "</div>"; //image-div
        restaurant_card_div += "<div class='restaurant-name'>" + value.restaurantName + "</div>"; //name div
        restaurant_card_div += "</div>";
        restaurant_card_div += "</li>";
        
        $("#restaurant-list").append(restaurant_card_div);
    });
}

function onSuccesRestaurantOffers (data, textStatus, jqXHR) {
    console.info("success - Restaurant Offers");
    console.log(textStatus);
    console.log(jqXHR);
    
    var dataJson = JSON.parse(data);
    
    populateListViewTables(dataJson);
}

function onErrorRestaurantOffers( jqXHR, textStatus, errorThrown ) {
    console.error("error");
    console.error(jqXHR);
    console.error(textStatus);
    console.error(errorThrown);
    if(textStatus === "error" && errorThrown === "")
    {
        console.info("using fallback data to continue test.");
        ajaxCall({url:"/android_asset/www/js/resources/task_data.txt",dataType:"text",success:onSuccesRestaurantOffers});
    }
}

function executeRestaurantOffers ()
{
    ajaxCall({url:"http://staging.couponapitest.com/task_data.txt",dataType:"text",success:onSuccesRestaurantOffers,error:onErrorRestaurantOffers});
}