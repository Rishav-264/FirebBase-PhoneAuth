window.onload = function (){
    firebase.auth().languageCode = 'it';
    render();
}

var appVerifier ;

function render(){
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        callback: function(response) {
            phoneAuth();
        }
      });
      appVerifier = window.recaptchaVerifier;
      recaptchaVerifier.render();
}

function phoneAuth(){
    alert('phoneAuth entered');
    var number = "+919051887115";
    firebase.auth().signInWithPhoneNumber(number,recaptchaVerifier).then(function (confirmationResult){
        window.confirmationResult = confirmationResult;
        codeResult = confirmationResult;
        console.log(codeResult);
    }).catch(function(error){
        alert(error);
    })
    alert('Message Sent');
}

function codeVerify(){
    var code = "123456";
    codeResult.confirm(code).then(function(result){
        alert('Succesfully Resgistered.')
        var user = result.user;
        console.log(user);
    }).catch(function(error){
        alert(error);
    })

}