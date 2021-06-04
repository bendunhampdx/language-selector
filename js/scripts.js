$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const drink = $("input:radio[name=drink]:checked").val();

    const cheetos = $("input:radio[name=cheetos]:checked").val();

    const sex = $("input:radio[name=sex]:checked").val();

    const aliens = $("input:radio[name=aliens]:checked").val();

    const limbs = $("input:radio[name=limbs]:checked").val();


   

    if (drink === 'coffee' && cheetos === 'regular' && sex === 'yes' && (aliens === 'yes' || aliens === 'no')) {
      $("#match").show();
      $(".person1").text("C#").show();
    } 
    else if (drink === 'coffee' && cheetos === 'flaming' && sex === 'no' && aliens === 'yes' && limbs === 'feet' ) {
      $("#match").show();
      $(".person1").text("C#").show();
    }
    else if (drink === 'tea' && cheetos === 'flaming' && sex === 'no' && (aliens === 'yes' || aliens === 'no')) {
      $("#match").show();
      $(".person1").text("JavaScript").show();
    }
    else if (drink === 'coffee' && cheetos === 'flaming' && sex === 'yes' && aliens === 'yes' && limbs === 'feet') {
      $("#match").show();
      $(".person1").text("Ruby").show();
    }
    else if (drink === 'tea' && cheetos === 'regular' && sex === 'no' && aliens === 'no' && limbs === 'hands') {
      $("#match").show();
      $(".person1").text("Python").show();
    }
    else if (drink === 'tea' && cheetos === 'regular' && sex === 'yes' && aliens === 'no' && limbs === 'feet') {
      $("#match").show();
      $(".person1").text("Rust").show();
    }
    else {
      $("#match").show();
      $(".person1").text("Swift").show();
    }
  });
});