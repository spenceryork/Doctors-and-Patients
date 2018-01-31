"use strict";

angular.module("doctorsAndPatients").controller("DoctorCtrl", function(FbFactory, $scope){

    FbFactory.getDoctors()
    .then( (doctors) => {
        console.log("FB Doctor data", doctors);
        let doctorArr = [];
        for (let i = 0; i < doctors.length; i++) {
            let doctorName = Object.values(doctors[i]);
            // doctorArr.push(doctors[i].first_name);
            console.log("Doctor Name", doctorName);
            doctorArr.push(doctorName[0]);
        }
        $scope.doctors = doctorArr;
    });

});