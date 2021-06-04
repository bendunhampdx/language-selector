$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const drink = $("input:radio[name=drink]:checked").val();

    const cheetos = $("input:radio[name=cheetos]:checked").val();

    const sex = $("input:radio[name=sex]:checked").val();

    const aliens = $("input:radio[name=aliens]:checked").val();

    const limbs = $("input:radio[name=limbs]:checked").val();

    const person1Input = $("input#person1").val();
   
    $(".person1").text(person1Input);

    if (drink === 'coffee' && cheetos === 'regular' && sex === 'yes' && (aliens === 'yes' || aliens === 'no')) {
      $("#match").show();
      $(".lang").text("C#").show();
    } 
    else if (drink === 'coffee' && cheetos === 'flaming' && sex === 'no' && aliens === 'yes' && limbs === 'feet' ) {
      $("#match").show();
      $(".lang").text("C#").show();
    }
    else if (drink === 'tea' && cheetos === 'flaming' && sex === 'no' && limbs === 'hands' && (aliens === 'yes' || aliens === 'no')) {
      $("#match").show();
      $(".lang").text("JavaScript").show();
    }
    else if (drink === 'coffee' && cheetos === 'flaming' && sex === 'yes' && aliens === 'yes' && limbs === 'feet') {
      $("#match").show();
      $(".lang").text("Ruby").show();
    }
    else if (drink === 'tea' && cheetos === 'regular' && sex === 'no' && aliens === 'yes' && limbs === 'feet') {
      $("#match").show();
      $(".lang").text("Ruby").show();
    }
    else if (drink === 'tea' && cheetos === 'regular' && sex === 'no' && aliens === 'no' && limbs === 'hands') {
      $("#match").show();
      $(".lang").text("Python").show();
    }
    else if (drink === 'tea' && cheetos === 'regular' && sex === 'yes' && aliens === 'yes' && limbs === 'hands') {
      $("#match").show();
      $(".lang").text("Python").show();
    }
    else if (drink === 'tea' && cheetos === 'regular' && sex === 'yes' && aliens === 'no' && limbs === 'feet') {
      $("#match").show();
      $(".lang").text("Rust").show();
    }
    else {
      $("#match").show();
      $(".lang").text("Swift").show();
    }
  });
});