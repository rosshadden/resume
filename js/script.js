(function(Modernizr,$,template,undefined){
	
	$.get('views/resume.html',function(page){
		$.getJSON('js/json/resume.json',function(resume){
			$('#main').html(template.compile(page)(resume));
		});
	});
	
})(Modernizr,jQuery,Handlebars);

