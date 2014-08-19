  
  var tweetText = $(".tweet-text");

  tweetText.each(function() {
	var newText = "";
	var currentText = $(this).text();
	if(currentText.length < 4) {
		newText = "8=D";
	} else {
		newText = "8" + Array(currentText.length-1).join("=") + "D";
	}
    $(this).text(newText);
  });
  
  $('.js-media-container').html('');