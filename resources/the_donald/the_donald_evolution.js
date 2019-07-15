(function(){
    window.PLOTLYENV={'BASE_URL': 'https://plot.ly'};

    var gd = document.getElementById('77823e28-0790-4f0c-8ccc-ace0ac8cf682')
    var resizeDebounce = null;

    function resizePlot() {
        var bb = gd.getBoundingClientRect();
        Plotly.relayout(gd, {
            width: bb.width,
            height: bb.height
        });
    }

    
    window.addEventListener('resize', function() {
        if (resizeDebounce) {
            window.clearTimeout(resizeDebounce);
        }
        resizeDebounce = window.setTimeout(resizePlot, 100);
    });
    

    
    Plotly.plot(gd, {
        data: [{"fill": "none", "meta": {"columnNames": {"x": "x", "y": "y", "text": "hovertext", "marker": {"size": "color", "color": "color"}, "hovertext": "hovertext"}}, "mode": "markers", "name": "subreddits", "type": "scatter", "xsrc": "l144032:32:02aa9b", "x": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", -9.379281044006348, 8.21291732788086, 6.055479049682617, 5.219602108001709, -9.262441635131836, 1.9665900468826294, -1.4581310749053955, -7.343970775604248, -8.339578628540039, 5.86668586730957, 6.538570404052734, 4.876133441925049, -0.0960838571190834, 2.775273084640503, -1.660083293914795, 6.690454483032227, -7.968821048736572, 1.6878626346588135, 2.703423261642456, -9.759278297424316, -8.653600692749023, 6.2772955894470215, 8.012621879577637, -7.464430332183838, -8.2611722946167, -4.353224277496338, -8.423535346984863, 4.806921005249023, 7.431302547454834, 0.36169636249542236, 0.0876535102725029, 1.7113467454910278, -0.32770684361457825, -7.652177810668945, 9.8933744430542, -6.779487609863281, -8.84704875946045, -2.8893537521362305, 4.259696006774902, -8.844259262084961, -6.727208137512207, 6.054065704345703, -7.952898025512695, -0.5171167850494385, -6.382962703704834, -7.039194107055664, 6.457056522369385, -7.4937920570373535, 5.135274887084961, 8.21503734588623, -2.048774480819702, -4.114415168762207, 2.273285388946533, -6.582367420196533, 7.209836006164551, 7.44701623916626, -3.1231637001037598, 9.904385566711426, -4.187780857086182, 5.32076358795166, -8.89160442352295, -8.9365873336792, 1.296743631362915, 3.73270320892334, 5.660974979400635, 6.519924163818359, -6.621809005737305, -6.9471659660339355, 7.311018466949463, -5.128803253173828, 6.571775436401367, -1.821565866470337, -8.465415000915527, 5.136110782623291, 0.5483055114746094, -9.095426559448242, -7.065497875213623, 6.144479274749756, 5.255719184875488, -1.41890549659729, -8.00402545928955, -8.84378433227539, -7.895932197570801, 0.7102775573730469, 6.065556526184082, -0.2206941694021225, 1.7832775115966797, 7.648185729980469, 5.615304470062256, -9.826184272766113, -8.1791353225708, -3.294971466064453, 2.023437976837158, 6.842833518981934, 6.734663963317871, -4.0285420417785645, 6.903783798217773, 5.054863929748535, -8.077818870544434, -8.246037483215332, 6.255650520324707, 5.138738632202148, 0.4607832431793213, 8.130607604980469, 5.348199367523193, -8.636411666870117, 7.120620250701904, -7.540720462799072, -0.048830948770046234, -6.319978713989258, -9.291312217712402, -0.4548007845878601, -8.57744026184082, 5.136839866638184, -2.1297242641448975, 3.763120651245117, 6.91304874420166, -2.9998483657836914, 4.741504669189453, -5.324280261993408, 4.248076915740967, 3.500776529312134, -8.321152687072754, -6.889153957366943, 0.7981181740760803, 7.703518390655518, -7.603396892547607, 8.038177490234375, -9.415639877319336, -7.869955539703369, 4.515049457550049, -8.389562606811523, 1.7142770290374756, -8.404443740844727, -0.5356540679931641, -2.424856424331665, -2.283306360244751, 4.552341938018799, -10.249397277832031, -2.365269184112549, -1.5399420261383057, -6.04948091506958, 5.8263397216796875, 3.3157050609588623, -8.934138298034668, -8.786928176879883, 6.327049255371094, 3.189363718032837, 6.152214050292969, -4.056739807128906, -2.9840378761291504, 0.6467724442481995, -6.317923545837402, -9.240266799926758, 0.5153940320014954, -5.863866329193115, -8.65856647491455, 7.471346855163574, -5.604757308959961, -8.673920631408691, 6.781297206878662, -7.2349772453308105, -9.526671409606934, 4.533015251159668, 0.44762280583381653, 4.7055816650390625, -10.668702125549316, 5.538967132568359, -8.207158088684082, 5.715667724609375, -10.094691276550293, -8.056398391723633, -7.304494857788086, 4.8145575523376465, 9.868919372558594, 8.26706600189209, 6.768902778625488, 1.884555697441101, -7.97554349899292, 1.3295044898986816, 4.20904016494751, -3.4887807369232178, 2.5616722106933594, 3.700115442276001, 5.466394901275635, 7.3957319259643555, -5.5119194984436035, 3.28800892829895, -8.149040222167969, 3.4920685291290283, 4.462075710296631, 6.390225887298584, -3.3003969192504883, 6.605933666229248, 5.438474178314209, 0.2147173136472702, 6.8733038902282715, -2.3537251949310303, 5.094350337982178, 4.658808708190918, 2.4009666442871094], "ysrc": "l144032:32:9bc99e", "y": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 10.467656135559082, -7.83451509475708, -10.044126510620117, -6.797312259674072, 14.553789138793945, -1.696272373199463, 0.9560303688049316, 10.813751220703125, 11.781502723693848, -11.779977798461914, -1.6114519834518433, -2.717904567718506, -4.44068717956543, -4.103112697601318, -0.0378761924803257, -10.030829429626465, 11.593287467956543, -1.6408782005310059, -0.35371339321136475, 12.366711616516113, 14.184462547302246, -2.2165234088897705, -5.673318862915039, 9.066934585571289, 11.73140811920166, 3.1641173362731934, 13.466390609741211, -10.6103515625, -5.389572620391846, -4.38877010345459, -0.06999965012073517, -3.6455013751983643, 0.5066589713096619, 9.947751998901367, -5.695206165313721, 10.32545280456543, 14.75965404510498, 3.92883563041687, -10.559581756591797, 14.132251739501953, 7.942349433898926, -11.769078254699707, 11.973357200622559, 0.23653535544872284, 9.568904876708984, 8.875185012817383, -0.5867449045181274, 10.578969955444336, -10.171490669250488, -8.966253280639648, 0.4917919933795929, 4.132485389709473, -0.3104550838470459, 12.419869422912598, -11.509995460510254, -9.887728691101074, 2.7883992195129395, -3.4579224586486816, 5.521571636199951, -8.400543212890625, 14.108823776245117, 14.210436820983887, -3.47532057762146, -3.6020078659057617, -11.334253311157227, -4.23020601272583, 7.26163911819458, 11.192041397094727, -8.471968650817871, 5.451965808868408, -4.38557767868042, -0.6153210997581482, 9.256452560424805, -12.036845207214355, -4.864311695098877, 10.656058311462402, 9.899413108825684, -10.948586463928223, -8.817354202270508, 1.0504766702651978, 10.149446487426758, 8.676840782165527, 11.413816452026367, -5.043043613433838, -8.955751419067383, -1.283696174621582, -4.205251693725586, -9.934935569763184, -1.633017897605896, 12.241263389587402, 11.348767280578613, 1.8261382579803467, -4.3828558921813965, -4.413790225982666, -11.161297798156738, 4.260839462280273, -4.791227340698242, -7.170408248901367, 9.90080738067627, 10.686275482177734, -3.851335048675537, -6.94318962097168, -3.9137110710144043, -7.893738269805908, -10.610926628112793, 14.624072074890137, -10.564752578735352, 9.892739295959473, -1.4914976358413696, 11.604857444763184, 14.485177040100098, -0.9896247386932373, 14.212882995605469, -7.941927433013916, 0.7376677989959717, -8.948941230773926, -12.104090690612793, 0.28707897663116455, -8.616580963134766, 4.190038681030273, -12.154181480407715, -8.068700790405273, 11.718803405761719, 8.47230339050293, -2.6659107208251953, -3.5296175479888916, 7.767240524291992, -10.048174858093262, 13.255992889404297, 11.26978874206543, -10.87547492980957, 14.780256271362305, -3.6763312816619873, 14.286688804626465, -2.5743491649627686, 1.1103345155715942, 0.26517313718795776, -11.232865333557129, 12.905990600585938, -0.027453504502773285, -0.9511569738388062, 8.563774108886719, -11.078007698059082, -11.38748836517334, 9.881471633911133, 9.260774612426758, -12.513469696044922, -1.4502153396606445, -10.964621543884277, 4.9056830406188965, 2.576625347137451, -3.5741028785705566, 10.67314338684082, 14.249811172485352, -5.2328782081604, 9.227895736694336, 11.062942504882812, -0.05638881027698517, 10.348920822143555, 11.486032485961914, -11.222960472106934, 8.806319236755371, 9.781011581420898, -13.227375030517578, -4.798592567443848, -9.924264907836914, 12.347932815551758, -10.50794792175293, 11.415080070495605, -11.137995719909668, 11.842381477355957, 10.611127853393555, 12.447519302368164, -9.351937294006348, -5.598299980163574, -9.031149864196777, -9.872204780578613, -0.018598482012748718, 8.497172355651855, -2.463592529296875, -10.372035026550293, 3.806035280227661, -5.5970916748046875, -11.26502799987793, -12.094573020935059, -5.190127372741699, 5.786482810974121, -1.377984881401062, 11.226994514465332, -10.350007057189941, -13.29044246673584, -7.402924060821533, 2.0894815921783447, -11.723838806152344, -10.789566993713379, -1.3245736360549927, -8.952788352966309, -0.772031307220459, -11.077600479125977, -10.513801574707031, -3.8161182403564453], "marker": {"line": {"width": 0}, "meta": {"columnNames": {"size": "color", "color": "color"}}, "size": 7, "cauto": true, "opacity": 0.74, "sizeref": 0.04888888888888889, "colorsrc": "l144032:32:63d7fb", "color": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 0, 26, 95, 31, 18, 65, 88, 41, 41, 95, 65, 65, 5, 65, 5, 26, 83, 65, 6, 83, 83, 65, 26, 21, 65, 5, 37, 95, 65, 5, 31, 65, 88, 87, 47, 30, 83, 99, 95, 50, 88, 95, 41, 88, 66, 56, 65, 65, 95, 26, 55, 56, 6, 16, 95, 26, 88, 65, 30, 31, 41, 83, 5, 65, 95, 27, 30, 30, 26, 8, 65, 55, 35, 68, 5, 35, 0, 95, 26, 88, 88, 0, 0, 5, 26, 88, 65, 26, 88, 83, 56, 65, 65, 65, 95, 19, 65, 31, 39, 22, 27, 31, 5, 26, 95, 83, 95, 56, 88, 56, 88, 65, 30, 26, 55, 95, 95, 88, 95, 26, 95, 31, 32, 18, 5, 65, 31, 26, 83, 92, 95, 16, 5, 37, 5, 81, 88, 95, 30, 57, 55, 83, 95, 95, 50, 50, 95, 31, 95, 30, 5, 5, 88, 83, 5, 87, 50, 65, 56, 22, 95, 85, 35, 62, 5, 95, 41, 95, 22, 95, 41, 0, 41, 95, 47, 26, 26, 6, 58, 65, 95, 92, 31, 95, 95, 65, 56, 31, 18, 95, 62, 15, 65, 95, 95, 65, 27, 88, 95, 95, 5], "sizemode": "area", "showscale": false, "colorscale": [[0, "#fd3216"], [0.043478260869565216, "#00fe35"], [0.08695652173913043, "#6a76fc"], [0.13043478260869565, "#fed4c4"], [0.17391304347826086, "#fe00ce"], [0.21739130434782608, "#0df9ff"], [0.2608695652173913, "#f6f926"], [0.30434782608695654, "#ff9616"], [0.34782608695652173, "#479b55"], [0.391304347826087, "#eea6fb"], [0.43478260869565216, "#dc587d"], [0.4782608695652174, "#d626ff"], [0.5217391304347826, "#6e899c"], [0.5652173913043478, "#00b5f7"], [0.6086956521739131, "#b68e00"], [0.6521739130434783, "#c9fbe5"], [0.6956521739130435, "#ff0092"], [0.7391304347826086, "#22ffa7"], [0.782608695652174, "#e3ee9e"], [0.8260869565217391, "#86ce00"], [0.8695652173913043, "#bc7196"], [0.9130434782608695, "#7e7dcd"], [0.9565217391304348, "#fc6955"], [1, "#e48f72"]], "maxdisplayed": 0, "reversescale": true}, "error_x": {"type": "percent", "color": "#1f77b4", "value": 10, "width": 4, "visible": false, "symmetric": true, "thickness": 2}, "hoveron": "points", "textsrc": "l144032:32:0ae786", "text": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "3DSdeals", "4chan", "AdviceAnimals", "AgainstHateSubreddits", "Agario", "Anarcho_Capitalism", "AnythingGoesNews", "ApocalypseRising", "AppNana", "AskReddit", "AskThe_Donald", "AskTrumpSupporters", "Ask_Politics", "Bad_Cop_No_Donut", "BasicIncome", "BlackPeopleTwitter", "COD_LFG", "CapitalismVSocialism", "Catholicism", "ClashOfClansRecruit", "ClickerHeroesRecruit", "Conservative", "CringeAnarchy", "Cynicalbrit", "DNCleaks", "DepthHub", "DirtySexyKikPals", "Documentaries", "Drama", "Economics", "EnoughLibertarianSpam", "EnoughTrumpSpam", "Enough_Sanders_Spam", "EvolveGame", "Firearms", "FreeCodeCamp", "Freeclams", "FulfillmentByAmazon", "Futurology", "GalaxyNote7", "GaryJohnson", "GetMotivated", "GiveMeTheVirus", "GunsAreCool", "HITsWorthTurkingFor", "Harambe", "HillaryForPrison", "HillaryMeltdown", "IAmA", "ImGoingToHellForThis", "Indiana", "Infographics", "Israel", "JavDownloadCenter", "Jokes", "JusticeServed", "Kossacks_for_Sanders", "KotakuInAction", "LSAT", "LateStageCapitalism", "LeafyIsHere", "League_Of_Legends_", "Liberal", "Libertarian", "LifeProTips", "MGTOW", "MMAStreams", "MTVScream", "MURICA", "MeanJokes", "MensRights", "Miami", "MotoX", "Music", "NeutralPolitics", "Nexus", "Nisekoi", "OldSchoolCool", "OutOfTheLoop", "POLITIC", "PanamaPapers", "PokemonGOToronto", "PokemonGoUK", "PoliticalDiscussion", "PoliticalHumor", "PoliticalVideo", "Political_Revolution", "PublicFreakout", "Republican", "RoyaleRecruit", "SAVEBRENDAN", "SRSsucks", "SandersForPresident", "SargonofAkkad", "Showerthoughts", "SocialEngineering", "SocialJusticeInAction", "SubredditDrama", "TheCreatures", "TheDivision_LFG", "TheRedPill", "TopMindsOfReddit", "TrueReddit", "TumblrInAction", "UpliftingNews", "UsenetInvites", "WTF", "WastedGifs", "WayOfTheBern", "WhatsInThisThing", "WhereIsAssange", "WikiLeaks", "ads", "announcements", "arizona", "atheism", "aww", "badeconomics", "bestof", "bestofworldstar", "books", "changemyview", "chanzhfsneakers", "civbattleroyale", "collapse", "conspiracy", "conspiratard", "cringe", "csgotrade", "dailyprogrammer", "dataisbeautiful", "datgap", "democrats", "dirtykikpals", "economy", "education", "energy", "explainlikeimfive", "facebook", "finance", "florida", "freedonuts", "funny", "gadgets", "galaxynote5", "galaxys5", "gaming", "geopolitics", "gifs", "hapas", "hillaryclinton", "inthenews", "jillstein", "kickasstorrents", "law", "marvelheroes", "megalinks", "metacanada", "michaelbaygifs", "microsoftsoftwareswap", "mildlyinteresting", "mindcrack", "moto360", "movies", "neutralnews", "news", "newsokur", "nottheonion", "opskins", "pics", "playarkservers", "pokemongoLondon", "pokemonuranium", "politics", "progun", "pussypassdenied", "reactiongifs", "russia", "saltandsanctuary", "samharris", "science", "security", "socialism", "space", "sports", "subredditcancer", "subredditoftheday", "syriancivilwar", "takecareofmyplant", "technology", "television", "texas", "the_meltdown", "tifu", "todayilearned", "undelete", "unpopularopinion", "urbanplanning", "videos", "worldnews", "worldpolitics"], "hoverinfo": "text", "showlegend": true, "stackgroup": "", "hovertextsrc": "l144032:32:0ae786", "hovertext": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "3DSdeals", "4chan", "AdviceAnimals", "AgainstHateSubreddits", "Agario", "Anarcho_Capitalism", "AnythingGoesNews", "ApocalypseRising", "AppNana", "AskReddit", "AskThe_Donald", "AskTrumpSupporters", "Ask_Politics", "Bad_Cop_No_Donut", "BasicIncome", "BlackPeopleTwitter", "COD_LFG", "CapitalismVSocialism", "Catholicism", "ClashOfClansRecruit", "ClickerHeroesRecruit", "Conservative", "CringeAnarchy", "Cynicalbrit", "DNCleaks", "DepthHub", "DirtySexyKikPals", "Documentaries", "Drama", "Economics", "EnoughLibertarianSpam", "EnoughTrumpSpam", "Enough_Sanders_Spam", "EvolveGame", "Firearms", "FreeCodeCamp", "Freeclams", "FulfillmentByAmazon", "Futurology", "GalaxyNote7", "GaryJohnson", "GetMotivated", "GiveMeTheVirus", "GunsAreCool", "HITsWorthTurkingFor", "Harambe", "HillaryForPrison", "HillaryMeltdown", "IAmA", "ImGoingToHellForThis", "Indiana", "Infographics", "Israel", "JavDownloadCenter", "Jokes", "JusticeServed", "Kossacks_for_Sanders", "KotakuInAction", "LSAT", "LateStageCapitalism", "LeafyIsHere", "League_Of_Legends_", "Liberal", "Libertarian", "LifeProTips", "MGTOW", "MMAStreams", "MTVScream", "MURICA", "MeanJokes", "MensRights", "Miami", "MotoX", "Music", "NeutralPolitics", "Nexus", "Nisekoi", "OldSchoolCool", "OutOfTheLoop", "POLITIC", "PanamaPapers", "PokemonGOToronto", "PokemonGoUK", "PoliticalDiscussion", "PoliticalHumor", "PoliticalVideo", "Political_Revolution", "PublicFreakout", "Republican", "RoyaleRecruit", "SAVEBRENDAN", "SRSsucks", "SandersForPresident", "SargonofAkkad", "Showerthoughts", "SocialEngineering", "SocialJusticeInAction", "SubredditDrama", "TheCreatures", "TheDivision_LFG", "TheRedPill", "TopMindsOfReddit", "TrueReddit", "TumblrInAction", "UpliftingNews", "UsenetInvites", "WTF", "WastedGifs", "WayOfTheBern", "WhatsInThisThing", "WhereIsAssange", "WikiLeaks", "ads", "announcements", "arizona", "atheism", "aww", "badeconomics", "bestof", "bestofworldstar", "books", "changemyview", "chanzhfsneakers", "civbattleroyale", "collapse", "conspiracy", "conspiratard", "cringe", "csgotrade", "dailyprogrammer", "dataisbeautiful", "datgap", "democrats", "dirtykikpals", "economy", "education", "energy", "explainlikeimfive", "facebook", "finance", "florida", "freedonuts", "funny", "gadgets", "galaxynote5", "galaxys5", "gaming", "geopolitics", "gifs", "hapas", "hillaryclinton", "inthenews", "jillstein", "kickasstorrents", "law", "marvelheroes", "megalinks", "metacanada", "michaelbaygifs", "microsoftsoftwareswap", "mildlyinteresting", "mindcrack", "moto360", "movies", "neutralnews", "news", "newsokur", "nottheonion", "opskins", "pics", "playarkservers", "pokemongoLondon", "pokemonuranium", "politics", "progun", "pussypassdenied", "reactiongifs", "russia", "saltandsanctuary", "samharris", "science", "security", "socialism", "space", "sports", "subredditcancer", "subredditoftheday", "syriancivilwar", "takecareofmyplant", "technology", "television", "texas", "the_meltdown", "tifu", "todayilearned", "undelete", "unpopularopinion", "urbanplanning", "videos", "worldnews", "worldpolitics"], "hovertemplate": "", "autocolorscale": false}, {"meta": {"columnNames": {"x": "A", "y": "B", "text": "C", "marker": {"color": "D"}}}, "mode": "markers", "name": "The_Donald", "type": "scatter", "xsrc": "l144032:33:0b9564", "x": ["4.340231418609619", "-7.405520439147949", "-6.434553623199463", "-4.7944746017456055", "-4.154315948486328", "-4.001982688903809", "0.7373628616333008", "8.864825248718262", "10.106398582458496", "10.17878532409668", "10.120452880859375", "9.97890567779541", "9.78709602355957", "9.48026180267334", "9.289132118225098", "9.086441993713379", "9.10101318359375", "9.46020221710205", "9.187005996704102", "9.25672721862793", "8.840112686157227", "8.53387451171875", "8.90005111694336", "8.587733268737793", "8.271425247192383", "8.123495101928711", "8.3363618850708", "8.50202751159668", "8.568818092346191", "8.37633228302002", "7.750200271606445", "8.136157035827637", "7.8837761878967285", "7.651477336883545", "7.537846088409424", "7.916423320770264", "7.524420261383057", "7.475193023681641", "7.625708103179932", "7.586328983306885"], "ysrc": "l144032:33:56d8ac", "y": ["-9.517786979675293", "10.348511695861816", "6.415597915649414", "2.5295662879943848", "2.006415367126465", "1.6096282005310059", "1.5044349431991577", "0.43072405457496643", "-0.7224677801132202", "-1.2113072872161865", "-1.29649817943573", "-1.3248683214187622", "-1.3996086120605469", "-0.8681763410568237", "-0.7294406294822693", "-0.7723088264465332", "-1.0933963060379028", "-1.9881072044372559", "-1.603157877922058", "-2.052700996398926", "-1.525300145149231", "-1.1088647842407227", "-2.1685574054718018", "-1.7946908473968506", "-1.3810601234436035", "-1.3264936208724976", "-1.6322687864303589", "-2.3433446884155273", "-2.361970901489258", "-2.2057275772094727", "-1.4146920442581177", "-2.344139337539673", "-1.9416191577911377", "-1.5860778093338013", "-1.7838165760040283", "-2.5231330394744873", "-2.045675277709961", "-2.1446330547332764", "-2.4279072284698486", "-2.5455422401428223"], "marker": {"cmin": 0, "line": {"width": 0}, "meta": {"columnNames": {"color": "D"}}, "size": 11, "cauto": true, "symbol": "circle", "opacity": 1, "colorbar": {"x": 0.9694047910645177, "y": 0.524390243902439, "ticks": "", "title": {"side": "right", "text": "<br>"}, "nticks": 3, "lenmode": "fraction", "xanchor": "left", "thickness": 7, "tickprefix": "", "ticksuffix": "th Month", "outlinecolor": "rgb(107, 107, 107)", "outlinewidth": 1, "thicknessmode": "pixels", "showticklabels": true, "showticksuffix": "all"}, "colorsrc": "l144032:33:283454", "color": ["0", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"], "showscale": false, "colorscale": [[0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1, "#f0f921"]], "reversescale": false}, "textsrc": "l144032:33:da4e44", "text": ["The_Donald 06\/15", "The_Donald 07\/15", "The_Donald 08\/15", "The_Donald 09\/15", "The_Donald 10\/15", "The_Donald 11\/15", "The_Donald 12\/15", "The_Donald 01\/16", "The_Donald 02\/16", "The_Donald 03\/16", "The_Donald 04\/16", "The_Donald 05\/16", "The_Donald 06\/16", "The_Donald 07\/16", "The_Donald 08\/16", "The_Donald 09\/16", "The_Donald 10\/16", "The_Donald 11\/16", "The_Donald 12\/16", "The_Donald 01\/17", "The_Donald 03\/17", "The_Donald 04\/17", "The_Donald 05\/17", "The_Donald 06\/17", "The_Donald 07\/17", "The_Donald 08\/17", "The_Donald 09\/17", "The_Donald 10\/17", "The_Donald 11\/17", "The_Donald 12\/17", "The_Donald 01\/18", "The_Donald 02\/18", "The_Donald 03\/18", "The_Donald 04\/18", "The_Donald 05\/18", "The_Donald 06\/18", "The_Donald 07\/18", "The_Donald 08\/18", "The_Donald 09\/18", "The_Donald 10\/18"], "hoverinfo": "text", "stackgroup": null, "autocolorscale": false}],
        layout: {"title": {"x": 0.5, "font": {"size": 20, "family": "Courier New"}, "text": ""}, "xaxis": {"type": "linear", "range": [-11.985879228579263, 11.575454105040324], "domain": [0, 1], "showgrid": false, "showline": false, "zeroline": false, "autorange": false, "showspikes": false, "showticklabels": false}, "yaxis": {"type": "linear", "range": [-17.98574614095127, 19.36692169159477], "title": {"text": "Click to enter Y axis title"}, "showgrid": false, "showline": false, "zeroline": false, "autorange": false, "showspikes": false, "showticklabels": false}, "legend": {"x": 0.7999186343174051, "y": 0.7707317073170732, "yanchor": "bottom", "traceorder": "normal", "borderwidth": 0}, "margin": {"t": 100}, "shapes": [], "modebar": {"orientation": "h"}, "autosize": true, "colorway": ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"], "dragmode": "select", "hovermode": "closest", "hoverlabel": {"font": {"family": "Courier New"}}, "showlegend": false, "annotations": []},
        frames: [],
        config: {"showLink": true, "linkText": "Export to plot.ly", "mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A"}
    });

    removeLoader('tde-loader');
}());