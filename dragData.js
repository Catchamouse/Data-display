$(document).ready(function(){
var dragging = false;
var $td = $('td');
var startCell = null;

function end(e) {  
  //$td.removeClass('highlighted');

  $(cellsBetween(startCell, e.target)).each(function() {
  if(isDragEnabled){
    $(this).addClass('highlighted');
    } else{
      $(this).removeClass('highlighted');  
    }        
  });
}

function cellsBetween(start, end) {
  var bounds, elementsInside;
  elementsInside = [start, end];
  do {
    bounds = getBoundsForElements(elementsInside);
    var elementsInsideAfterExpansion = rectangleSelect('td', bounds);
    if (elementsInside.length === elementsInsideAfterExpansion.length) {
      return elementsInside;
    } else {
      elementsInside = elementsInsideAfterExpansion;
    }
  } while (true);
}

function isPointBetween(point, x1, x2) {
  return (point >= x1 && point <= x2) || (point <= x1 && point >= x2);
}

function rectangleSelect(selector, bounds) {
  var elements = [];
  jQuery(selector).each(function() {
    var $this = jQuery(this);
    var offset = $this.offset();
    var x = offset.left;
    var y = offset.top;
    var w = $this.outerWidth();
    var h = $this.outerHeight();
    if ((isPointBetween(x + 1, bounds.minX, bounds.maxX) && isPointBetween(y + 1, bounds.minY, bounds.maxY)) ||
        (isPointBetween(x + w - 1, bounds.minX, bounds.maxX) && isPointBetween(y + h - 1, bounds.minY, bounds.maxY))
       ) {
      elements.push($this.get(0));
    }
  });
  return elements;
}

function getBoundsForElements(elements) {
  var x1 = elements.reduce(function(currMinX, element) {
    var elementLeft = $(element).offset().left;
    return currMinX && currMinX < elementLeft ? currMinX : elementLeft;
  }, undefined);
  var x2 = elements.reduce(function(currMaxX, element) {
    var elementRight = $(element).offset().left + $(element).outerWidth();
    return currMaxX && currMaxX > elementRight ? currMaxX : elementRight;
  }, undefined);
  var y1 = elements.reduce(function(currMinY, element) {
    var elementTop = $(element).offset().top;
    return currMinY && currMinY < elementTop ? currMinY : elementTop;
  }, undefined);
  var y2 = elements.reduce(function(currMaxY, element) {
    var elementBottom = $(element).offset().top + $(element).outerHeight();
    return currMaxY && currMaxY > elementBottom ? currMaxY : elementBottom;
  }, undefined);
  return {
    minX: x1,
    maxX: x2,
    minY: y1,
    maxY: y2
  };
}

$td.on('mousedown', function(e) {
if(isDragEnabled || isUnselectDragEnabled){
  dragging = true;
  startCell = e.target;
  end(e);
  }
});
$td.on('mouseenter', function(e) {
if(isDragEnabled || isUnselectDragEnabled){
  if (!dragging) {
    return;
  }
  end(e);
  }
});
$td.on('mouseup', function(e) {
if(isDragEnabled || isUnselectDragEnabled){
  dragging = false;
  }
});

});