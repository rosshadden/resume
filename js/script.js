(function(Modernizr,$,template,undefined){
	
	$.get('views/resume.html',function(page){
		$.getJSON('js/json/resume.json',function(resume){
			var $html = $(template.compile(page)(resume));
			
			log($html);
			
			$html
				.find('.key').append(':').each(function(k,key){
					if($(key).next().length === 0){
						$(key).append(' {');
					}
				}).end()
				.find('.string').prepend("'").append("'").end()
				.find('address,section:not(:has(section))').find('.string:not(":last")').append(',');

			$('#main').html($html);
		});
	});
	
})(Modernizr,jQuery,Handlebars);

