function accessDatabase () {
    var databaseObject = window.openDatabase("CD_DB", "1.0", "CouponDunia Interview", 200000);
    return databaseObject;
}

//====================================================================================================

function createRestaurantTable(tx) {
    var query = "create table if not exists "; //createIfNotExistsStatement
    query += "temp_Restaurant_Table"; // tablename
    query += " ("; //startColumnsDefinition
    query += "restaurantDataID Numeric(4) Primary Key,";
    query += "restaurantName Varchar(50),";
    query += "logoURL Varchar(500),";
    query += "offers Numeric(10),";
    query += "cuisine Varchar(5000),";
    query += "neighbourhoodName Varchar(50),";
    query += "lattitude Numeric(4,6),";
    query += "longitude Numeric(4,6)";
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

function insertValuesIntoRestaurantTable (restaurantData) {
    
    $.each( restaurantData, function( restaurantDataID, restaurantDataValues ) {
      /*console.log( restaurantDataID + ": " + restaurantDataValues );*/
        var restaurantName = restaurantDataValues.OutletName;
        var logoURL = restaurantDataValues.logoURL;
        var offers = restaurantDataValues.NumCoupons;
        var cuisine = "{";
        var cuisineIdCounter = 0;
        $.each(restaurantDataValues.Categories, function (categoryID, catogoryDetails) {
            if (catogoryDetails.CategoryType === "Cuisine")
            {
                cuisine += cuisineIdCounter++ + catogoryDetails.Name + ",";
            }
            /*debugger;*/
        });
        cuisine = cuisine.substring(0,cuisine.lastIndexOf(","));
        debugger;
        var neighbourhoodName = restaurantDataValues.NeighbourhoodName;
        var lattitude = restaurantDataValues.Latitude;
        var longitude = restaurantDataValues.Longitude;
    });
    debugger;
    databaseObject = accessDatabase();
//    databaseObject.transaction(insertRestaurantTableData, insertRestaurantTableDataFailed, insertRestaurantTableDataSucceeded);
}

