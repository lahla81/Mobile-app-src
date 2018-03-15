$(document).ready(function(){
    var wow = new WOW({
        mobile:false
    });
    wow.init();

    // التأكد من صحة حقول الإدخال
    $(function(){
        $("#contact-form").validate();
    });
    
});


