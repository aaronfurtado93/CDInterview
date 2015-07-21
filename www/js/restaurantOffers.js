

/*<li><a href="#"></a></li>*/

function populateListView (dataJson) {
    restaurantData = dataJson.data;
    
    createRestaurantTableIfNotExists();
    insertValuesIntoRestaurantTable(restaurantData);
}

function onSuccesRestaurantOffers (data, textStatus, jqXHR) {
    console.info("success - Restaurant Offers");
    console.log(textStatus);
    console.log(jqXHR);
    
    var dataJson = JSON.parse(data);
    
    populateListView(dataJson);
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