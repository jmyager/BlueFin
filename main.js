$(function() { //shorthand document.ready function
    $('#roiForm').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        let data = $("#roiForm :input").serializeArray();
        console.log(data); //use the console for debugging, F12 in Chrome, not alerts
        let monthlycashFlow = (data[1].value - data[2].value).toFixed(2);
        let yearlyCashFlow = (monthlycashFlow * 12).toFixed(2);
        let roi = ((yearlyCashFlow / data[3].value) * 100).toFixed(2);
        $("#monthlyCashFlow").text(monthlycashFlow);
        $("#yearlyCashFlow").text(yearlyCashFlow);
        $("#roi").text(roi);
    });
});