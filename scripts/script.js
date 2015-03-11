function displayTweet(tweet, location) {
  var $tweet = $('<li class="tweet">' + '@' + '<span class="user">' + tweet.user + '</span>' + ': ' + tweet.message + ' ' + '<span class="timestamp">' + moment(tweet.created_at).fromNow() + '</span>' + '</li>');
  //$tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + moment(tweet.created_at).fromNow());
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

function displayTimeline(user, location) {
  $('h2').text("All tweets from " + user);
  var index = streams.users[user].length - 1;
  while (index >= 0) {
    var tweet = streams.users[user][index];
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

  $('.user').on('click', function() {
    var user = $(this).text();
    $tweetList.html('<ul></ul>');
    displayTimeline(user, $tweetList);
  });

});