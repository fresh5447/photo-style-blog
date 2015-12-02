var React = require('react');
var Chart = require('chart.js');

var WakaChart = React.createClass({
	render: function(){
	
    	var dataOne = {
    	    labels: ["JavaScript", "EJS", "JSON", "JSX", "Other", "JSX"],
    	    datasets: [
    	        {
    	            label: "My First dataset",
    	            fillColor: "rgba(220,220,220,0.2)",
    	            strokeColor: "rgba(220,220,220,1)",
    	            pointColor: "rgba(220,220,220,1)",
    	            pointStrokeColor: "#fff",
    	            pointHighlightFill: "#fff",
    	            pointHighlightStroke: "rgba(220,220,220,1)",
    	            data: [87.76, 4.82, 3.01, 2.11, 1.18, 1.10]
    	        },
    	        {
    	            label: "My Second dataset",
    	            fillColor: "rgba(151,187,205,0.2)",
    	            strokeColor: "rgba(151,187,205,1)",
    	            pointColor: "rgba(151,187,205,1)",
    	            pointStrokeColor: "#fff",
    	            pointHighlightFill: "#fff",
    	            pointHighlightStroke: "rgba(151,187,205,1)",
    	            data: [87.76, 4.82, 3.01, 2.11, 1.18, 1.10]
    	        }
    	    ]
    	};

    	var dataTwo = [
            {
                value: 87.76,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "JavaScript"
            },
            {
                value: 4.82,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "EJS"
            },
            {
                value: 3.01,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "JSON"
            },
            {
                value: 2.11,
                color: "#949FB1",
                highlight: "#A8B3C5",
                label: "JSX"
            },
            {
                value: 1.18,
                color: "#4D5360",
                highlight: "#616774",
                label: "Other"
            },
            {
                value: 1.10,
                color: "#4D5360",
                highlight: "#616774",
                label: "CSS"
            }

        ];

        var dataThree = {
            labels: ["Days Ago: 1", "2", "3", "4", "5", "6", "7"],
            datasets: [

                {
                    label: "Hours Coding",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
        			data: [10, 5, 2, 2, 0, 4, 8]
                }
            ]
        };

    	var ctx1 = document.getElementById("firstChart").getContext("2d");
    	var myRadarChart = new Chart(ctx1).Radar(dataOne);

    	var ctx2 = document.getElementById("secondChart").getContext("2d");
    	var myRadarChart = new Chart(ctx2).PolarArea(dataTwo);

    	var ctx3 = document.getElementById("thirdChart").getContext("2d");
    	var myLineChart = new Chart(ctx3).Line(dataThree);

        return(
    		      <div> Hello Chart </div>
    		  );
	}
});

module.exports = WakaChart;