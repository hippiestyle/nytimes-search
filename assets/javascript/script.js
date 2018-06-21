




$("#submit-search-btn").on("click", function() {
  var search = $("#site-search").val();
  var dateStart = $("#start-year-search").val();
  var dateEnd = $("#end-year-search").val();
  var pageLimit = $("#")

  // get all form data and transfer to variable

  
  "oil" //value of search input
  

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "f1190384efd544f1ad91977bc195513e",
  'q': search,
  'begin_date': dateStart,
  'end_date': dateEnd,
  'page': pageLimit

});
    $.ajax({
    url: url,
    method: 'GET',
    })
    
    .done(function(response) {

    console.log(response);

    var results = response.data;
    console.log(results);
    });

});

 
