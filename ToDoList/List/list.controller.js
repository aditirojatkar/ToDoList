var app =angular.module('myApp',[]);
app.controller('ItemsController',['$scope',function($scope){
    $scope.newItemName="";
    $scope.items=[];
    $scope.itemIndex=-1;
    $scope.isUpdateModal=false;
    var modal = document.getElementById('myModal');
    $scope.addItem = function (index,titleValue) {
        // console.log(index);
        // var key = Object.keys($scope.items)[index];
        // console.log(key);
        //if(key == undefined){
            $scope.items.push({
                id: $scope.items.length + 1,
                title: $scope.newItemName
            });
        //}
        // else {
        //     $scope.items.splice(index,1,{
        //         id: index,
        //         title:titleValue
        //     });
        // }
    }

    $scope.deleteItem = function (index) {
        $scope.items.splice(index, 1);
    }

    $scope.updateItem = function (index) {
        debugger;
        $scope.isUpdateModal = true;
        $scope.itemIndex = index;
        
        var key = Object.keys($scope.items)[index];
        $scope.newItemName = $scope.items[key].title;

        modal.style.display = "block";
        var span = document.getElementsByClassName("close")[1];

        // var saveButton = document.getElementById('save-button');

        // saveButton.onclick = function(index){
        //     $scope.addItem(index,$scope.newItemName);
        // }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    }

    var updateButton = document.getElementById('update-button');
        updateButton.onclick=function(){
            $scope.items.splice($scope.itemIndex,1,{
                        id: $scope.itemIndex,
                        title:$scope.newItemName
                    });
                modal.style.display="none";
        }

        $scope.setItemNameEmpty = function() {
            $scope.newItemName="";
        }

}]);