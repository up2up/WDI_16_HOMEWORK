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
      line1Stops = line1.slice(line1.indexOf(startStop), line1.indexOf("Richmond") + 1);
      line2Stops = line2.slice(line2.indexOf(endStop), line2.indexOf("Richmond")).reverse();
      newTrip = line1Stops.concat(line2Stops);
    }
    else if ((line1.indexOf(startStop) > line1.indexOf("Richmond")) && (line2.indexOf(endStop) > line2.indexOf("Richmond"))) {
      line1Stops = line1.slice(line1.indexOf("Richmond"), line1.indexOf(startStop) + 1).reverse();
      line2Stops = line2.slice(line2.indexOf("Richmond") + 1, line2.indexOf(endStop) + 1);
      newTrip = line1Stops.concat(line2Stops);
    }
    else if ((line1.indexOf(startStop) < line1.indexOf("Richmond")) && (line2.indexOf(endStop) > line2.indexOf("Richmond"))) {
      line1Stops = line1.slice(line1.indexOf(startStop), line1.indexOf("Richmond"));
      line2Stops = line2.slice(line2.indexOf("Richmond"), line2.indexOf(endStop) + 1);
      newTrip = line1Stops.concat(line2Stops);
    }
    else {
      line1Stops = line1.slice(line1.indexOf("Richmond"), line1.indexOf(startStop) + 1).reverse();
      line2Stops = line2.slice(line2.indexOf(endStop), line2.indexOf("Richmond")).reverse();
      newTrip = line1Stops.concat(line2Stops);
    }
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

function Display(startStation, endStation) {
  var showResult = tripPlanner(startStation, endStation);
  console.log("origin: "+ showResult.from);
  console.log("destination: "+ showResult.to);
  console.log("\n");
  console.log(showResult.tripInfo);
}

Display("Flinders Street", "Glenferrie");
Display("Flinders Street", "Richmond");
Display("Flinders Street", "Flagstaff");
Display("Flinders Street", "Tooronga");
Display("Flagstaff", "Parliament");
Display("Melbourne Central", "Flagstaff");
Display("Windsor", "South Yarra");
Display("Tooronga", "Flagstaff");
Display("Tooronga", "Southern Cross");
Display("Tooronga", "Glenferrie");
Display("Richmond", "Richmond");