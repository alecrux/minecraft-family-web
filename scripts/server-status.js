$.getJSON('https://api.mcsrvstat.us/2/server.minecraft-family.ca', function(data) {
    console.log(data);
    $(data).each(function(i,value){
        if(value.online == true)
        {
            $('#ServerStatusText').html('Online');
            $('#ServerStatusText').css('color', '#0A0');

            $('#onlinePlayers').html(value.players.online + '<span class="online-players-separator">/</span>' + value.players.max);
        }
        else
        {
            $('#ServerStatusText').html('Offline');
            $('#ServerStatusText').css('color', '#A00');

            $('#onlinePlayers').html('0' + '<span class="online-players-separator">/</span>' + '0');
        }
    });
})