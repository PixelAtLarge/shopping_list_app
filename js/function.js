$(document).ready(function() {	
	$('li').mouseenter(function(){
		$(this).children().last().children().show();
	})
	.mouseleave(function(){
		$(this).children().last().children().hide();
	})
	$(".fa-trash").on("click", function(){
		$(this).parent().parent().slideUp(300);
	})

	$("li > i").on("click", function(){
		if($(this).hasClass("fa-square-o")) {
			$(this).parent().removeClass("active-item").addClass("completed-item");
			$(this).removeClass("fa-square-o").addClass("fa-check-square-o");
		} else {
			$(this).parent().removeClass("completed-item").addClass("active-item");
			$(this).removeClass("fa-check-square-o").addClass("fa-square-o");
		}
	});
});	