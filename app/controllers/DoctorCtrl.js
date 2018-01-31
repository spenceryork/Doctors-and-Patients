"use strict";

angular.module("doctorsAndPatients").controller("DoctorCtrl", function(FbFactory, $scope){

    FbFactory.getDoctors()
    .then( (doctors) => {
        console.log("FB Doctor data", doctors);
        $scope.doctors = "";
    });

});