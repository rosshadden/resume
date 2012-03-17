(function(Modernizr,$,template,undefined){
	
	$.get('views/resume.html',function(page){
		$.getJSON('js/json/resume.json',function(resume){
			var $html = $(template.compile(page)(resume));
			
			$html
				.find('.key').append(':').each(function(k,key){
					var $key = $(key),
						salutation = {
							true:	'}',
							false:	'},'
						};
					
					if($key.next().length === 0){
						$key.append(' {').closest('section').append(
							$key.parent().clone().children().text(salutation[$key.closest('section').is(':last-of-type')]).end()
						);
					}
				}).end()
				.find('.string').prepend("'").append("'").end()
				.find('section:not(:has(section))').find('.string:not(":last")').append(',');

			$('#main').html($html);
		});
	});
	
})(Modernizr,jQuery,Handlebars);

