function accessDatabase () {
    var databaseObject = window.openDatabase("CD_DB", "1.0", "CouponDunia Interview", 2048);
    return databaseObject;
}

//====================================================================================================

function createRestaurantTable(tx) {
    var query = "drop table if exists temp_Restaurant_Table";
    tx.executeSql(query);
    
    query = "create table if not exists "; //createIfNotExistsStatement
    query += "temp_Restaurant_Table"; // tablename
    query += " ("; //startColumnsDefinition
    query += "restaurantDataID Numeric(4) Primary Key,";
    query += "restaurantName Varchar(50),";
    query += "logoURL Varchar(1000),";
    query += "offers Numeric(10),";
    query += "cuisine Varchar(5000),";
    query += "neighbourhoodName Varchar(50),";
    query += "latitude Numeric(4,6),";
    query += "longitude Numeric(4,6),";
    query += "distance Numeric(3)";
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

function insertRestaurantTableRowDataFailed (error) {
    console.error("insertRestaurantTableRowData Failed");
    console.error("Error message: " + error);
}

function insertRestaurantTableRowDataSucceeded () {
    console.info("insertRestaurantTableRowData Succeeded");
}

function insertValuesIntoRestaurantTable(restaurantData) {
    
    databaseObject = accessDatabase();
    
    $.each( restaurantData, function( restaurantDataID, restaurantDataValues ) {
        
        var temp_restaurantName = restaurantDataValues.OutletName;
        var restaurantName = "";
        var i;
        for(i=0; i < temp_restaurantName.length; i++)
        {
            t_char = temp_restaurantName.charAt(i);
            if(t_char !== "'")
            {
                restaurantName += t_char;
            }
            else
            {
                restaurantName += "''";
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
            cuisine = "";
        }
        
        var neighbourhoodName = restaurantDataValues.NeighbourhoodName;
        var latitude = restaurantDataValues.Latitude;
        var longitude = restaurantDataValues.Longitude;
        var distance = calculateDistanceFromCurrentLocation(latitude, longitude);
        
        function insertRestaurantTableRowData(tx) {
            
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
            query += "values ";
            query += "(" + restaurantDataID + ",";
            query += "'" + restaurantName + "',";
            query += "'" + logoURL + "',";
            query += "" + offers + ",";
            query += "'" + cuisine + "',";
            query += "'" + neighbourhoodName + "',";
            query += "" + latitude  + ",";
            query += "" + longitude + ",";
            query += "" + distance + ")";
            
            tx.executeSql(query);
        }
        
        databaseObject.transaction(insertRestaurantTableRowData, insertRestaurantTableRowDataFailed, insertRestaurantTableRowDataSucceeded);
    });

}