function getSecretCode(value) {

    let code = value * 42;
    return code;
}
let getSecretCode= getSecretCode (2);
showMessage ( getSecretCode(2) );