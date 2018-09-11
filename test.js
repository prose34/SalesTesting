
function buildQueryURL() {
    //This is the main eBay URL used to query the API for completed items only
    const queryURL = "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findCompletedItems&"

    //This is my API key 

}

$("#pushtest").click(function() {
    console.log($(".form-control").val());
});

http://svcs.ebay.com/services/search/FindingService/
   v1?OPERATION-NAME=findItemsByKeywords
   &SERVICE-VERSION=1.0.0
   &SECURITY-APPNAME=YourAppID
   &RESPONSE-DATA-FORMAT=XML
   &REST-PAYLOAD
   &keywords=harry%20potter%20phoenix


https://svcs.ebay.com/services/search/FindingService/v1?
   OPERATION-NAME=findCompletedItems&
   SERVICE-VERSION=1.7.0&
   SECURITY-APPNAME=YourAppID&
   RESPONSE-DATA-FORMAT=XML&
   REST-PAYLOAD&
   keywords=Garmin+nuvi+1300+Automotive+GPS+Receiver&
   categoryId=156955&
   itemFilter(0).name=Condition&
   itemFilter(0).value=3000&
   itemFilter(1).name=FreeShippingOnly&
   itemFilter(1).value=true&
   itemFilter(2).name=SoldItemsOnly&
   itemFilter(2).value=true&
   sortOrder=PricePlusShippingLowest&
   paginationInput.entriesPerPage=2