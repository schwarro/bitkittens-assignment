document.addEventListener('DOMContentLoaded', function() {

var summonButton = document.querySelector('button.simmon-cats')

summonButton.addEventListener('click', function(){
  $.ajax({
    url: "http://bitkittens.herokuapp.com/cats.json",
    method: "GET",
    dataType: "JSON"
  }).done(function(responseData) {
    console.log(responseData)
  });

});
