function getFirstCurrency() {
    let currency = document.getElementById("currencyOne").value;   
    return currency;
}

function getSecondCurrency() {
    let currency = document.getElementById("currencyTwo").value;   
    return currency;
}

function exchange() {
    $.ajax({
        method: 'GET',
        url: 'http://apilayer.net/api/live?access_key=a7d3d4822d2a8b649fbc7de86c93e8d8',
        success: function (data) {                                   
            var firstCurrency = data.quotes['USD'+getFirstCurrency()];
            var secondCurrency = data.quotes['USD'+getSecondCurrency()];
            
            let fir = document.getElementById('firstCurrency').value;
            let res = document.getElementById('resultCurrency');            

            if(fir <= 0) {
                var result = secondCurrency / firstCurrency * 1;
            } else {
                var result = secondCurrency / firstCurrency * fir;
            }
            
            res.value = result.toFixed(5);
        }
    });
}

function rotate() {
    let currency1 = document.querySelector('#currencyOne');
    let currency2 = document.querySelector('#currencyTwo');
    
    let temp = currency1.value;
    currency1.value = currency2.value;
    currency2.value = temp;
}  