$(function() {
  $("#datepicker").datepicker({
    dateFormat: 'dd/mm/yy',
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    nextText: 'Próximo',
    prevText: 'Anterior',
    buttonImage: 'http://jqueryui.com/resources/demos/datepicker/images/calendar.gif',
    buttonImageOnly: true,
    showOn: "button",
    buttonText: 'Calendário'
  });
  $("#datepicker").datepicker().mask("99/99/9999");

  $("#datepicker").keyup(function(e) {
    if (46 == e.keyCode || 8 == e.keyCode || 9 == e.keyCode) { // backspace, 8. tab, 9. del, 46
      var $this = $(this);
      if ($this.val() == "__/__/____")
        $this.val("");
    }
  });
});

$("#btn-salvar").on("click", function(e) {


});

function dataValida(valor) {
  var dd;
  var mm;
  var yy;

  var dateformat = "^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$";

  // Match the date format through regular expression
  if (valor.match(dateformat)) {
    var opera1 = valor.split('/');
    lopera1 = opera1.length;
    if (lopera1 > 1) {
      var pdate = valor.split('/');
    }

    dd = parseInt(pdate[0]);
    mm = parseInt(pdate[1]);
    yy = parseInt(pdate[2]);

    var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (mm < 1 || mm > 12) {
      return false;
    } else if (mm == 1 || mm > 2) {
      if (dd > ListofDays[mm - 1]) {
        return false;
      }
    } else if (mm == 2) {
      var bissexto = false;
      if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
        bissexto = true;
      }
      if ((bissexto == false) && (dd >= 29)) {
        return false;
      }
      if ((bissexto == true) && (dd > 29)) {
        return false;
      }
    } else {
      return false;
    }

    if (yy <= 1900) {
      return false;
    }
  } else {
    return false;
  }
  return true;
}
$(document).ready(function() {
  $("#btn-salvar").on('click', function() {
    //alert($("#selectMany").is(":selected"));
    if ($("#nome").val() == "") {
      $("#nomeHasError").addClass("has-error");
    }
    if ($("#datepicker").val() == "") {
      $("#dataNascHasError").addClass("has-error");
    }
    if ($("input[type=checkbox]").is(":checked") == false) {
      $("#checkboxHasError").addClass("has-error");
    }
    if ($("input[name='sexo']").is(":checked") == false) {
      $("#sexoHasError").addClass("has-error");
    }
    if ($("#selectMany").val() == null) {
      $("#selectManyHasError").addClass("has-error");
    }
    if ($("#selectOne").val() == "") {
      $("#selectOneHasError").addClass("has-error");
    }
    if ($("#observacao").val() == "") {
      $("#observacaoHasError").addClass("has-error");
    }

    if ($("#nome").val() != "") {
      console.log('nome: ' + $("#nome").val());
    }

    if ($("#datepicker").val() != "") {
      console.log('data de nas: ' + $("#datepicker").val());
    }

    if ($("#checkboxa").is(":checked") == true) {
      console.log('check box selecionado: ' + $("#checkboxa").val());
    }

    if ($("#checkboxb").is(":checked") == true) {
      console.log('check box selecionado: ' + $("#checkboxb").val());
    }

    if ($("input[name='sexo']").is(":checked") == true) {
      console.log('sexo: ' + $("input[name='sexo']").val());
    }

    if ($("#selectMany").val() != null) {
      console.log('opções selecionadas: ' + $("#selectMany").val());
    }

    if ($("#selectOne").val() != "") {
      console.log('opção selecionada: ' + $("#selectOne").val());
    }

    if ($("#observacao").val() != "") {
      console.log('observação: ' + $("#observacao").val());
    }

    console.log();
  });
  $(document).on('keyup', "#nome", function() {
    if ($("#nome").val() != "") {
      $("#nomeHasError").removeClass("has-error");
    }
  });
  $(document).on('change', "#datepicker", function() {
    if ($("#datepicker").val() != "") {
      $("#dataNascHasError").removeClass("has-error");
    }
  });
  $(document).on('keydown', "#datepicker", function(e) {
    var code = e.keyCode || e.which;
    if (code == '9') {
      if (dataValida($("#datepicker").val()) == false) {
        $("#dataNascHasError").addClass("has-error");
      }
    }
  });
  $(document).on('change', "input[type=checkbox]", function() {
    if ($("input[type=checkbox]").is(":checked") == true) {
      $("#checkboxHasError").removeClass("has-error");
    }
  });
  $(document).on('change', "input[name='sexo']", function() {
    if ($("input[name='sexo']").is(":checked") == true) {
      $("#sexoHasError").removeClass("has-error");
    }
  });
  $(document).on('change', "#selectMany", function() {
    if ($("#selectMany").val() != null) {
      $("#selectManyHasError").removeClass("has-error");
    }
  });
  $(document).on('change', "#selectOne", function() {
    if ($("#selectOne").val() != "") {
      $("#selectOneHasError").removeClass("has-error");
    }
  });

  $(document).on('keyup', "#observacao", function() {
    if ($("#observacao").val() != "") {
      $("#observacaoHasError").removeClass("has-error");
    }
  });
});
