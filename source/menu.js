/*Pole pre nacítanie menu*/

var menulinks = [   

                {   "title": "Domov",
                    "icon": "icon-home",
                    "link":"",
                    "sub":  [   
                                {
                                    "title": "stest",
                                    "link": "linka",
                                    "sub":  [   
                                                {
                                                    "title": "sstest2",
                                                    "link": "linka2"
                                                },
                                                {
                                                    "title": "sstest2",
                                                    "link": "linka2"
                                                },
                                                {
                                                    "title": "sstest2",
                                                    "link": "linka2"
                                                }                                                                                                
                                            ]                                    
                                },
                                {
                                    "title": "stest",
                                    "link": "linka",
                                    "sub":  [   
                                                {
                                                    "title": "test2",
                                                    "link": "linka2"
                                                }
                                            ]                                    
                                },
                                {
                                    "title": "stest",
                                    "link": "linka",
                                    "sub":  [   
                                                {
                                                    "title": "test2",
                                                    "link": "linka2"
                                                }
                                            ]                                    
                                }                                                                
                            ]
                },
                {   "title": "Tím",
                    "icon": "icon-users",
                    "link":"",
                    "sub":  [   
                                {
                                    "title": "Štefan",
                                    "link": "tim-stefan.html"                                 
                                },
                                {
                                    "title": "Martin",
                                    "link": "tim-martin.html"                                 
                                },
                                {
                                    "title": "Erik",
                                    "link": "tim-erik.html"                                 
                                },
                                {
                                    "title": "Peťo",
                                    "link": "tim-peto.html"                                 
                                },
                                {
                                    "title": "Andrej",
                                    "link": "tim-andrej.html"                                 
                                }                                                                                                                         
                            ]  
                },
                {   "title": "Individuálne úlohy",
                    "icon": "icon-books",
                    "link":""
                },
                {   "title": "Pamiatky",
                    "icon": "icon-compass",
                    "link":""                  
                },
                {   "title": "Kto čo robil",
                    "icon": "icon-accessibility",
                    "link":""
                },
                {   "title": "Pripomienkovač",
                    "icon": "icon-alarm",
                    "link":""
                }

                ];

$(document).ready(function() {

    jQuery.each( menulinks, function( index, el ) {

        if ( el.sub ) {

            var html = '<ul class="subhead">';

            jQuery.each( el.sub, function( indexx, ell ) {

                if (ell.sub) {

                    var html2 = '<ul class="sub">';
                    jQuery.each( ell.sub, function( indexxx, elll ) {
                        html2 += '<li class="lisubsub"><a href="'+elll.link+'">'+elll.title+'</a></li>';
                    });
                    html2 += '</ul>';

                    html += '<li class="lisub"><a href="'+ell.link+'">'+ell.title+'</a>'+html2+'</li>';
                } else {
                    html += '<li class="lisub"><a href="'+ell.link+'">'+ell.title+'</a></li>';
                }

            });

            html += '</ul>';
            
            $("#navi").append('<li class="lihead"><a href="'+el.link+'"> <span class="'+el.icon+'"></span>'+el.title+'</a>'+html+'</li>')
        } else {
            $("#navi").append('<li class="lihead"><a href="'+el.link+'"> <span class="'+el.icon+'"></span> '+el.title+'</a></li>');
        }

    });

});