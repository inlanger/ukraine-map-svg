$(function(){
    var r = Raphael('map', 1350, 950),
    attributes = {
            fill: '#fff',
            stroke: '#cd1543',
            'stroke-width': 1,
            'stroke-linejoin': 'round',
            transform:"translate(623.5801,201.2119)",
            transform:"matrix(1.25,0,0,-1.25,0,950)"
        },
    arr = new Array();
    for (var region in paths) {
        var obj = r.path(paths[region].path);
        console.log(region);
        obj.attr(attributes);
        arr[obj.id] = region;
      
        obj
        .hover(function(){
            this.animate({
                fill: '#dc4c43'
            }, 300);
        }, function(){
            this.animate({
                fill: attributes.fill
            }, 300);
        })
        .click(function(){
            alert(this.id);
        });
    }
});