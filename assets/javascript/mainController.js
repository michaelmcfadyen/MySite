angular.module('app', []).controller('gitController', function($scope, $http, $interval) {
	$scope.gitDetails = [];
	$scope.numberOfGitReposToDisplay = 6;
	$scope.visibleGitProject = "";

	$scope.ajaxPeriodicCall = function(){
		$http.get("https://api.github.com/users/michaelmcfadyen/repos?type=all&sort=updated&access_token=0bc16faa59f4793d3f080bbe87e96216aefae0e2").success(
    		function(response){
    			var gitDetails = [];
    			for(var i = 0; i < response.length; i++){
    				var project = response[i];
    				var commitsUrl = project.commits_url.replace("{/sha}", "/");
    				var getCommits = commitsUrl + project.default_branch;

    				$http.get(getCommits + "?access_token=0bc16faa59f4793d3f080bbe87e96216aefae0e2").success(
    					function(commitsResponse){
    						var projectName = commitsResponse.url.split("/");
    						gitDetails.push({project: projectName[5], url: commitsResponse.html_url, message: commitsResponse.commit.message, date: commitsResponse.commit.committer.date, stats: commitsResponse.stats});
    					});
    			}
    			$scope.git = response;
    			$scope.gitDetails = gitDetails;
    		});
	}
	$scope.ajaxPeriodicCall();

    $scope.start = function() {
      $scope.stop(); 
      $interval($scope.ajaxPeriodicCall, 120000);
    };

    $scope.stop = function() {
      $interval.cancel();
    };

	$scope.start();

	$scope.$on('$destroy', function() {
    	$scope.stop();
    });

    $scope.skills =['java', 'c', 'python', 'web', 'csharp', 'team'];

    $scope.listClicked = function(project){
    	$scope.visibleGitProject = project;
    }
});