$(function() {
  $("#the-form").submit(function(event) {
    var nameInput = $("#your-name").val();
    console.log($("#your-name").val());
    $("h2#name").text(nameInput);
    event.preventDefault();
  });
});
