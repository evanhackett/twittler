function displayTweet(tweet, location) {
  var $tweet = $('<li class="tweet">' + '@' + '<span class="user">' + tweet.user + '</span>' + ': ' + tweet.message + ' ' + '<span class="timestamp">' + moment(tweet.created_at).fromNow() + '</span>' + '</li>');
  $tweet.appendTo(location);
}

function displayAll(location) {
  $('h2').text("All tweets");
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

function addClickHandler($tweetList) {
  $('.user').on('click', function() {
    var user = $(this).text();
    $tweetList.html('<ul class="tweetList"></ul>');
    displayTimeline(user, $tweetList);
  });
}

$(document).ready(function(){
  var $tweetList = $('.tweetList');

  displayAll($tweetList);

  $('.updateButton').on('click', function() {
    $tweetList.html('<ul class="tweetList"></ul>');
    displayAll($tweetList);
    addClickHandler($tweetList);
  });

  addClickHandler($tweetList);

});