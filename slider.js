$(document).ready( function() {

  var buttonFilters = {};
  var buttonFilter = '*';

  var rangeFilters = {
    'cost': {'min':0, 'max': 8000}
  };

  var $containerTwo = $('.containerTwo').isotope({
    itemSelector: '.gridTwo-item',
    layout: 'masonry',

    filter: function() {
      var $this = $(this);
      var cost = $this.attr('data-cost');
      var isInCostRange = (rangeFilters['cost'].min <= cost && rangeFilters['cost'].max >= cost);
      return $this.is( buttonFilter ) && (isInCostRange);
    }
  });

  var $costSlider = $('#filter-cost').slider({ tooltip_split: true, min: 0,  max: 8000, range: true, value: [0, 8000] });

  function updateRangeSlider(slider, slideEvt) {
    console.log('Current slider:' + slider);
    var sldmin = +slideEvt.value[0],
        sldmax = +slideEvt.value[1],
        filterGroup = slider.attr('data-filter-group'),
        currentSelection = sldmin + ' - ' + sldmax;
      //slider.siblings('.filter-label').find('.filter-selection').text(currentSelection);
      console.log('Filtergroup: '+ filterGroup);
      rangeFilters[filterGroup] = {
        min: sldmin || 0,
        max: sldmax || 100000
      };
      $containerTwo.isotope();

  }

  $costSlider.on('slideStop', function(slideEvt){
    var $this =$(this);
    updateRangeSlider($this, slideEvt);
  });

  $('.filters').on( 'click', '.btn', function() {
    var $this = $(this);
    var $buttonGroup = $this.parents('.btn-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    buttonFilters[ filterGroup ] = $this.attr('data-filter');
    buttonFilter = concatValues( buttonFilters ) || '*';
    console.log( buttonFilter )
    $containerTwo.isotope();
  });

  $('.btn-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', '.btn-filter', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $(this).addClass('is-checked');
      });
  });

});

function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}
