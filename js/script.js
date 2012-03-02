(function(Modernizr,$,template,undefined){
	
	$.get('views/resume.html',function(page){
		$.getJSON('js/json/resume.json',function(resume){
			var $html = $(template.compile(page)(resume));
			
			$html
				.find('.key').append(':').end()
				.find('.string').prepend("'").append("'");
			
			$('#main').html($html);
		});
	});
	
})(Modernizr,jQuery,Handlebars);

