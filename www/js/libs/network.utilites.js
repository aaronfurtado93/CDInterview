//====================================================================================================
//isProperAjaxUrl --- Definition
//====================================================================================================
function isProperAjaxUrl(url){
    if(isNotBlankNullUndefined(url))
    {
        return true;
    }
    return false;
}
//====================================================================================================

//====================================================================================================
//isValidTypeOrSetDefaultType --- Definition
//====================================================================================================
function isValidTypeOrSetDefaultType(type){
    if(isBlankNullUndefined(type))
    {
        console.info("'type' parameter undefined/null/blank; using default value '" + applicationResources.resources.defaultAjaxParameters.type + "' instead.");
        return applicationResources.resources.defaultAjaxParameters.type;
    }
    return type;
}
//====================================================================================================

//====================================================================================================
//isValidAsyncOrSetDefaultAsync --- Definition
//====================================================================================================
function isValidAsyncOrSetDefaultAsync(async){
    if(isBlankNullUndefined(async) || isNotBoolean(async))
    {
        console.info("'async' parameter undefined/null/blank; using default value '" + applicationResources.resources.defaultAjaxParameters.async + "' instead.");
        return applicationResources.resources.defaultAjaxParameters.async;
    }
    return async;
}
//====================================================================================================

//====================================================================================================
//isValidCrossDomainOrSetDefaultCrossDomain --- Definition
//====================================================================================================
function isValidCrossDomainOrSetDefaultCrossDomain(crossDomain){
    if(isBlankNullUndefined(crossDomain) || isNotBoolean(crossDomain))
    {
        console.info("'crossDomain' parameter undefined/null/blank; using default value '" + applicationResources.resources.defaultAjaxParameters.crossDomain + "' instead.");
        return applicationResources.resources.defaultAjaxParameters.crossDomain;
    }
    return crossDomain;
}
//====================================================================================================

//====================================================================================================
//isValidDataTypeOrSetDefaultDataType --- Definition
//====================================================================================================
function isValidDataTypeOrSetDefaultDataType(dataType){
    if(isBlankNullUndefined(dataType))
    {
        console.info("'dataType' parameter undefined/null/blank; using default value '" + applicationResources.resources.defaultAjaxParameters.dataType + "' instead.");
        return applicationResources.resources.defaultAjaxParameters.dataType;
    }
    return dataType;
}
//====================================================================================================

//====================================================================================================
//isValidDataOrSetDefaultData --- Definition
//====================================================================================================
function isValidDataOrSetDefaultData(data){
    if(isBlankNullUndefined(data))
    {
        console.info("'data' parameter undefined/null/blank; using default value '" + applicationResources.resources.defaultAjaxParameters.data + "' instead.");
        return applicationResources.resources.defaultAjaxParameters.data;
    }
    return data;
}
//====================================================================================================

//====================================================================================================
//isValidContentTypeOrSetDefaultContentType --- Definition
//====================================================================================================
function isValidContentTypeOrSetDefaultContentType(contentType){
    if(isBlankNullUndefined(contentType))
    {
        console.info("'contentType' parameter undefined/null/blank; using default value '" + applicationResources.resources.defaultAjaxParameters.contentType + "' instead.");
        return applicationResources.resources.defaultAjaxParameters.contentType;
    }
    return contentType;
}
//====================================================================================================

//====================================================================================================
//isValidAcceptOrSetDefaultAccept --- Definition
//====================================================================================================
function isValidAcceptOrSetDefaultAccept(accepts){
    if(isBlankNullUndefined(accepts))
    {
        console.info("'accepts' parameter undefined/null/blank; using default value '" + applicationResources.resources.defaultAjaxParameters.accepts + "' instead.");
        return applicationResources.resources.defaultAjaxParameters.accepts;
    }
    return accepts;
}
//====================================================================================================

//====================================================================================================
//isValidTimeoutOrSetDefaultTimeout --- Definition
//====================================================================================================
function isValidTimeoutOrSetDefaultTimeout(timeout){
    if(isBlankNullUndefined(timeout))
    {
        console.info("'timeout' parameter undefined/null/blank; using default value '" + applicationResources.resources.defaultAjaxParameters.timeout + "' instead.");
        return applicationResources.resources.defaultAjaxParameters.timeout;
    }
    return timeout;
}
//====================================================================================================

//====================================================================================================
//isValidCacheOrSetDefaultCache --- Definition
//====================================================================================================
function isValidCacheOrSetDefaultCache(cache){
    if(isBlankNullUndefined(cache) || isNotBoolean(cache))
    {
        console.info("'cache' parameter undefined/null/blank; using default value '" + applicationResources.resources.defaultAjaxParameters.cache + "' instead.");
        return applicationResources.resources.defaultAjaxParameters.cache;
    }
    return cache;
}
//====================================================================================================

//====================================================================================================
//isValidHeadersOrSetDefaultHeaders --- Definition
//====================================================================================================
function isValidHeadersOrSetDefaultHeaders(headers){
    if(isBlankNullUndefined(headers))
    {
        console.info("'headers' parameter undefined/null/blank; using default value '" + applicationResources.resources.defaultAjaxParameters.headers + "' instead.");
        return applicationResources.resources.defaultAjaxParameters.headers;
    }
    return headers;
}
//====================================================================================================

