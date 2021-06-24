$.getJSON('https://api.mcsrvstat.us/2/server.minecraft-family.ca', function(data) {
    console.log(data);
    $(data).each(function(i,value){
        if(value.online == true)
        {
            $('#ServerStatusText').html('Online');
            $('#ServerStatusText').css('color', '#0A0');

            $('#onlinePlayers').html(value.players.online + '<span class="online-players-separator">/</span>' + value.players.max);

            $('.motd').html(value.motd.html[0] +'<br />' + value.motd.html[1]);
            $('#ServerInfo').html(value.players.online + '<span class="online-players-separator">/</span>' + value.players.max + '<img class="ping-img" src="images/ping-bar.png"></img>');
        }
        else
        {
            $('#ServerStatusText').html('Offline');
            $('#ServerStatusText').css('color', '#A00');

            $('#onlinePlayers').html('0' + '<span class="online-players-separator">/</span>' + '0');

            $('#ServerInfo').html('0' + '<span class="online-players-separator">/</span>' + '0' + '<img class="ping-img" src="images/ping-bar.png"></img>');
        }
    });
})