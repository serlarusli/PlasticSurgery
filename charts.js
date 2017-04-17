//Showing Overview Data
var ctx1 = document.getElementById("firstChart");

var countryNames = [];
var breastData = [];
var faceData = [];
var othersData = [];
var idx = 0

for (var key in sortSummaryData) {
	countryNames[idx] = sortSummaryData[key]['Countries'];
	breastData[idx] = sortSummaryData[key]['Breast'];
	faceData[idx] = sortSummaryData[key]['Face & Head'];
	othersData[idx] = sortSummaryData[key]['Others'];
	idx++;
};

function displaySummary() {
	var myGraph = new Chart(ctx1, {
		type: 'horizontalBar',
		data: {
			labels: countryNames,
			datasets: [{
				label: 'Breast',
				data: breastData,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)'
				],
				borderWidth: 1
			}, {
				label: 'Face & Head',
				data: faceData,
				backgroundColor: [
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)'
				],
				borderColor: [
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)'
				],
				borderWidth: 1
			}, {
				label: 'Others',
				data: othersData,
				backgroundColor: [
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)'
				],
				borderColor: [
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			title: {
            display: true,
            fontSize: 25,
            text: 'Total Procedures by Country'
        	},
	        scales: {
	        	xAxes: [{
	        		stacked: true,
	        		ticks: {
	        			beginAtZero:true
	        		},
	        		scaleLabel: {
	            		display: true,
	            		labelString: 'Number of procedures performed'
	            	}
	        	}],
	            yAxes: [{
	            	stacked: true
	            	}]
	        }
	        }
	    })
	};
//Showing per Capita graph
//var ctx2 = document.getElementById("secondChart");

var countryNamesPC = [];
var breastPCData = [];
var facePCData = [];
var othersPCData = [];
var idx = 0;

for (var key in sortPCData) {
	countryNamesPC[idx] = sortPCData[key]['Countries'];
	breastPCData[idx] = sortPCData[key]['Breast'];
	facePCData[idx] = sortPCData[key]['Face & Head'];
	othersPCData[idx] = sortPCData[key]['Others'];
	idx++;
};

//console.log(breastPCData);
//console.log(facePCData);
//console.log(othersPCData);

function displaySummaryPC() {
	var myGraph = new Chart(ctx1, {
		type: 'horizontalBar',
		data: {
			labels: countryNamesPC,
			datasets: [{
				label: 'Breast',
				data: breastPCData,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)',
					'rgba(255,99,132,1)'
				],
				borderWidth: 1
			}, {
				label: 'Face & Head',
				data: facePCData,
				backgroundColor: [
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(54, 162, 235, 0.2)'
				],
				borderColor: [
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)'
				],
				borderWidth: 1
			}, {
				label: 'Others',
				data: othersPCData,
				backgroundColor: [
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 206, 86, 1)'
				],
				borderColor: [
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(54, 162, 235, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			title: {
	            display: true,
	            fontSize: 25,
	            text: 'Total Procedures per Capita'
	        	},
	        scales: {
	        	xAxes: [{
	        		stacked: true,
	        		ticks: {
	        			beginAtZero:true
	        		},
	        		scaleLabel: {
	            		display: true,
	            		labelString: 'Number of procedures performed per capita'
	            	}
	        	}],
	            yAxes: [{
	            	stacked: true,
	            }]
	        },
	        }
	    })
	};

