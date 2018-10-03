var app =angular.module('listApp',[]);
app.controller('ItemsController',['$scope',function($scope){
$scope.username="";
$scope.password="";
$scope.systemUser=[{
    key: $scope.systemUser.length + 1,
    username: "aditiro",
    password: "aditiro"
},
{
    key: $scope.systemUser.length + 1,
    username: "shwetana",
    password: "shwetana"
}];
$scope.validateUser=function(){
var keys=[];
var usernames=[];
for(var i=0;i<$scope.systemUser.length;i++){
    keys.push($scope.systemUser.key);
    usernames.push($scope.systemUser.username);
}
var counter=-1;
var userKey=-1;
for(var user in usernames){
    if($scope.systemUser.username == usernames[user]){

            userKey = counter+1;
        
        break;
    }
    else{
        counter++;
    }
    if(userKey!=-1){
        var password = $scope.systemUser[userKey].password;
        if(password != $scope.password){
            //error condition password
        }
        else {
            //goto next page
        }
    }
    else {
        //error condition for user 
    }
}

}
}]);