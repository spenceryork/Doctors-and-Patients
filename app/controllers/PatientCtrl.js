"use strict";

angular.module("doctorsAndPatients").controller("PatientCtrl", function($scope, FbFactory, $routeParams){
    let doctorName = $routeParams.doctor;
    console.log("what is route params?", doctorName);
    FbFactory.getPatients(doctorName)
    .then( (patients) => {
        console.log("Patients", patients);
        $scope.patients = patients.data;
    });
});