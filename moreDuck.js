function moreDuck(){
    var duckPic = document.getElementById('duckPic').innerHTML;
    var duckPicClone = document.createElement('per');
    duckPicClone.innerHTML = duckPic;
    document.getElementById('duckPic').appendChild(duckPicClone);
  }