$.getJSON('https://api.mcsrvstat.us/2/server.minecraft-family.ca', function(data) {
    console.log(data);
    $(data).each(function(i,value){
        if(value.online == true)
        {
            $('#ServerStatus').html('Online');
            $('#ServerStatus').css('color', '#0A0');

            $('#onlinePlayers').html(value.players.online + "/" + value.players.max);
        }
        else
        {
            $('#ServerStatus').html('Offline');
            $('#ServerStatus').css('color', '#A00');

            $('#onlinePlayers').html("0/0");
        }
    });
})