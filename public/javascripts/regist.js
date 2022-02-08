var btnSubmit_onclink = function(event){
    var $submit = $(this);
    var $form = $submit.parents("form");
    $form.attr("method", $submit.data("method"));
    $form.attr("action", $submit.data("action"));
    $form.submit();
    $submit.off().prop("disabled", true);
    $form.on("submit", false);
};

var document_onready = function(event){
    $("input[type='submit']").on("click", btnSubmit_onclink);
};

$(document).ready(document_onready);