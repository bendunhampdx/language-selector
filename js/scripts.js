$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const A = $("input:radio[name=drink]:checked").val();

    const B = $("input:radio[name=cheetos]:checked").val();

    const C = $("input:radio[name=sex]:checked").val();

    const D = $("input:radio[name=aliens]:checked").val();

    const E = $("input:radio[name=limbs]:checked").val();


   

    if (A === 'coffee' && B === 'regular' && C === 'yes' && (D === 'yes' || D === 'no')) {
      $("#match").show();
      $(".person1").text("C#").show();
    } 
    else if (A === 'tea' && B === 'flaming' && C === 'no' && (D === 'yes' || D === 'no')) {
      $("#match").show();
      $(".person1").text("JavaScript!").show();
    }
    else {
      $("#match").show();
      $(".person1").text("Sorry, keep trying").show();
    }
  });
});