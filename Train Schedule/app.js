//Set up firebase
var config = {
  apiKey: "AIzaSyBZuqXMv4o-3NUTGnlnMVLu0jT9Q3iDP3Y",
  authDomain: "train-station-fc486.firebaseapp.com",
  databaseURL: "https://train-station-fc486.firebaseio.com",
  projectId: "train-station-fc486",
  storageBucket: "train-station-fc486.appspot.com",
  messagingSenderId: "333570173859"
};
firebase.initializeApp(config);


  database = firebase.database();
  var name = "";
  var destination = "";
  var traintime = "";
  var frequency = "";

  //Button Click
  $("#add-train").on("click", function (event) {
    event.preventDefault();
    name = $("#train-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    traintime = $("#first-train-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    traintime = moment(traintime, "HH:mm").format("HH:mm");
    var traintimeconverted = moment(traintime, "HH:mm").subtract(1, "years");
    
    var diffTime = moment().diff(moment(traintimeconverted), "minutes")
    var tRemainder = diffTime % frequency;
    var tMinutesTillTrain = frequency - tRemainder;
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");

    database.ref().push({
      name: name,
      destination: destination,
      traintime: traintime,
      frequency: frequency,
      traintimeconverted: traintimeconverted,
    });
  });

  //Firebase watcher and table filler
  database.ref().on("child_added",function (childSnapshot) {
    console.log("Child was added");
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().traintime);
    console.log(childSnapshot.val().frequency);

   var newRow = $("<tr>").append(
     $("<td>").text(name),
     $("<td>").text(destination),
     $("<td>").text(frequency),
     $("<td>").text(nextTrain),
     $("<td>").text(tMinutesTillTrain)
   );

   $("#train-table").append(newRow);
  });


  

