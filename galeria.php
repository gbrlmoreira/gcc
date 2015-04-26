<?php

    $actual_url = "$_SERVER[REQUEST_URI]";
    $imgDir = 'img/galeria';

    foreach (glob($imgDir . '/*.*', GLOB_BRACE) as $foto) {   

        $fotos[] = $foto;
    }     
    $cantidadFotos = count($fotos);
    $cont = $cantidadFotos;


?>
<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>GCC - Grupo de Canto Coral</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="shortcut icon" href="GCCico.ico">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link href="css/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css"/>
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    
    </head>
    <body>

        <div id="logofondo"></div>
        <div id="fondo">
            <div id="placa-transparente"></div> 
            <div id="cont-centro">
                <div id="perspectiva">
                    <div id="navegador">
                    <a href="coro.html">
                        <div id="coro" class="cont-prisma">
                            <div class="prisma">
                                <div class="face-A one"><img src="img/coro.jpg"></div>
                                <div class="face-A three"><p>El coro</p></div>
                            </div>
                        </div>
                    </a>
                    <a href="director.html">
                        <div id="director" class="cont-prisma">
                            <div class="prisma">
                                <div class="face-A one"><img src="img/director.jpg"></div>
                                <div class="face-A three"><p>Director</p></div>
                            </div>
                        </div>
                    </a>
                    <a href="temporada.html">
                        <div id="temporada" class="cont-prisma">
                            <div class="prisma">
                                <div class="face-A one"><img src="img/temporada.jpg"></div>
                                <div class="face-A three"><p>Temporada</p></div>
                            </div>
                        </div>
                    </a>
                    <a href="archivos.html">
                        <div id="archivos" class="cont-prisma">
                            <div class="prisma">
                                <div class="face-A one"><img src="img/archivos.jpg"></div>
                                <div class="face-A three"><p>Archivos</p></div>
                            </div>
                        </div>
                    </a>
                    <a href="benefactores.html">
                        <div id="benefactores" class="cont-prisma">
                            <div class="prisma">
                                <div class="face-A one"><img src="img/benefactores.jpg"></div>
                                <div class="face-A three"><p>Benefactores</p></div>
                            </div>
                        </div>
                    </a>
                    <a href="audio.html">
                        <div id="audio" class="cont-prisma">
                            <div class="prisma">
                                <div class="face-A one"><img src="img/audio.jpg"></div>
                                <div class="face-A three"><p>Audio</p></div>
                            </div>
                        </div>
                    </a>
                    <a href="galeria.php">
                        <div id="galeria" class="cont-prisma">
                            <div class="prisma">
                                <div class="face-A one"><img src="img/galeria.jpg"></div>
                                <div class="face-A three"><p>Galeria</p></div>
                            </div>
                        </div>
                    </a>
                    <a href="novedades.html">
                        <div id="novedades" class="cont-prisma">
                            <div class="prisma">
                                <div class="face-A one"><img src="img/novedades.jpg"></div>
                                <div class="face-A three"><p>Novedades</p></div>
                            </div>  
                        </div> 
                    </a>   
                    </div>                
                    <div id="persp-social">
                        <a target="_blank" href="https://www.facebook.com/events/208502872643049/?fref=ts"> 
                            <div class="cont-social">
                                <div id="facebook" class="cubo">
                                    <div class="face-B one"><img src="img/social/facebook1.jpg" alt="Facebook"></div>
                                    <div class="face-B two"><img src="img/social/facebook2.jpg" alt="Facebook"></div>
                                    <div class="face-B three"></div>
                                    <div class="face-B four"></div>
                                    <div class="face-B five"></div>
                                    <div class="face-B six"></div> 
                                </div>
                            </div>
                        </a>    
                        <a target="_blank" href="http://www.youtube.com/user/Grupodecantocoral"> 
                            <div class="cont-social">
                                <div id="youtube" class="cubo">
                                    <div class="face-B one"><img src="img/social/youtube1.jpg" alt="YouTube"></div>
                                    <div class="face-B two"><img src="img/social/youtube2.jpg" alt="YouTube"></div>
                                    <div class="face-B three"></div>
                                    <div class="face-B four"></div>
                                    <div class="face-B five"></div>
                                    <div class="face-B six"></div> 
                                </div>
                            </div>   
                        </a>    
                        <a target="_blank" href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Fwww.gcc.org.ar%2Fcamara%2Fcamara.htm&region=follow_link&screen_name=GCCNoticias&tw_p=followbutton&variant=2.0"> 
                            <div class="cont-social">
                                <div id="twitter" class="cubo">
                                    <div class="face-B one"><img src="img/social/twitter1.jpg" alt="Twitter"></div>
                                    <div class="face-B two"><img src="img/social/twitter2.jpg" alt="Twitter"></div>
                                    <div class="face-B three"></div>
                                    <div class="face-B four"></div>
                                    <div class="face-B five"></div>
                                    <div class="face-B six"></div> 
                                </div>
                            </div>
                        </a>    
                        <a target="_blank" href="https://soundcloud.com/gcc-grupo-de-canto-coral"> 
                            <div class="cont-social">
                                <div id="soundcloud" class="cubo">
                                    <div class="face-B one"><img src="img/social/soundcloud1.jpg" alt="SoundCloud"></div>
                                    <div class="face-B two"><img src="img/social/soundcloud2.jpg" alt="SoundCloud"></div>
                                    <div class="face-B three"></div>
                                    <div class="face-B four"></div>
                                    <div class="face-B five"></div>
                                    <div class="face-B six"></div> 
                                </div>
                            </div> 
                        </a>    
                        <a target="_blank" href="https://myspace.com/gccgrupodecantocoral"> 
                            <div class="cont-social">
                                <div id="myspace" class="cubo">
                                    <div class="face-B one"><img src="img/social/myspace1.jpg" alt="MySpace"></div>
                                    <div class="face-B two"><img src="img/social/myspace2.jpg" alt="MySpace"></div>
                                    <div class="face-B three"></div>
                                    <div class="face-B four"></div>
                                    <div class="face-B five"></div>
                                    <div class="face-B six"></div> 
                                </div>
                            </div>
                        </a>    
                    </div>
                </div>           
                <div id="contenido">
                <?php

                    print '<div id=colFotos">';

                    for ($j=1; $j <= $cantidadFotos; $j++) { 

                        print'<div class="foto-cont"><img class="foto" src="'.$fotos[$cont].'"/></div>';
                        $cont = $cont - 1;
                    }

                    print '</div>';

                ?>                
                </div>
                <div id="pie">
                    <li id="idiomas">
                        <ul><img src="img/banderas/esp.png" alt="Español"></ul>
                        <ul><img src="img/banderas/ing.png" alt="English"></ul>
                        <ul><img src="img/banderas/fra.png" alt="Français"></ul>
                        <ul id="inicio"><a href="http://www.gcc.org.ar"><img src="img/inicio.png" alt="Ir al inicio"></a></ul>
                        <ul id="mail"><a href="mailto:gcc@fibertel.com.ar"><img src="img/mail.png" alt="Contactanos"></a></ul>
                    </li>
                </div>
            </div>   
        </div>
                        
        <script src="js/vendor/jquery-1.10.2.min.js"></script>
        <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>    
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>
