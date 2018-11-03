// Initialize Firebase
var config = {
  apiKey: "AIzaSyDIBDzFGtEmqaKtSwJIbnAdZXjzcC6lJmo",
  authDomain: "employeetracker-200c8.firebaseapp.com",
  databaseURL: "https://employeetracker-200c8.firebaseio.com",
  projectId: "employeetracker-200c8",
  storageBucket: "employeetracker-200c8.appspot.com",
  messagingSenderId: "607998061681"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// setting javascript variables
var employeeNamejs = "";
var rolejs = "";
var startDatejs = "";
var monthlyRatejs = 0;

// setting DB values 
database.ref().set({
    employeeNameDB: employeeNamejs,
    roleDB: rolejs,
    startDateDB: startDatejs,
    monthlyRateDB: monthlyRatejs
  });