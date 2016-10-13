
var app = angular.module("sampleApp", ["firebase","ngMaterial"]);

app.controller("SampleCtrl", function($scope, $firebaseArray) {
    var tweetsRef = new Firebase('https://luminous-torch-6850.firebaseio.com/chatty');

    $scope.parentId = "-1";

    $scope.callHighlight = function(id) {
        $scope.parentId = id;
    };

    $scope.unhighlight = function(){
        $scope.parentId = "-1";
    };

    $scope.tweets = $firebaseArray(tweetsRef);
    
    var query = tweetsRef.limitToLast(5);
   
    $scope.filteredTweets = $firebaseArray(query);

    $scope.sendTweet = function(){
        $scope.filteredTweets.$add({
            message: $scope.tweet.message,
            sender: $scope.tweet.user,
            timeStamp: new Date()
        });
        
    };

    $scope.clearfunction=function(event){
        event.tweet.user=null;
        event.tweet.message=null;
    }

});

