var userSelect = prompt(
  " Zəhmət olmasa hansı fiquru seçmək istədiyinizi qeyd edin: 1-Dairə ya 2-Kvadrat"
);

if (userSelect == 1) {
  var radius = prompt("Zəhmət olmasa dairənin radiusun daxil edin");
  var Area = Math.pow(radius, 2) * Math.PI;
  alert(Area);
  document.getElementById('area').innerHTML = "Dairənin sahəsi  "+ Math.round(Area) + "<span> m <sup> 2 </sup> -dir </span>";
}
 else if (userSelect == 2 ){
  var teref = prompt('Zəhmət olmasa kvadratın tərəfini daxil edin')
  if (teref!=null) {
    var Area = Math.pow(teref,2);
    document.getElementById('area').innerHTML = "Kvadratın sahəsi  "+ Math.round(Area) + "<span> m <sup> 2 </sup> -dir </span>";
    
  }
  else{
    alert("Input Can no be empty!")
  }

 }