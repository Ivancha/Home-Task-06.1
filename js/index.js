require.config({baseUrl:"./js",paths:{jquery:"./libs/jquery"}}),require(["Bike","jquery"],function(e,i){i(function(){i.get("./data/bikes.json",function(n){n.bikes.forEach(function(n){new e(n,i("<div>").addClass("bike-wrap").appendTo(document.body))})})})});