$(document).on("click","#adicao",function(){
  var v1 = $("#valor1").val();
  var v2 = $("#valor2").val();
  var result = parseFloat(v1)+parseFloat(v2);
  $("#resultado").val(result);
});
$(document).on("click","#subitracao",function(){
  var v1 = $("#valor1").val();
  var v2 = $("#valor2").val();
  var result = parseFloat(v1)-parseFloat(v2);
  $("#resultado").val(result);
});
$(document).on("click","#multiplicacao",function(){
  var v1 = $("#valor1").val();
  var v2 = $("#valor2").val();
  var result = parseFloat(v1)*parseFloat(v2);
  $("#resultado").val(result);
});
$(document).on("click","#divisao",function(){
  var v1 = $("#valor1").val();
  var v2 = $("#valor2").val();
  var result = parseFloat(v1)/parseFloat(v2);
  $("#resultado").val(result);
});
$(document).on("click","#limpar",function(){
  $("#resultado").val("");
  $("#valor1").val("");
  $("#valor2").val("");
});
