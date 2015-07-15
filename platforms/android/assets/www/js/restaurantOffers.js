navigator.geolocation.watchPosition(onGeolocationSuccess, onGeolocationError, { maximumAge: 30000, timeout: 60000, enableHighAccuracy: false });

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



ajaxCall({url:"http://staging.couponapitest.com/task_data.txt",dataType:"text",success:onSuccesRestaurantOffers});