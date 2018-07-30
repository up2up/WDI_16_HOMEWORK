window.onload = function () {
  var cat = document.querySelector('#city-type');
  loadCat(cat);
}

const loadCat = cat => {
  var e = cat
  cities = ['NYC', 'SF', 'LA', 'SYD', 'ATX']
  cities.forEach(city => {
    var tempNode = document.createElement("option");
    tempNode.value = city;
    var textnode = document.createTextNode(city);
    tempNode.appendChild(textnode);
    e.appendChild(tempNode);
  })
};

var cityList = document.querySelector('#city-type')

cityList.addEventListener('change', function (event) {
  if (event.target.value ==="LA" || event.target.value ==="NYC" || event.target.value ==="SF"){
    var img = event.target.value.toLowerCase();
    document.body.style.backgroundImage = `url(images/${img}.jpg)`;
  }
  else if (event.target.value ==="SYD"){
    document.body.style.backgroundImage = "url(images/sydney.jpg)"
  }
  else if (event.target.value ==="ATX"){
    document.body.style.backgroundImage = "url(images/austin.jpg)"
  }
  else {
    document.body.style.backgroundImage = "url(images/citipix_skyline.jpg)"
  }

})