//====================================================================================================
//isValidBeforeSendOrSetDefaultBeforeSend --- Definition
//====================================================================================================
function isValidBeforeSendOrSetDefaultBeforeSend(beforeSend){
    if(isBlankNullUndefined(beforeSend) || isNotFunction(beforeSend))
    {
        console.info("'beforeSend' parameter is not a function; using default value '" + applicationResources.resources.defaultAjaxParameters.beforeSend + "' instead.");
        return applicationResources.resources.defaultAjaxParameters.beforeSend;
    }
    return beforeSend;
}
//====================================================================================================

//====================================================================================================
//isValidCompleteOrSetDefaultComplete --- Definition
//====================================================================================================
function isValidCompleteOrSetDefaultComplete(complete){
    if(isBlankNullUndefined(complete) || isNotFunction(complete))
    {
        console.info("'complete' parameter is not a function; using default value '" + applicationResources.resources.defaultAjaxParameters.complete + "' instead.");
        return applicationResources.resources.defaultAjaxParameters.complete;
    }
    return complete;
}
//====================================================================================================

//====================================================================================================
//isValidSuccessOrSetDefaultSuccess --- Definition
//====================================================================================================
function isValidSuccessOrSetDefaultSuccess(success){
    if(isBlankNullUndefined(success) || isNotFunction(success))
    {
        console.info("'success' parameter is not a function; using default value '" + applicationResources.resources.defaultAjaxParameters.success + "' instead.");
        return applicationResources.resources.defaultAjaxParameters.success;
    }
    return success;
}
//====================================================================================================

//====================================================================================================
//isValidErrorOrSetDefaultError --- Definition
//====================================================================================================
function isValidErrorOrSetDefaultError(error){
    if(isBlankNullUndefined(error) || isNotFunction(error))
    {
        console.info("'error' parameter is not a function; using default value '" + applicationResources.resources.defaultAjaxParameters.error + "' instead.");
        return applicationResources.resources.defaultAjaxParameters.error;
    }
    return error;
}
//====================================================================================================


//====================================================================================================
//ajaxCall --- Example
//====================================================================================================
//ajaxCall({
//    url: "http://staging.couponapitest.com/task_data.txt",
//    type:"GET",
//    async:true,
//    crossDomain:false,
//    dataType:"xml",
//    data:{},
//    contentType: "application/x-www-form-urlencoded; charset=utf-8",
//    accepts:{
//      "*": "*/*",
//      text: "text/plain",
//      html: "text/html",
//      xml: "application/xml, text/xml",
//      json: "application/json, text/javascript"
//    },
//    timeout:5000,
//    cache:true,
//    headers:{},
//    beforeSend: function (jqXHR, settings) {
//        console.info("beforeSend");
//        console.log(jqXHR);
//        console.log(settings);
//    },
//    complete: function (jqXHR, textStatus) {
//        console.info("complete");
//        console.log(jqXHR);
//        console.log(textStatus);
//    },
//    success: function (data, textStatus, jqXHR) {
//        console.info("success");
//        console.log(data);
//        console.log(textStatus);
//        console.log(jqXHR);
//    },
//    error: function ( jqXHR, textStatus, errorThrown ) {
//        console.error("success");
//        console.error(jqXHR);
//        console.error(textStatus);
//        console.error(errorThrown);
//    }
//});
//====================================================================================================
//ajaxCall --- Definition
//====================================================================================================
function ajaxCall(parameters)
{
    if(parameters !== undefined && isProperAjaxUrl(parameters.url))
    {
        parameters.type = isValidTypeOrSetDefaultType(parameters.type);
        parameters.async = isValidAsyncOrSetDefaultAsync(parameters.async);
        parameters.crossDomain = isValidCrossDomainOrSetDefaultCrossDomain(parameters.crossDomain);
        parameters.dataType = isValidDataTypeOrSetDefaultDataType(parameters.dataType);
        parameters.data = isValidDataOrSetDefaultData(parameters.data);
        parameters.contentType = isValidContentTypeOrSetDefaultContentType(parameters.contentType);
        parameters.accepts = isValidAcceptOrSetDefaultAccept(parameters.accepts);
        parameters.timeout = isValidTimeoutOrSetDefaultTimeout(parameters.timeout);
        parameters.cache = isValidCacheOrSetDefaultCache(parameters.cache);
        parameters.headers = isValidHeadersOrSetDefaultHeaders(parameters.headers);
        parameters.beforeSend = isValidBeforeSendOrSetDefaultBeforeSend(parameters.beforeSend);
        parameters.complete = isValidCompleteOrSetDefaultComplete(parameters.complete);
        parameters.success = isValidSuccessOrSetDefaultSuccess(parameters.success);
        parameters.error = isValidErrorOrSetDefaultError(parameters.error);
        
        $.ajax({
            url: parameters.url,
            type: parameters.type,
            async: parameters.async,
            crossDomain: parameters.crossDomain,
            dataType: parameters.dataType,
            data: parameters.data,
            contentType: parameters.contentType,
            accepts: parameters.accepts,
            timeout: parameters.timeout,
            cache: parameters.cache,
            headers: parameters.headers,
            beforeSend: parameters.beforeSend,
            complete: parameters.complete,
            success: parameters.success,
            error: parameters.error
        });
    }
    else
    {
        console.error("Pass appropriate parameters in ajaxCall({...})");
    }
}
//====================================================================================================