var ctx4 = document.getElementById("fourthChart");
function displayProcedure(id) {
	console.log(id);
	var countryName = [];
	var sorted = procedureData.sort(function(a, b) {
	return b[id] - a[id];
	});
	console.log(sorted);
	var sortedData =[];
	var idx = 0;
	for (var key in sorted) {
		countryName[idx] = sorted[key]['Countries'];
		sortedData[idx] = sorted[key][id];
		idx++;
	};
	console.log(sortedData);
	console.log(countryName);
	var myGraph = new Chart(ctx4, {
		type: 'horizontalBar',
		data: {
			labels: countryName,
			datasets: [{
				label: 'No. of procedures',
				data: sortedData,
				backgroundColor: [
					'rgba(0, 64, 128, 0.5)',
					'rgba(0, 77, 153, 0.5)',
					'rgba(0, 89, 179, 0.5)',
					'rgba(0, 102, 204, 0.5)',
					'rgba(0, 115, 230, 0.5)',
					'rgba(0, 128, 255, 0.5)',
					'rgba(26, 140, 255, 0.5)',
					'rgba(51, 153, 255, 0.5)',
					'rgba(77, 166, 255, 0.5)'
				],
				borderColor: [
					'rgba(51, 153, 255, 1)',
					'rgba(56, 153, 250, 1)',
					'rgba(61, 153, 245, 1)',
					'rgba(66, 153, 240, 1)',
					'rgba(71, 153, 235, 1)',
					'rgba(76, 153, 230, 1)',
					'rgba(82, 153, 224, 1)',
					'rgba(87, 153, 219, 1)',
					'rgba(92, 153, 214, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
	        title: {
	            display: true,
	            fontSize: 25,
	            text: id
	        	},
	        scales: {
	        	xAxes: [{
	        		stacked: true,	
	        		ticks: {
	        			beginAtZero:true
	        		},
	        		scaleLabel: {
	            		display: true,
	            		labelString: 'Number of procedures performed'
	            	}
	        	}],
	            yAxes: [{
	            	stacked: true,
	            }]
	        },
	        }
	    })
};

var ctx3 = document.getElementById("thirdChart");
var onlyUSA = procedureData[0];

function displayUSAGraph() {


	var usaDataRaw = [];
	var procedureRaw = [];

	for (var procedure in onlyUSA) {
		usaDataRaw.push(onlyUSA[procedure]);
		procedureRaw.push(procedure);
	};

	var usaData = usaDataRaw.slice(1,26);
	var procedureData = procedureRaw.slice(1,26);

	var myGraph = new Chart(ctx3, {
		type: 'horizontalBar',
		data: {
			labels: procedureData,
			datasets: [{
				label: '# of Procedures',
				data: usaData,
				backgroundColor: [
					//'rgba(255, 99, 132, 0.2)',
					'rgba(0, 0, 0, 0.5)',
					'rgba(0, 13, 26, 0.5)',
					'rgba(0, 26, 51, 0.5)',
					'rgba(0, 38, 77, 0.5)',
					'rgba(0, 51, 102, 0.5)',
					'rgba(0, 64, 128, 0.5)',
					'rgba(0, 77, 153, 0.5)',
					'rgba(0, 89, 179, 0.5)',
					'rgba(0, 102, 204, 0.5)',
					'rgba(0, 115, 230, 0.5)',
					'rgba(0, 128, 255, 0.5)',
					'rgba(26, 140, 255, 0.5)',
					'rgba(51, 153, 255, 0.5)',
					'rgba(77, 166, 255, 0.5)',
					'rgba(102, 179, 255, 0.5)',
					'rgba(128, 191, 255, 0.5)',
					'rgba(153, 204, 255, 0.5)',
					'rgba(179, 217, 255, 0.5)',
					'rgba(204, 230, 255, 0.5)',
					'rgba(230, 242, 255, 0.5)',
					'rgba(255, 255, 255, 0.5)',
					'rgba(255, 255, 255, 0.5)',
					'rgba(255, 255, 255, 0.5)',
					'rgba(255, 255, 255, 0.5)',
					'rgba(255, 255, 255, 0.5)'
				],
				borderColor: [
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			title: {
            display: true,
            fontSize: 25,
            text: 'Most popular procedures'
        	},
	        scales: {
	        	xAxes: [{
	        		stacked: true,
	        		ticks: {
	        			beginAtZero:true
	        		},
	        		scaleLabel: {
	            		display: true,
	            		labelString: 'Number of procedures performed'
	            	}
	        	}],
	            yAxes: [{
	            	stacked: true,
	            }]
	        }
	        }
	    })
	};

var ctx5 = document.getElementById("fifthChart");

function displayUSAExp() {


	var procedureName = [];
	var id = "Total Expenditure"
	var sortedCost = costData.sort(function(a, b) {
	return b[id] - a[id];
	});
	var totalExp = [];
	var idx = 0;

	for (var key in sortedCost) {
		procedureName[idx] = sortedCost[key]['Procedures'];
		totalExp[idx] = sortedCost[key]['Total Expenditure'];
		idx++
	};

	var myGraph = new Chart(ctx5, {
		type: 'horizontalBar',
		data: {
			labels: procedureName,
			datasets: [{
				label: '# of Procedures',
				data: totalExp,
				backgroundColor: [
					//'rgba(255, 99, 132, 0.2)',
					'rgba(0, 0, 0, 0.5)',
					'rgba(0, 13, 26, 0.5)',
					'rgba(0, 26, 51, 0.5)',
					'rgba(0, 38, 77, 0.5)',
					'rgba(0, 51, 102, 0.5)',
					'rgba(0, 64, 128, 0.5)',
					'rgba(0, 77, 153, 0.5)',
					'rgba(0, 89, 179, 0.5)',
					'rgba(0, 102, 204, 0.5)',
					'rgba(0, 115, 230, 0.5)',
					'rgba(0, 128, 255, 0.5)',
					'rgba(26, 140, 255, 0.5)',
					'rgba(51, 153, 255, 0.5)',
					'rgba(77, 166, 255, 0.5)',
					'rgba(102, 179, 255, 0.5)',
					'rgba(128, 191, 255, 0.5)',
					'rgba(153, 204, 255, 0.5)',
					'rgba(179, 217, 255, 0.5)',
					'rgba(204, 230, 255, 0.5)',
					'rgba(230, 242, 255, 0.5)',
					'rgba(255, 255, 255, 0.5)',
					'rgba(255, 255, 255, 0.5)',
					'rgba(255, 255, 255, 0.5)',
					'rgba(255, 255, 255, 0.5)',
					'rgba(255, 255, 255, 0.5)',
					'rgba(255, 255, 255, 0.5)',
					'rgba(255, 255, 255, 0.5)'
				],
				borderColor: [
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)',
					'rgba(77, 166, 255, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			title: {
            display: true,
            fontSize: 25,
            text: 'Total Spending in 2015'
        	},
	        scales: {
	        	xAxes: [{
	        		stacked: true,
	        		ticks: {
	        			beginAtZero:true
	        		},
	        		scaleLabel: {
	            		display: true,
	            		labelString: 'Total spending (USD)'
	            	}
	        	}],
	            yAxes: [{
	            	stacked: true,
	            }]
	        }
	        }
	    })
	};


//var sortableUSA = [];
//for (var procedure in onlyUSA) {
//		sortableUSA.push([procedure, onlyUSA[procedure]]);
//	};

//var sortedUSA = sortableUSA.sort(function(a,b) {
//	return b[1] - a[1];
//});


//console.log(onlyUSA);
//console.log(sortableUSA);
//console.log(sortedUSA);
