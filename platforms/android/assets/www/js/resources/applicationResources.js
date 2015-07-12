var applicationResources = {
    resources: {
        defaultAjaxParameters: {
            type:"GET",
            async:true,
            crossDomain:false,
            dataType:"xml",
            data:{},
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            accepts:{
              "*": "*/*",
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            timeout:5000,
            cache:true,
            headers:{},
            beforeSend: function (jqXHR, settings) {
                console.info("beforeSend");
                console.log(jqXHR);
                console.log(settings);
            },
            complete: function (jqXHR, textStatus) {
                console.info("complete");
                console.log(jqXHR);
                console.log(textStatus);
            },
            success: function (data, textStatus, jqXHR) {
                console.info("success");
                console.log(data);
                console.log(textStatus);
                console.log(jqXHR);
            },
            error: function ( jqXHR, textStatus, errorThrown ) {
                console.error("error");
                console.error(jqXHR);
                console.error(textStatus);
                console.error(errorThrown);
            }
        }
    }
}