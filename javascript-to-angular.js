

//  In Javascript 

var onDrillData="";
function myJS(data){
  onDrillData=data;
   var scope = angular.element(
     document.getElementById("customDrill")).scope();
   scope.$apply(function() {
       if (typeof(ondrill) == 'function') {
         alert("going initialize");
         ondrill();
       }
   });
}

// End Javscript 

// In Angular 




  var initializeonDrill = function() {
        $scope.onDrillEvent();
    }
    //initialize();
  window.ondrill = initializeonDrill;

    $scope.searchParam=false;
    // On drill functions on the graph click or tap actions
    $scope.onDrillEvent= function (){
      console.log(onDrillData);
    }


// End in angular 


