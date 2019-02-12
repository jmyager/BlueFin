// Input variables
let price = 0;
let downpayment = 0;
let income = 0;
let cost = 0;
let maintenance = 0;
let hoa = 0;
let vacancy = 0
// Output variables
let monthlyCashFlow = 0;
let yearlyCashFlow = 0;
let roi = 0;

$(function() { //shorthand document.ready function
    $('#roiForm').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        let data = $("#roiForm :input").serializeArray();
        console.log(data); //use the console for debugging, F12 in Chrome, not alerts
        price = data[0].value;
        downpayment = data[1].value;
        income = data[2].value;
        cost = data[3].value;
        maintenance = data[4].value / 100;
        hoa = data[5].value;
        vacancy = data[6].value;

        // Calculations
        let monthlycashFlow = (income - cost - hoa - ((price * maintenance)/12)).toFixed(2);
        let yearlyCashFlow = ((monthlycashFlow * 12) * ((12 - vacancy)/12)).toFixed(2);
        let roi = ((yearlyCashFlow / price) * 100).toFixed(2);
        $("#monthlyCashFlow").text(monthlycashFlow);
        $("#yearlyCashFlow").text(yearlyCashFlow);
        $("#roi").text(roi);
    });
});