window.onload = function(){
    render()
}

const firebaseConfig = {
    apiKey: "AIzaSyBjS86Z3w5YTycUdcdSBNU1j5X2sWZtyK8",
    authDomain: "verification-571d9.firebaseapp.com",
    projectId: "verification-571d9",
    storageBucket: "verification-571d9.appspot.com",
    messagingSenderId: "667853277263",
    appId: "1:667853277263:web:80ee5f573526b27572823a"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container'), {
    };
    recaptchaVerifier.render()    
    }
    function login(){
        var mobile = document.getElementById("mobilenum").value 
        var number = "+91 "+mobile;
        // console.log(number)
        if(mobile.length < 10){
          window.alert("Enter Correct Mobile Number")
        } else{
          firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmResult){
            window.confirmResult = confirmResult;
            coderesult = confirmResult;
            // console.log(coderesult);
      
            var a = document.getElementById("mobileenter")
            a.remove();
      
            document.getElementById("otpenter").style.visibility = "visible";
          }).catch(function(error){
            document.getElementById("error").innerHTML = error.message;
          })
        }
      }
      
      function verify(){
        var otp = document.getElementById("otpvalue").value;
        coderesult.confirm(otp).then(function(result){
          var user = result.user;
          window.location.replace("home.html")
        }).catch(function(error){
          document.getElementById("errorotp").innerHTML = error.message;
        })
      }function login(){
  var mobile = document.getElementById("mobilenum").value 
  var number = "+91 "+mobile;
  // console.log(number)
  if(mobile.length < 10){
    window.alert("Enter Correct Mobile Number")
  } else{
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmResult){
      window.confirmResult = confirmResult;
      coderesult = confirmResult;
    //   console.log(coderesult);

      var a = document.getElementById("mobileenter")
      a.remove();

      document.getElementById("otpenter").style.visibility = "visible";
    }).catch(function(error){
      document.getElementById("error").innerHTML = error.message;
    })
  }
}

function verify(){
  var otp = document.getElementById("otpvalue").value;
  coderesult.confirm(otp).then(function(result){
    var user = result.user;
    window.location.replace("home.html")
  }).catch(function(error){
    document.getElementById("errorotp").innerHTML = error.message;
  })
}
  