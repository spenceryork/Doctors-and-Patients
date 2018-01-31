"use strict";

angular.module("doctorsAndPatients", ["ngRoute"])
.constant("FBUrl", "https://angular-fecd8.firebaseio.com/doctors")
.config( ($routeProvider) => {
    $routeProvider
    .when("/", {
        templateUrl:"partials/doctorsView.html",
        controller: "DoctorCtrl"
    })
    .when("/:doctor", {
        templateUrl: "partials/patientView.html",
        controller: "PatientCtrl"
    })
    .otherwise("/");
});
// .run(FBCreds => {
//     let creds = FBCreds;
//     let authConfig = {
//         apiKey: creds.key,
//         authDomain: creds.authDomain
//     };
//     firebase.initializeApp(authConfig);
// });