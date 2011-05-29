var soundCloudId  = '04df9516bbfee46412635475e23944f6';
var musicMetricId = 'a690d6c4892111e0ba8f00163e499d92';
var score  = 0;
var scores = [];
var bodies = [];

function mean(array){
	var mean = 0;
	for(i = 0; i < array.length; i ++){
		mean += array[i];
	};
	return(Math.round(mean/array.length));
}

jQuery(function($) {
	SC.initialize({ client_id: soundCloudId });
	SC.get('/tracks?limit=2&order=hotness', function(tracks){
		for(i = 0; i < 2; i++){
			jQuery('#tracks').append('<div class = "track"><p class = "meta">' + tracks[i].title + '</p><p class="sentiment"></p>');
			SC.get('/tracks/' + tracks[i].id + '/comments', function(comments){
				for(j = 0; j < comments.length; j++){
					bodies.push(comments[j].body);
					jQuery.post('http://apib2.semetric.com/sentiment?token=' + musicMetricId, comments[j].body, function(result){
						scores.push(result.response.score);
						$('p.sentiment').html(mean(scores) + ' out of ' + scores.length + ' comments');
					});
				};
			});
			jQuery('#tracks').append('</div>');
		};
	});
});
