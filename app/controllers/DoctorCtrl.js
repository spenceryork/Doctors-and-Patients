"use strict";

angular.module("doctorsAndPatients").controller("DoctorCtrl", function(FbFactory, $scope){

    FbFactory.getDoctors()
    .then( (doctors) => {
        console.log("FB Doctor data", doctors);
        //For loop not needed, had to change the data structure to use index on in firebase.
        // let doctorArr = [];
        // for (let i = 0; i < doctors.length; i++) {
        //     let doctorName = Object.values(doctors[i]);
        //     // doctorArr.push(doctors[i].first_name);
        //     console.log("Doctor Name", doctorName);
        //     doctorArr.push(doctorName);
        //     console.log("doctorArr", doctorArr);
        // }
        $scope.doctors = doctors;
    });

});