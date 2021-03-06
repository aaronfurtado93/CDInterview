var restaurantCountPostSelect = 0;

function populateListViewTables (dataJson) {
    restaurantData = dataJson.data;
    
    createRestaurantTableIfNotExists();
    
    insertValuesIntoRestaurantTable(restaurantData);
}

function populateListView (results)
{
    var restaurant_card_div;
    $("#restaurant-list").html("");
    
    restaurantCountPostSelect = 0;
    $.each(results.rows, function(key,value){
        restaurant_card_div = "<li id='restaurant_card_"+key+"' class='restaurant-card'>";
        restaurant_card_div += "<div class='restaurant-card-content'>"; //card div
        restaurant_card_div += "<div class='restaurant-card-row'>"; // row 1
        restaurant_card_div += "<div class='restaurant-card-image-holder'>"; //image div
        restaurant_card_div += "<img src=" + value.logoURL + " class='restaurant-card-image'/>"
        restaurant_card_div += "</div>"; //image-div
        restaurant_card_div += "<div class='restaurant-card-cell'>"; //restaurant & offer info div
        restaurant_card_div += "<div class='restaurant-name' style='width:" + ($(window).width() * 0.45) + "px;'>" + value.restaurantName + "</div>"; //name div
        restaurant_card_div += "<div class='restaurant-offers'>" + value.offers + " offers</div>"; //offers div
        restaurant_card_div += "</div>"; //restaurant & offer info div
        restaurant_card_div += "<div class='restaurant-card-cell favourite-icon-holder'>"; //favourite icon div
        restaurant_card_div += "<img src='/android_asset/www/img/ic_heart_unselected.png' height='25px' width='25px'/>";
        restaurant_card_div += "</div>"; //favourite icon div end
        restaurant_card_div += "</div>"; // row 1 end
        restaurant_card_div += "<div class='restaurant-card-row cuisine-li' style='width:" + ($(window).width() * 0.85) + "px;'>"; // row 2
        
        if(value.cuisine !== " ")
        {
            cuisineObject = JSON.parse(value.cuisine);
            cuisineArray = cuisineObject.Cuisine;
            $.each(cuisineArray,function (key,value){
                restaurant_card_div += "&bull;" + value + "&nbsp";
            });
        }
        
        restaurant_card_div += "</div>"; // row 2 end
        restaurant_card_div += "<div class='restaurant-card-row distance-li' style='width:" + ($(window).width() * 0.85) + "px;'>";  //row 3
        
        var distance = value.distance;
        var distanceString = " ";
        if(distance > 1000)
        {
            distance /= 1000;
            distance = Math.ceil(distance);
            distanceString += distance + " Km";
        }
        else
        {
            distance = Math.ceil(distance);
            distanceString += distance + " m";
        }
        
        restaurant_card_div += "<img src='/android_asset/www/img/ic_action_location_blue.png' height='21px'/>";
        restaurant_card_div += "<div class='distance-value'>" + distanceString + "</div>";
        restaurant_card_div += "<div class='distance-value'>" + value.neighbourhoodName + "</div>";
        restaurant_card_div += "</div>"; // row 3 end
        restaurant_card_div += "</div>"; //card div end
        restaurant_card_div += "</li>";
        
        $("#restaurant-list").append(restaurant_card_div);
        
        restaurantCountPostSelect++;
        
        if(restaurantCountPostSelect === restaurantCountPostInsert)
        {
            $.mobile.loading( "hide");
        }
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