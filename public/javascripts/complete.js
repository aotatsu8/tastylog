// 現在ブラウザバックできてしまう、修正必要だが原因がわかっていない。
var window_onpopstate = function(event){
    history.pushState(null, null, null);
};

var document_onready = function(event){
    history.pushState(null, null, null);
    $(window).on("popstate", window_onpopstate);
};

$(document).ready(document_onready);