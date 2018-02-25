var stocks = ["$VIX", "$VVIX", "$USD" ,"$UST10Y", "VXX", "SPY", "HYG", "TBT", "EEM", "IYR", "GLD", "GDX", "USO", "UNG", "SOXX", "XLU"];
var special = ["$$CPI", "$$PPI", "$$IPI", "$$EMPLOY", "$$GDP", "$$FEDRATE", "$$HPI"];
$(document).ready(function(){
    stocks.map(stock => {
        var chartUrl = `http://stockcharts.com/h-sc/ui?s=${stock}&p=D&b=5&g=0&id=p54396728978`;
        //console.log(chartUrl);
        $('#daily').append('<a href="' + chartUrl + '" class="btn btn-primary btn-lg btn-block" role="button" aria-disabled="true">' + stock + '</a>');
    });
    stocks.map(stock => {
        var chartUrl = `http://stockcharts.com/h-sc/ui?s=${stock}&p=W&b=5&g=0&id=p54396728978`;
        //console.log(chartUrl);
        $('#weekly').append('<a href="' + chartUrl + '" class="btn btn-primary btn-lg btn-block" role="button" aria-disabled="true">' + stock + '</a>');
    });
    special.map(stock => {
        var chartUrl = `http://stockcharts.com/h-sc/ui?s=${stock}&p=W&b=5&g=0&id=p54396728978`;
        //console.log(chartUrl);
        $('#special').append('<a href="' + chartUrl + '" class="btn btn-primary btn-lg btn-block" role="button" aria-disabled="true">' + stock + '</a>');
    });
  });
