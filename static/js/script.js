$(document).ready(function(){
	console.log("ready")
	$('#content button').click(function(){
		if ($(this).attr('id') != 'enter') {
			ninja = $(this).attr('name');
			console.log(ninja)
			$.getJSON("/post/" + ninja, function(data){
				console.log(data);
				$('img').attr('src', "../static/images/"+data.name+".jpg")
				$('#ninja').toggle(true)
				$('#ninja_name').html("You chose "+data.name)

			})
		}	
	})
	$('#enter').click(function(){
		ninja = $('#choose').val();
		console.log(ninja);
		if (ninja != 'blue' && ninja != 'red' && ninja != 'purple' && ninja != 'orange'){
			$('#ninja').html(
				`
				<h2 id="ninja_name">"There's no ninja in that color!"<h2>
				<img src="../static/images/notapril.jpg" alt="bad route">
				`
				)
			$('#ninja').toggle(true)
		}
		else {
			console.log(ninja)
			$.getJSON("/post/" + ninja, function(data){
				console.log(data);
				$('img').attr('src', "../static/images/"+data.name+".jpg")
				$('#ninja').toggle(true)
				$('#ninja_name').html("You chose "+data.name)
			})
		}
	})
})