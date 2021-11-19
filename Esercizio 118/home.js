

function showProductId () {
    let ProductId = 12345;

    function fix (){
        let ProductId = 45678;
        console.log ( 'in fix: ', ProductId);
    }
    fix();

    console.log('in showProductId: ', ProductId)
}

showProductId();