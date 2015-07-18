

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

function restaurantOffersExecute ()
{
    ajaxCall({url:"http://staging.couponapitest.com/task_data.txt",dataType:"text",success:onSuccesRestaurantOffers});
}
