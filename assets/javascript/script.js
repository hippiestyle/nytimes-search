
$("#submit-search-btn").on("click", function() {
  var search = $("#site-search").val();
  var dateStart = $("#start-year-search").val();
  var dateEnd = $("#end-year-search").val();
  var pageLimit = $("#results-num").val(); 
console.log(search + dateStart + dateEnd + pageLimit);
  // get all form data and transfer to variable

  

  

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
  
  
  for (var i = 0; i < (pageLimit*10); i++) {

      console.log(response);
      console.log(response.response.docs[i].headline.main);
      var articleContainer  = $("<div>").addClass("article-container");
      var printHeadline = $("<div>").html(response.response.docs[i].headline.print_headline);
      var main = $("<div>").html(response.response.docs[i].headline.main);
      var author = $("<div>").html(response.response.docs[i].byline.original);
      var dateWritten = $("<div>").html(response.response.docs[i].pub_date);


      articleContainer.append(printHeadline, main, author, dateWritten);
      $("#overall-container").append(articleContainer);
      };
  
    });
});
  

 
