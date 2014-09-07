var values = [1,3];

var risk = "#ff0000";
var reward = "#00ff00";

var doughnutData = [
    {
        value: values[0],
        color: risk
    },
    {
        value : values[1],
        color : reward
    }
];

var doughnutData2 = [
    {
        value: 3,
        color: risk
    },
    {
        value : 5,
        color : reward
    }
];
var myDoughnut = new Chart(document.getElementById("pie-1").getContext("2d")).Doughnut(doughnutData);
var myDoughnut = new Chart(document.getElementById("pie-2").getContext("2d")).Doughnut(doughnutData2);
var myDoughnut = new Chart(document.getElementById("pie-3").getContext("2d")).Doughnut(doughnutData);
var myDoughnut = new Chart(document.getElementById("pie-4").getContext("2d")).Doughnut(doughnutData2);