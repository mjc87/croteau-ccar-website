var app = angular.module('insertEmail', []);
app.controller('emailCtrl', function($scope, $sce) {
	var hostname = "colorado.edu";
	var linkcroteau = "michael.croteau" + "@" + hostname ;
	$scope.insertEmailHere =  $sce.trustAsHtml("<a href='" + "mail" + "to:" + linkcroteau + "'>" + linkcroteau + "</a>");
});
