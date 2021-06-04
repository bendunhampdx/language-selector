$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    $("btn").click(function(){
      $("#match").fadeIn("slow");
    });


    const drink = $("input:radio[name=drink]:checked").val();

    const cheetos = $("input:radio[name=cheetos]:checked").val();

    const sex = $("input:radio[name=sex]:checked").val();

    const aliens = $("input:radio[name=aliens]:checked").val();

    const limbs = $("input:radio[name=limbs]:checked").val();

    const person1Input = $("input#person1").val();
   
    $(".person1").text(person1Input);

    if (drink === 'coffee' && cheetos === 'regular' && sex === 'yes' && (aliens === 'yes' || aliens === 'no')) {
      $("#match").fadeIn("slow");
      $(".lang").text("C#").show();
    } 
    else if (drink === 'coffee' && cheetos === 'flaming' && sex === 'no' && aliens === 'yes' && limbs === 'feet' ) {
      $("#match").fadeIn("slow");
      $(".lang").text("C#").show();
    }
    else if (drink === 'tea' && cheetos === 'flaming' && sex === 'no' && limbs === 'hands' && (aliens === 'yes' || aliens === 'no')) {
      $("#match").fadeIn("slow");
      $(".lang").text("JavaScript").show();
    }
    else if (drink === 'coffee' && cheetos === 'flaming' && sex === 'yes' && aliens === 'yes' && limbs === 'feet') {
      $("#match").fadeIn("slow");
      $(".lang").text("Ruby").show();
    }
    else if (drink === 'tea' && cheetos === 'regular' && sex === 'no' && aliens === 'yes' && limbs === 'feet') {
      $("#match").fadeIn("slow");
      $(".lang").text("Ruby").show();
    }
    else if (drink === 'tea' && cheetos === 'regular' && sex === 'no' && aliens === 'no' && limbs === 'hands') {
      $("#match").fadeIn("slow");
      $(".lang").text("Python").show();
    }
    else if (drink === 'tea' && cheetos === 'regular' && sex === 'yes' && aliens === 'yes' && limbs === 'hands') {
      $("#match").fadeIn("slow");
      $(".lang").text("Python").show();
    }
    else if (drink === 'tea' && cheetos === 'regular' && sex === 'yes' && aliens === 'no' && limbs === 'feet') {
      $("#match").fadeIn("slow");
      $(".lang").text("Rust").show();
    }
    else {
      $("#match").fadeIn("slow");
      $(".lang").text("Swift").show();
    }
    $("#formOne")[0].reset();
  });
});
