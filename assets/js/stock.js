var stocks = ["VXX","$UST10Y","SPY", "EEM", "IYR", "USO", "UNG"];

$(document).ready(function(){
    stocks.map(stock => {
        var chartUrl = `http://stockcharts.com/c-sc/sc?s=${stock}&p=D&b=5&g=0&i=p12494722547&r=1518497514859`;
        //console.log(chartUrl);
        $('#daily').append('<a href="' + chartUrl + '" class="btn btn-primary btn-lg btn-block" role="button" aria-disabled="true">' + stock + '</a>');
    });
    stocks.map(stock => {
        var chartUrl = `http://stockcharts.com/c-sc/sc?s=${stock}&p=W&b=5&g=0&i=t57884206221&r=1518497601315`;
        //console.log(chartUrl);
        $('#weekly').append('<a href="' + chartUrl + '" class="btn btn-primary btn-lg btn-block" role="button" aria-disabled="true">' + stock + '</a>');
    });
  });
