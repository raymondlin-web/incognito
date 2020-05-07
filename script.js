var follow = document.getElementsByClassName("follow")
document.onmousemove = function() {
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";
  for(var i=0;i<2;1++)
    follow[i].style.left = x;
    follow[i].style.top = y;
    follow[i].style.transform = "translate(-"+x+",-"+y+")"
  }
}
