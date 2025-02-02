$(document).ready(function() {
	init()
});

function init(){
    $('#archivedShowsText').click(function(){
      $("#archivedShowsContainer").show(500);
      $("#upcomingShowsContainer").hide(500);
    })

    $('#upcomingShowsText').click(function(){
      $("#archivedShowsContainer").hide();
      $("#upcomingShowsContainer").show();
    })
}