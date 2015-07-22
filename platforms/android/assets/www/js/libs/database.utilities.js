function accessDatabase () {
    var databaseObject = window.openDatabase("CD_DB", "1.0", "CouponDunia Interview", 200000);
    return databaseObject;
}

//====================================================================================================

function createRestaurantTable(tx) {
    
    var query = "drop table if exists temp_Restaurant_Table";
    tx.executeSql(query);
    
    query = "create table if not exists "; //createIfNotExistsStatement
    query += "temp_Restaurant_Table"; // tablename
    query += " ("; //startColumnsDefinition
    query += "restaurantDataID NUMBER(4) primary key, ";
    query += "restaurantName VARCHAR(50),";
    query += "logoURL VARCHAR(1000),";
    query += "offers NUMBER(3),";
    query += "cuisine VARCHAR(5000),";
    query += "neighbourhoodName VARCHAR(50),";
    query += "latitude NUMERIC(3,6),";
    query += "longitude NUMERIC(3,6),";
    query += "distance NUMERIC(5,2) ";
    query += ")"; //endColumnsDefinition
    tx.executeSql(query);
}

function createRestaurantTableFailed (error) {
    console.error("createRestaurantTable Failed");
    console.error("Error message: " + error);
}

function createRestaurantTableSucceeded () {
    console.info("createRestaurantTable Succeeded");
}

function createRestaurantTableIfNotExists ()
{
    databaseObject = accessDatabase();
    databaseObject.transaction(createRestaurantTable, createRestaurantTableFailed, createRestaurantTableSucceeded);
}

//====================================================================================================

function insertRestaurantTableDataFailed (error) {
    console.error("insertRestaurantTableData Failed");
    console.error("Error message: " + error);
}

function insertRestaurantTableDataSucceeded () {
    console.info("insertRestaurantTableData Succeeded");

    selectRestaurantDataOrderByDistance ();
}

function insertValuesIntoRestaurantTable (restaurantData) {
    
    databaseObject = accessDatabase();
    
    $.each( restaurantData, function( restaurantDataID, restaurantDataValues ) {
      /*console.log( restaurantDataID + ": " + restaurantDataValues );*/
        var temp_restaurantName = restaurantDataValues.OutletName;
        var restaurantName = "";
        var index_temp_restaurantName;
        for(index_temp_restaurantName = 0; index_temp_restaurantName < temp_restaurantName.length; index_temp_restaurantName++)
        {
            var temp_char = temp_restaurantName.charAt(index_temp_restaurantName);
            if(temp_char === "'")
            {
                restaurantName += ("'" + temp_char);
            }
            else
            {
                restaurantName += temp_char;
            }
        }
        var logoURL = restaurantDataValues.LogoURL;
        var offers = restaurantDataValues.NumCoupons;
        var cuisine = "{\"Cuisine\":[";
        $.each(restaurantDataValues.Categories, function (categoryID, catogoryDetails) {
            if (catogoryDetails.CategoryType === "Cuisine")
            {
                cuisine += "\"" + catogoryDetails.Name + "\",";
            }
        });
        cuisine = cuisine.substring(0,cuisine.lastIndexOf(","));
        cuisine += "]}";
        
        if(cuisine === "]}")
        {
            cuisine = " ";
        }
        
        var neighbourhoodName = restaurantDataValues.NeighbourhoodName;
        var latitude = restaurantDataValues.Latitude;
        var longitude = restaurantDataValues.Longitude;
        var distance = calculateDistanceFromCurrentLocation(latitude, longitude);
        
        function insertRestaurantTableData(tx) {

            var query = "insert into temp_Restaurant_Table ";
            query += "(restaurantDataID , ";
            query += "restaurantName ,";
            query += "logoURL ,";
            query += "offers ,";
            query += "cuisine ,";
            query += "neighbourhoodName ,";
            query += "latitude ,";
            query += "longitude ,";
            query += "distance) ";
            query += "values "; //values references below
            query += "(" + restaurantDataID + ",";
            query += "'" + restaurantName + "',";
            query += "'" + logoURL + "',";
            query += "" + offers + ",";
            query += "'" + cuisine + "',";
            query += "'" + neighbourhoodName + "',";
            query += "" + latitude + ",";
            query += "" + longitude + ",";
            query += "" + distance + ")";
            tx.executeSql(query);
        }
        
        databaseObject.transaction(insertRestaurantTableData, insertRestaurantTableDataFailed, insertRestaurantTableDataSucceeded);
        
    });
    
}

//====================================================================================================

function selectRestaurantDataOrderByDistanceFailed (error) {
    console.error("selectRestaurantDataOrderByDistance Failed");
    console.error("Error message: " + error);
}

function selectRestaurantDataOrderByDistanceSucceeded () {
    console.info("selectRestaurantDataOrderByDistance Succeeded");
}

function resultRestaurantData (tx, results)
{
    populateListView (results);
}

function selectRestaurantData(tx)
{
    var query = "select * from temp_Restaurant_Table order by distance asc";
    tx.executeSql(query,[],resultRestaurantData);
}

function selectRestaurantDataOrderByDistance()
{
    var databaseObject = accessDatabase();
    
    databaseObject.transaction(selectRestaurantData, selectRestaurantDataOrderByDistanceFailed, selectRestaurantDataOrderByDistanceSucceeded);
}