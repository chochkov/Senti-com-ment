var soundCloudId  = '04df9516bbfee46412635475e23944f6';
var musicMetricId = 'a690d6c4892111e0ba8f00163e499d92';
var scores = [];

function mean(array){
	var mean = 0;
	for(i = 0; i < array.length; i ++){
		mean += array[i];
	};
	return(Math.round(mean/array.length*100)/100);
}

jQuery(function($) {
	SC.initialize({ client_id: soundCloudId });
	SC.get('/tracks?limit=1&order=hotness', function(tracks){
		for(i = 0; i < tracks.length; i++){
			scores = [];
			jQuery('#tracks').append('<div class = "track"><p class = "meta"><a href = "' +tracks[i].permalink_url + '">' + tracks[i].title + ' by <span class="username">' + tracks[i].user.username + '</span></a></p><p class="sentiment"></p>');
			SC.get('/tracks/' + tracks[i].id + '/comments', function(comments){
				for(j = 0; j < comments.length; j++){
					var body = comments[j].body.replace(/@\w+:/, '');
					if(body.length < 10){ continue; }
					jQuery.post('http://apib2.semetric.com/sentiment?token=' + musicMetricId, body, function(result){
						scores.push(result.response.score);
						$('p.sentiment').html('Sentiment score ' + mean(scores) + ' from ' + scores.length + ' comments');
					});
				};
			});
			jQuery('#tracks').append('</div>');
		};
	});
});
