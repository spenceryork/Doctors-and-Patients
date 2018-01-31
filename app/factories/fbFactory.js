"use strict";

angular.module("doctorsAndPatients").factory("FbFactory", function(FBUrl, $http, $q){

    function getDoctors() {
        return $q( (resolve, reject) => {
           $http
           .get(`${FBUrl}/doctors.json`)
           .then( (data) => {
               let doctorsData = data.data;
            //    doctors
               resolve(doctorsData);
           })
           .catch( (error) => {
                console.log("error", error);
                reject(error);
           });
        });
    }

    function getPatients() {
        return $q( (resolve, reject) => {
           $http
           .get(`${FBUrl}/patients.json?orderBy="patients"&equalTo="doctor_id"`)
           .then( (data) => {
               resolve(data);
           })
           .catch( (error) => {
                console.log("error", error);
                reject(error);
           });
        });
    }

    return { getDoctors, getPatients };

});