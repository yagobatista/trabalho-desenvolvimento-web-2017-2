$(document).on("click", "#btn-salvar", function(){
  var nome = $("#nome").val();
  if (nome=="") {
    $("#fbRemove").removeClass("hide");
    $("#fbHasError").addClass("has-error");
  }
  else {
    var linha = "<tr>";
    linha += '<td>'+nome+'</td>';
    linha += '<td><a href="#" class="btn btn-primary btn-sm lista1">Mover</a></td>';
    linha += '</tr>';
    $(linha).hide().appendTo("#tab1 tbody").fadeIn();
  }
});
$(document).on("click", ".lista1", function(){
  var linha = $(this).parent();
  var nome = linha.siblings().html();
  var linha = "<tr>";
  linha += '<td>'+nome+'</td>';
  linha += '<td><a class="btn btn-primary btn-sm lista2">Remover</a></td>';
  linha += '</tr>';
  $(this).parent().parent().fadeOut().remove();

  $(linha).hide().appendTo("#tab2 tbody").fadeIn();
});
$(document).on("click", ".lista2", function(){
  $(this).parent().parent().fadeOut().remove();
});
$(document).on("keypress", "#nome", function(){
    $("#fbRemove").addClass("hide");
    $("#fbHasError").removeClass("has-error");
});
