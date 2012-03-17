(function(Modernizr,$,template,undefined){
	
	$.get('views/resume.html',function(page){
		$.getJSON('js/json/resume.json',function(resume){
			var $html = $(template.compile(page)(resume));
			
			$html
				.find('.key').append(':').each(function(k,key){
					var $key = $(key),
						$section = $key.closest('section'),
						salutation = {
							'array':	{
								true:	']',
								false:	'],'
							},
							'object':	{
								true:	'}',
								false:	'},'
							}
						};
					
					if($key.next().length === 0){
						$key.append('<span class="bracket">' + (($section.hasClass('array')) ? ' [' : ' {') + '</span>');
						
						$section.append(
							$key.parent().clone().children().html(
								'<span class="bracket">'
									+(salutation[($section.hasClass('array')) ? 'array' : 'object'][$section.is(':last-of-type')])
								+'</span>'
							).end()
						);
					}
				}).end()
				.find('div.array')
					.prepend('<div class="row"><div class="span1 bracket">[</div></div>')
					.append('<div class="row"><div class="span1 bracket">]</div></div>')
				.end()
				.find('.string').prepend("'").append("'").end()
				.find('section:not(:has(section))').find('.string:not(":last")').append(',');

			$('#main').html($html);
		});
	});
	
})(Modernizr,jQuery,Handlebars);

