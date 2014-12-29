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

	$(document).keyup(function(e) {
  	if(e.keyCode==13) {
  		if( $('#add-items').val().length ){
	  		addListItem();
	  	}
	  }
	});


	function addListItem(){
		var list_item = $("<li class='active-item'><i class='fa fa-square-o fa-lg'></i>\n<div>"  + $("#add-items").val() + "\n<i class='fa fa-trash'></i>\n</div></li>");
		$("#list").prepend(list_item);
		$("#list").children().first().mouseenter(function(){
			$(this).children().last().children().show();
		})
		.mouseleave(function(){
			$(this).children().last().children().hide();
		})
		$(".fa-trash").on("click", function(){
			$(this).parent().parent().slideUp(300);
		})

		$("li > i").first().on("click", function(){
			if($(this).hasClass("fa-square-o")) {
				$(this).parent().removeClass("active-item").addClass("completed-item");
				$(this).removeClass("fa-square-o").addClass("fa-check-square-o");
			} else {
				$(this).parent().removeClass("completed-item").addClass("active-item");
				$(this).removeClass("fa-check-square-o").addClass("fa-square-o");
			}
		});
		$("#add-items").val('');
	}

});	