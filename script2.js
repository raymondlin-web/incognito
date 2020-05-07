function getIP(json) {
  var address = document.createElement('p')
  address.appendChild(document.createTextNode('My public IP address is: ', json.ip));
}
