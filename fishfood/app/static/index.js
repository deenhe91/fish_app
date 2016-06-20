
  function doGraph(data){
    console.log("doing graph...", data)
  }


// fish input jquery

  $(function() {
    $( "#tags" ).autocomplete({
      source: availableFish,
       focus: function( event, ui ) {
        $( "#tags" ).val( ui.item.label );
        return false;
      },
      select: function(event, ui){
        $.ajax({
          type: "POST",
          url: '/api/searchbyfish',
          contentType: 'application/json;charset=UTF-8',
          data: JSON.stringify(ui, null, '\t'),
          success: doGraph
        });
      }
    });
  });