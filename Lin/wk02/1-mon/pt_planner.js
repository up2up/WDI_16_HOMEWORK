var alameinLine = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenwaverlyLine = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringhamLine = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

function checkLine(station) {
  var line = [];
  if (alameinLine.indexOf(station) !== -1) {
    line = alameinLine;
  }
  else if (glenwaverlyLine.indexOf(station) !== -1) {
    line = glenwaverlyLine;
  }
  else {
    line = sandringhamLine;
  }
  return line;
}

function calcStops(startORend, line) {
  var lineStops = [];
  if (line.indexOf(startORend) < line.indexOf("Richmond")) {
    lineStops = line.slice(line.indexOf(startORend), line.indexOf("Richmond") + 1);
  }
  else {
    lineStops = line.slice(line.indexOf("Richmond"), line.indexOf(startORend) + 1);
  }
  return lineStops;
}

function removeDuplicateUsingSet(arr) {
  var unique_array = Array.from(new Set(arr))
  return unique_array
}

function lineDetails(startStop, endStop) {
  line1 = checkLine(startStop);
  line2 = checkLine(endStop);
  var line1Stops = [];
  var line2Stops = [];
  var newTrip = [];
  var tripInfo = {};

  if (line1 === line2) {
    if (line1.indexOf(startStop) < line1.indexOf(endStop)) {
      newTrip = line1.slice(line1.indexOf(startStop), (line1.indexOf(endStop) + 1))
    }
    else {
      newTrip = line1.slice(line1.indexOf(endStop), (line1.indexOf(startStop) + 1)).reverse();
    }
  }
  else {
    if (line1.indexOf(startStop) < line1.indexOf("Richmond") && (line2.indexOf(endStop) < line2.indexOf("Richmond"))) {
      line1Stops = calcStops(startStop, line1);
      line2Stops = calcStops(endStop, line2).reverse();
    }
    else if ((line1.indexOf(startStop) > line1.indexOf("Richmond")) && (line2.indexOf(endStop) > line2.indexOf("Richmond"))) {
      line1Stops = calcStops(startStop, line1).reverse();
      line2Stops = calcStops(endStop, line2);
    }
    else if ((line1.indexOf(startStop) < line1.indexOf("Richmond")) && (line2.indexOf(endStop) > line2.indexOf("Richmond"))) {
      line1Stops = calcStops(startStop, line1);
      line2Stops = calcStops(endStop, line2);
    }
    else {
      line1Stops = calcStops(startStop, line1).reverse();
      line2Stops = calcStops(endStop, line2);
    }
    newTrip = removeDuplicateUsingSet(line1Stops.concat(line2Stops));
  }

  tripInfo = {
    tripStops: newTrip,
    totalStops: newTrip.length - 1
  }

  return tripInfo;
}


function tripPlanner(origin, destination) {
  var result =
    lineDetails(origin, destination).tripStops.join(" -----> ") + "\n" + lineDetails(origin, destination).totalStops + " stops total";

  var allDetails = {
    from: origin,
    to: destination,
    tripInfo: result
  }

  return allDetails;
}

function display(startStation, endStation) {
  var showResult = tripPlanner(startStation, endStation);
  console.log("origin: " + showResult.from);
  console.log("destination: " + showResult.to);
  console.log("\n");
  console.log(showResult.tripInfo);
}

display("Flinders Street", "Glenferrie");
display("Flinders Street", "Richmond");
display("Flinders Street", "Flagstaff");
display("Flinders Street", "Tooronga");
display("Flagstaff", "Parliament");
display("Melbourne Central", "Flagstaff");
display("Windsor", "South Yarra");
display("Tooronga", "Flagstaff");
display("Tooronga", "Southern Cross");
display("Tooronga", "Glenferrie");
display("Richmond", "Richmond");