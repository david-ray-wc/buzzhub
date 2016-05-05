var editCardButton = $('.edit-content');
var saveCardButton = $('.save-content');

$(document).ready(function () {

  editCardButton.on('click', function(e){
    $(this).parent().addClass('edit-card');
    $(this).hide().next().show();
    e.preventDefault();
    var editor = new MediumEditor('.edit-card');
  });

  saveCardButton.on('click', function(e){
    $(this).parent().removeClass('edit-card').attr('contenteditable', false);
    $(this).hide().prev().show();
    e.preventDefault();
  });

});
