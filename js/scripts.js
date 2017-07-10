$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var topic1Input = $("#topic1").val();
    $("#form2").show();
    $("#form1").hide();
    $(".topic1").append(topic1Input);
  });
  $("#form2").submit(function(event) {
    event.preventDefault();
    var list1Input = $("ul#list1").val();
    $(".list1").show();
    $(".list1").append(list1Input);
  });
});
