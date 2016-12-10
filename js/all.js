$(document).ready(function(){
	$("#localtxt").change(function() {
		    localStorage.setItem('users', $("#localtxt").val());
		 });
		var user = localStorage.getItem('users');
		if (localStorage.getItem('users')) {
			
		    $("#localtxt").val(user);

		};

	    
		   
});
   
		