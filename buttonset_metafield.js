window.CMB2 = (function(window, document, $, undefined){
	'use strict';
    $(".cmb2-buttonset-label").click(function(){
        var parent = $(this).parents('.cmb2-buttonset');
        $('.cmb2-buttonset-label',parent).removeClass('selected');
        $(this).addClass('selected');
    });

})(window, document, jQuery);
