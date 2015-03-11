function displayTweet(tweet, location) {
  console.log(tweet);
  var $tweet = $('<li class="tweet"></li>');
  $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + moment(tweet.created_at).fromNow());
  $tweet.appendTo(location);
}

function displayAll(location) {
  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    displayTweet(tweet, location);
    index -= 1;
  }
}

$(document).ready(function(){
  var $tweetList = $('.tweetList');
  //$body.html('');

  displayAll($tweetList);

  $('.updateButton').on('click', function() {
    $tweetList.html('<ul></ul>');
    displayAll($tweetList);
  });


});