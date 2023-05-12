$(document).ready(function(){
    $('.hiddenStep').css('display','none');
    $('button#siguiente').click(function(event){
        event.preventDefault();
        var parent = $(this).closest('.step');
        var mainContent = $('.content>.step');
        var index = mainContent.index(parent)+1;
        parent.css('display','none');
        mainContent.eq(index).css('display','block');
    })
    
})

$(document).ready(function(){
    $('.hiddenStep').css('display','none');    
})

function Enviar() {
        swal({
            title: "Datos enviados",
            text: "Los datos se han enviado correctamente",
            icon: "success",
        })
}

$(function () {
        $('#nombre').keyup(function () {
            $('#opcion1').text($(this).val());
        });
        $('#apellido').keyup(function () {
            $('#opcion2').text($(this).val());
        });
        $('#email').keyup(function () {
            $('#opcion3').text($(this).val());
        });
        $('#telefono').keyup(function () {
            $('#opcion4').text($(this).val());
        });
        $('#comentario').keyup(function () {
            $('#opcion5').text($(this).val());
        });
        $('input:checkbox[name=1]').click(function () {
            if('input:checkbox[name=1]:checked') {
                $('#opcion6').text($('input[name=1]:checked', '#myForm').val());
            }
        });
        $('input:checkbox[name=2]').click(function () {
            if('input:checkbox[name=2]:checked') {
                $('#opcion7').text($('input[name=2]:checked', '#myForm').val());
            }
        });
        $('input:checkbox[name=3]').click(function () {
            if('input:checkbox[name=3]:checked') {
                $('#opcion8').text($('input[name=3]:checked', '#myForm').val());
            }
        });
        $('input:checkbox[name=4]').click(function () {
            if('input:checkbox[name=4]:checked') {
                $('#opcion9').text($('input[name=4]:checked', '#myForm').val());
            }
        });
        $('input:radio[name=5]').click(function () {
            if('input:radio[name=5]:checked') {
                $('#opcion10').text($('input[name=5]:checked', '#myForm').val());
            }
        });
    });
   