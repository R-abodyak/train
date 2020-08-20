function validateForm() {

    var email = document.getElementById('exampleInputEmail1').value;
    var pass = document.getElementById('exampleInputPassword1').value;

    //var rgx =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var rgx = /^([a-zA_Z0-9\.-]+)\@([a-z0-9]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    // var rgx=  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //var rgx = /\S+@\S+\.\S+/;
    var x = rgx.test(email);

    if (email == '') {
        document.getElementById("invalid_name1").innerHTML = "you need to enter your email address";

    }
    if (pass == '') {
        document.getElementById("invalid_name2").innerHTML = "you need to enter your password";
        return false
    }
    if (!x) {

        document.getElementById("invalid_name1").innerHTML = "invalid email<br>  remember that email should contain @ and valid domain name ";
        return false;
    } else {

        return true;
    }


};

function hidee() {
    document.getElementById("invalid_name1").innerHTML = "";
    document.getElementById("invalid_name2").innerHTML = "";
}

function showpass() {
    var qq = document.getElementById("exampleInputPassword1");
    if (qq.type === "password") {
        qq.type = "text";
    } else {
        qq.type = "password";
    }

}