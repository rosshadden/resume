(function(Modernizr,$,template,undefined){
	
	$.when($.get('views/resume.html'), $.getJSON('js/json/resume.json')).done(function(page, resume){
		var $html = $(template.compile(page[0])(resume[0])),
			logo = $html.find('#logo').text();
		
		$html
			.find('#logo').text(logo.replace(/\s/g,'_')).end()
			.find('.string').prepend('<span class="punctuation">&lsquo;</span>').append('<span class="punctuation">&rsquo;</span>').end()
			.find('.key').each(function(k,key){
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
				
				if(!/^\w+$/.test($key.text())){
					$key.prepend('<span class="punctuation">&ldquo;</span>').append('<span class="punctuation">&rdquo;</span>');
				}
				
				$key.append('<span class="punctuation">:</span>');
				
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
				
				if($key.next(':not(".array")').children('.row').children('.string').length > 1){
					$key.next(':not(".array")').children('.row').children('.string')
						.not(':last').addClass('visited-comma').end()
						.last().prepend('<span class="operator">&plus;</span>');
				}
			}).end()
			.find('div.array')
				.prepend('<div class="row"><div class="span1 bracket">[</div></div>')
				.append('<div class="row"><div class="span1 bracket">]</div></div>')
			.end()
			.find('section:not(:has(section))').find('.string:not(":last, .visited-comma")').append('<span class="punctuation">,</span>').addClass('visited-comma');

		$('#main').html($html);
	});
	
})(Modernizr,jQuery,Handlebars);

