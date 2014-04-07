(function ( $ ) {
 
	$.fn.foldtable = function(options) {

		var identifier = options.identifier || 'id';
		var tableData = {};
		var $rows = $(this).find('tbody tr');
		var $tbody = $(this).find('tbody');
		var dom = "";

		$rows.each(function() {
			if (!tableData[$(this).data(identifier)]) {
				tableData[$(this).data(identifier)] = [];
			}
			tableData[$(this).data(identifier)].push(this);
		});

		$.each(tableData, function(index, value) {
			for (var i = 0; i < value.length; i++) {
				if (i === 0) {
					dom += "<tr class='fold-row fold-" + index 
							+ "'>" + $(value[i]).html() 
							+ "<td>" + value.length 
							+ "</td><td><button class='fold-btn-show collapsed' data-fold-id='"
							+ index + "'>show</button></td></tr>";
				} else {
					dom += "<tr class='fold-sub-row fold-" 
							+ index + "'>" 
							+ $(value[i]).html() 
							+ "<td></td><td></td></tr>";
				}		
			}			
		});

		$tbody.html(dom);
		
		// hide all collpased items
		$('.fold-sub-row').hide();
		// bind toggle collapse item on sub row
		$(".fold-btn-show").on('click', function() {
			var $this = $(this);
			var foldId = $this.data('fold-id');

			if ($this.hasClass('collapsed')) {
				$this.removeClass('collapsed').html('collapse');
				$('.fold-sub-row.fold-' + foldId).show();
			} else {				
				$this.addClass('collapsed').html('show');
				$('.fold-sub-row.fold-' + foldId).hide();
			}
		});
	  return this;
	};
 
}( jQuery ));