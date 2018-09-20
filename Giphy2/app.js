var topics = ["Basketball", "Football", "Golf"];

var addButton = [];

$(document).ready(function () {
  start();
});

function start() {
  button = [];
  for (var i = 0; i < topics.length; i++) {
    var button = topics[i];
    $(".buttonDiv").append(
      "<button>" + button + "</button>"
    );
    runGiphy();
  };
};

function runGiphy() {
  $("button").click(function () {
    $(".gifDiv").empty();
    var selected = $(this).text();
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      selected +
      "&api_key=CJnGgac8GAFjemE8rbMchZGIiBhWt2Qa&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          gif = results[i];
          var giphyDiv = $("<div>")
          var giphRating = gif.rating;
          var p = $("<p>").text("Rating: " + results[i].rating);
          var giphyGif = $("<img>");

          giphyGif.addClass("theGif")
          giphyGif.attr("data-animate", gif.images.fixed_height.url);
          giphyGif.attr("data-still", gif.images.fixed_height_still.url);
          giphyGif.attr("src", results[i].images.fixed_height.url);
          giphyGif.attr("data-state", "still");


          giphyDiv.append(giphyGif);
          giphyDiv.append(p);

          $(".gifDiv").append(giphyDiv);
        }

        gifState();
      });
  });
}

function gifState() {
  $(".theGif").click(function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).data("animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).data("still"));
      $(this).attr("data-state", "still");

    }
  });

}

$("#newInput").click(function() {
  event.preventDefault();
  addButton = [];
  var newText = $("#inputText")
    .val();
  addButton.push(newText);
  $(".buttonDiv").append(
    "<button>" + addButton + "</button>"
  );
  runGiphy();
});