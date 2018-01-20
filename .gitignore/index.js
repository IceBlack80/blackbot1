const Discord = require('discord.js');

var client = new Discord.Client();
var prefix = ("bb!");
var randnum = 0;
var replace = require("str-replace");
var bm = 0

client.on("ready", () => {
    var servers = client.guilds.array().map(g => g.game).join(',');
    console.log('Bot en ligne !');
    
    setInterval(function(){
    client.user.setGame("bb!help si tu as besoin d'aide")}, 20000);
    setTimeout(function(){
    setInterval(function(){
    client.user.setGame("|366 members | 6 servs")}, 20000)}, 10000)
    
    
    
     client.user.setStatus("online");
    
    })


client.login('Mzg2OTQyMzU3NzIwNzkzMDg4.DQcUrg.8s8qt5PyuGvjpaWETB7N92_fyt0');

client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`** +| ${member.user.username} vien d'arriver sur le serveur ! :tada: **`)
})

client.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`** -| ${member.user.username} à quiter le serveur. Adieux ... **`)
})

client.on("message",message => {
    if (message.content === "Bonjour"){
        message.channel.send("Mauvais jour :joy: ");
        console.log('Bonjour Mauvais jour')
    }

    if (message.content === "bonjour"){
        message.channel.send("Mauvais jour :joy: ");
        console.log('bonjour Mauvais jour')
    }

    if (message.content === "bjr"){
        message.channel.send("Mauvais jour :joy: ");
        console.log('bonjour Mauvais jour')
    }

    if (message.content === prefix + "servoff"){
        message.channel.send("Voici le lien pour le serveur officiel : https://discord.gg/UkzkBTY");
        console.log('servoff')
    }

    if (message.content === prefix + "deco"){
        message.channel.send("**Voici une petite décoration :** ▬▬๑۩۞۩๑▬▬");
        console.log('Décoration')
    }

    if (message.content === prefix + "owner"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#F46A00')
            .addField("__Voici les informations sur les personnes qui s'occupent de moi :__", "Faîte bb!servoff pour avoir le lien de mon serveur officiel.")
            .addField("**Mon créateur :**", "**เ๔٤฿ℓฮ๔א ™#5163**")
            .addField("**Les personnes qui assistent mon owner :**", "- **-【ReDy】√ -#3547**")
            .addField("Si vous avez un probléme ou une demande me concernant contacter mon owner en message privée ou alors faîtes bb!servoff", "*Vous pouvez aussi contacter les assistants*")
        message.channel.sendEmbed(help_embed);
        console.log('owner')
    }

    if (message.content === prefix + "binvite"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#F46A00')
            .addField("Voici le lien pour m'inviter sur ton serveur:", "https://discordapp.com/oauth2/authorize?client_id=386942357720793088&permissions=8&scope=bot")
        message.channel.sendEmbed(help_embed);    
        //message.reply("Voici le lien pour m'inviter sur ton serveur: https://discordapp.com/oauth2/authorize?client_id=386942357720793088&permissions=8&scope=bot")
        console.log('invite')
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#F46A00')
            .addField("__Commandes du BlackBot !__", "Voici la liste de mes commandes : \n \nMon préfix par défaut est bb! (une commande pour le changer sera bientôt diponible !)")
            .addField("__Surprises__", "- Vous trouverez des réponses drôles à certain de vos messages :joy:")
            .addField("__Important__", "**Pour que le message de** __**bienvenue**__ **ainsi que celui de** __**aurevoir**__ **fonctionent il faut que votre serveur est un salon** __***bienvenue.***__ \n**- servoff --->** Vous donne le lien de mon serveur officiel.")
            .addField("__Modération__", "**- kick + mention de l'utilisateur à kick --->** Kick l'utilisateur mentionné.")
            .addField("__Informations utiles__", "**- sinfo --->** Vous donnes des informations sur le serveur. \n**- binfo --->** Je vous donnes des informations sur ... moi même. \n**- uinfo --->** Vous donne votre ID \n**- owner --->** Vous donnes des informations sur les personnes qui me soigne, me font des câlins la nuit quand j'ai peur et me font ... Nan stop j'arréte là :joy:." )
            .addField("__Divers__", "- **binvite --->** Je vous donnes mon lien d'invitation pour m'inviter dans votre serveur \n- **avatar + mention de l'utilisateur --->** Je vous montres l'avatar de la personne mentionner. \n- **sinvite --->** Je vous donnes un lien d'invitation d'une durée de 24h pour le serveur. \n- **deco --->** Je vous donnes une petite décoration bien stylé. \n- **actu --->** Pour voir mes actualités.")
            .addField("__Photos__", "    **COMMANDES EN DEVELOPEMENT**")
            message.author.sendEmbed(help_embed);           
        //message.channel.send("Bot en développement :\n Bot bientôt en service");
        console.log("Commande Help demandée !")
    }

    if (message.content === prefix + "help"){
        message.reply("**📡 Le menu de mes commandes t'a étais envoyer en MP**")
        console.log('Message help envoyé en MP')
    }

    if (message.content === prefix + "actu"){
        var help_embed = new Discord.RichEmbed()
        .setColor('#F46A00')
        .addField("Voici les actualités me concernant :", "La command **uinfo** est arrivé !")
        .addField("A venir :", "La commande **ban** et les commandes **photos** seront bientôt là !")
        message.channel.sendEmbed(help_embed);
        console.log("Actualités")
    }

    if (message.content === prefix + "sinvite") {
        if (message.channel.type === 'dm') return;
      message.channel.createInvite(message.channel).then((code) => {message.channel.send(`**Voici le lien d'invitation pour ce discord:** https://discord.gg/${code.code}`)})
    }

    //if (message.content === prefix + "gif"){
        //message.reply("https://tenor.com/view/shocked-in-awe-big-mouth-woah-wow-gif-4886220")
        //console.log('Gif')
    //}

    if (message.content.startsWith(prefix + "avatar")) {
        if (!message.mentions.users.first()) return message.channel.send("**Spécifiez un utilisateur.**")
   let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
  let ava = user.displayAvatarURL
  let embed = {
      color:0x542437,
      description:"Voici l'avatar de "+user.username+": *[url]("+ava+")*",
      image:{url:ava}
    }
  message.channel.send("", {embed})
}

    if (message.content === "Connard"){
        message.channel.send("Ce n'est pas très gentil de dire sa !")
        console.log('Connard')
    }

    if (message.content === "connard"){
        message.channel.send("Ce n'est pas très gentil de dire sa !")
        console.log('connard')
    }

    if (message.content === "Au revoir"){
        message.channel.send("Non! Tu reste je ne t'ai pas donner l'autorisation de partir! :joy:");
        console.log('Au revoir')
    }

    if (message.content === "Aurevoir"){
        message.channel.send("Non! Tu reste je ne t'ai pas donner l'autorisation de partir! :joy:");
        console.log('Aurevoir')
    }

    if (message.content === "au revoir"){
        message.channel.send("Non! Tu reste je ne t'ai pas donner l'autorisation de partir! :joy:");
        console.log('au revoir')
    }

    if (message.content === "aurevoir"){
        message.channel.send("Non! Tu reste je ne t'ai pas donner l'autorisation de partir! :joy:");
        console.log('aurevoir')
    }

    if (message.content === "Tg"){
        message.channel.send("Calme toi tu est sur discord. On est ici pour passer un moment de détente. Tu veux pas? Bah vas te faire voir.");
        console.log('Tg')
    }

    if (message.content === "TG"){
        message.channel.send("Calme toi tu est sur discord. On est ici pour passer un moment de détente. Tu veux pas? Bah vas te faire voir.");
        console.log('TG')
    }

    if (message.content === "tg"){
        message.channel.send("Calme toi tu est sur discord. On est ici pour passer un moment de détente. Tu veux pas? Bah vas te faire voir.");
        console.log('tg')
    }

    if (message.content === "Ta geule"){
        message.channel.send("Calme toi tu est sur discord. On est ici pour passer un moment de détente. Tu veux pas? Bah vas te faire voir.");
        console.log('Ta geule')
    }

    if (message.content === "ta geule"){
        message.channel.send("Calme toi tu est sur discord. On est ici pour passer un moment de détente. Tu veux pas? Bah vas te faire voir.");
        console.log('ta geule')
    }

    if (message.content === "FDP"){
        message.channel.send("J'éspére que tu dis sa pour rire sinon fait t'ai valises");
        console.log('FDP')
    }

    if (message.content === "fdp"){
        message.channel.send("J'éspére que tu dis sa pour rire sinon fait t'ai valises");
        console.log('fdp')
    }

    if (message.content === "Fdp"){
        message.channel.send("J'éspére que tu dis sa pour rire sinon fait t'ai valises");
        console.log('Fdp')
    }

    if (message.content === "Fils de pute"){
        message.channel.send("J'éspére que tu dis sa pour rire sinon fait t'ai valises");
        console.log('Fils de pute')
    }

    if (message.content === "fils de pute"){
        message.channel.send("J'éspére que tu dis sa pour rire sinon fait t'ai valises");
        console.log('fils de pute')
    }

    if (message.content === "ah"){
        message.channel.send("Ah, Bé, Cé, Dé, Euh, Aife, Gé, Hache, Ie, Jie, Ka, Elle, Aime, Aine, Au, Pé, Cu,Air, Aise, Té, Ue, Vé, Doublvé, Ixe, Igrec, Zède");
        console.log('ah')
    }

    if (message.content === "Ah"){
        message.channel.send("Ah, Bé, Cé, Dé, Euh, Aife, Gé, Hache, Ie, Jie, Ka, Elle, Aime, Aine, Au, Pé, Cu,Air, Aise, Té, Ue, Vé, Doublvé, Ixe, Igrec, Zède");
        console.log('Ah')
    }

    if (message.content === "AH"){
        message.channel.send("Ah, Bé, Cé, Dé, Euh, Aife, Gé, Hache, Ie, Jie, Ka, Elle, Aime, Aine, Au, Pé, Cu,Air, Aise, Té, Ue, Vé, Doublvé, Ixe, Igrec, Zède");
        console.log('AH')
    }

    if (message.content === "Ui"){
        message.channel.send("Ui, ancienne colonie phénicienne située à l'emplacement de la ville de Tripoli en Libye");
        console.log('Ui')
    }

    if (message.content === "ui"){
        message.channel.send("Ui, ancienne colonie phénicienne située à l'emplacement de la ville de Tripoli en Libye");
        console.log('ui')
    }

    if (message.content === prefix + "sinfo"){
        let m = " ";
        var help_embed = new Discord.RichEmbed()
        .setColor('#F46A00')
        .addField("__Voici quelques informations à propos de ce serveur :__", "Faîte bb!sinvite pour avoir un lien d'invitation au serveur")
        .addField("__Nom du serveur :__", message.guild.name)
        .addField("__Nombre de membres du serveur :__", message.guild.memberCount)
        .addField("__Propriétaire du serveur :__", message.guild.owner.user.tag)
        .addField("__Région du serveur :__", message.guild.region)
        .addField("__ID du serveur :__", message.guild.id)
        //.addField("__Nombre de salons :__", message.guild.channels)
        message.channel.sendEmbed(help_embed);
        console.log('sinfo')
    }

    if (message.content === prefix + "binfo"){
        let m = " ";
        var help_embed = new Discord.RichEmbed()
        .setColor('#F46A00')
        .addField("__Voici mes statistiques :__", "Faîte bb!binvite pour avoir mon lien d'invitation.")
        .addField("__Nombre de serveurs où je suis :__", client.guilds.size)
        .addField("__Nombre d'utilisateurs qui se servent de moi :__", client.users.size)
        .addField("__Nombre total de salons textuels où je suis :__", client.channels.size)
        message.channel.sendEmbed(help_embed);
        console.log('binfo')
    }

    if (message.content === prefix + "uinfo"){
        let m = " ";
        var help_embed = new Discord.RichEmbed()
        .setColor('#F46A00')
        .addField("__Ton pseudo :__", message.author.username)
        .addField("__Ton ID :__", message.author.id)
        message.channel.sendEmbed(help_embed);
        console.log('uinfo')
    }

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {

        case "kick":
            if (!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")) {
                message.channel.send("**❌ | Vous n'avez pas la permission d'effectuer cette commande.**")
            } else {
                var member = message.mentions.members.first();
                if (!member) {
                    message.channel.send("**❌ | L'utilisateur est introuvable . Veuillez saisir un utilisateur existant !**");
                } else {
                    if (!member.kickable) {
                        message.channel.send("**❌ | Erreur, le membre est impossible à éxpulsé !**");
                    } else {
                        member.kick().then((member))
                        message.channel.send("**:white_check_mark: | L'utilisteur à été éxpulsé !**");


                    }
                }

            }
    }

});
