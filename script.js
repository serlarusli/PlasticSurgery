displaySummary();
displaySummaryPC();
displayUSAGraph();
displayProcedure("Breast Augmentation");
displayUSAExp();

$('button#All').click(displaySummary);
$('button#perCapita').click(displaySummaryPC);
$('button.procedure').click(function() {
	var id = $(this).attr('id');
	displayProcedure(id)
});

$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
};

function displayCost() {
	console.log(costData);
	$.each(costData, function(i, surgery) {
		//$('div.gridTwo').append('<div class="gridTwo-item All '+ surgery.Part.replace(/\s+/g, '') +'"><h3>' + surgery.Procedures + '</h3><p>' + surgery.Cost + '</p></div>');
		$('div.gridTwo').append('<div class="gridTwo-item All '+ surgery.Part.replace(/\s+/g, '') +'" data-cost="'+ surgery.Cost +'"><h3 class = "procedureName">' + surgery.Procedures + '</h3><p class = "surgeryCost">' + surgery.Cost + '</p></div>');
	});
	$(".surgeryCost").digits();
	$('.gridTwo').isotope({
	  // options
	  itemSelector: '.gridTwo-item',
	  layoutMode: 'fitRows'
	});


};

displayCost();



//$('button#USA').click(displayUSAGraph);