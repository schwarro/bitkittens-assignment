document.addEventListener('DOMContentLoaded', function() {
  $(".summon-cats").click(function(){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'JSON'
    }).done(function(responseData) {
      var data = responseData.cats;
      var catContainer = document.querySelectorAll(".cat-box");

      for (var i = 0; i < data.length; i++) {
        var container = document.createElement("div");
        var image = document.createElement("img");
        image.src = data[i].photo;
        container.append(image);

        catContainer[i].innerHTML = container.innerHTML;
      }
    });
  });
});
