//INSERTAR FECHAS DE LOS CONCIERTOS O EVENTOS SIGUIENDO EL SIGUIENTE FORMATO:
// 'mm-dd-aaaa' : '<span>TEXTO</span>'  //dentro el span dividir en parrafos, o con vinculos, como mejor sea segun el caso
//siempre escribirlos en una unica linea

var codropsEvents = {
	
	'03-28-2013' : '<span><h3>Basílica de Luján</h3><p>San Martín 51, Luján (Pcia. de Buenos Aires)</p><p>Ariel Ramírez: Misa Criolla</p><p>Con Jaime Torres, Jairo, Anacrusa.</p><p>Plan Nacional Igualdad Cultural, impulsado por el Ministerio de Planificación Federal, Inversión Pública y Servicios, y la Secretaría de Cultura de la Presidencia de la Nación</p><a href="www.cultura.gob.ar">www.cultura.gob.ar</a></span>',

	'04-13-2013' : '<span><h3>FESTIVALES MUSICALES DE BS.AS.</h3><p>IGLESIA METODISTA CENTRAL 18.00 hs.</p><p>Av. Rivadavia 4050</p><p>Bach y la Corte de Dresde</p><p>F. M. VERACINI</p><p>Obertura VI en Sol menor (1ra. Aud.)</p><p>2 oboes, fagot, cuerdas y bajo continuo</p><p>SERMISY / CALVISIUS </p><p>H. SCHÜTZ </p><p>Historia del Coral</p><p>"Was mein Gott will, das g scheh allzeit"</p><p>coro e instrumentos</p><p>J. S. BACH</p><p>CANTATA BWV 111</p><p>Was mein Gott will, das g scheh allzeit</p><p>(Lo que Dios quiere, siempre sucede) (1ra. Aud.)</p><p>solistas, coro, 2 oboes, cuerdas y bajo continuo</p><p>Solistas de la Academia Bach</p><p>Dirección y comentarios: Mario Videla</p><a href="http://www.festivalesmusicales.org.ar/academia.html">FESTIVALES MUSICALES</a></span>',	

	'06-01-2013' : '<span><h3>PREVIA A LA GIRA EUROPEA 2013</h3><h3>Iglesia Nórdica de Buenos Aires 20 hs.</h3><p>Azopardo 1428-CABA</p></span>',	
	'06-02-2013' : '<span><h3>PREVIA A LA GIRA EUROPEA 2013</h3><h3>Congregación Evangélica Alemana 20.30 hs.</h3><p>Parroquia Belgrano</p><p>Sucre 2855-CABA</p></span>',	
	'06-04-2013' : '<span><h3>PREVIA A LA GIRA EUROPEA 2013</h3><h3>Primera Iglesia Metodista 20 hs.</h3><p>Corrientes 718-CABA</p></span>',	
	'06-08-2013' : '<span><h3>PREVIA A LA GIRA EUROPEA 2013</h3><h3>Escuela Rosario Vera Peñaloza 18 hs.</h3><p>Pringles 1165-CABA</p></span>',	
	'06-09-2013' : '<span><h3>PREVIA A LA GIRA EUROPEA 2013</h3><h3>Congregación Evangélica Alemana 18 hs.</h3><p>Parroquia Olivos</p><p>Avellaneda 1541</p><p>Florida, Pcia. de Bs. As.</p></span>',	

	'06-13-2013' : '<span><a href="http://chorbiennale.com/alle-choere/grupo-de-canto-coral-aus-buenos-aires-gcc/"><img src="img/chor.png"/></a><h3>GIRA EUROPEA 2013</h3><h3>INTERNATIONALE CHORBIENNALE AACHEN 2013 12.30 hs.</h3><p>Lunchkonzert 1</p><p>Krönungssaal, Rathaus - Markt, 52062 Aachen</p></span>',	
	'06-14-2013' : '<span><a href="http://chorbiennale.com/alle-choere/grupo-de-canto-coral-aus-buenos-aires-gcc/"><img src="img/chor.png"/></a><h3>GIRA EUROPEA 2013</h3><h3>INTERNATIONALE CHORBIENNALE AACHEN 2013 10.00 hs.</h3><p>FREIE WALDORFSCHULE AACHEN</p><p>Anton-Kurze-Allee 10, 52064 Aachen</p></span>',	
	'06-17-2013' : '<span><a href="http://chorbiennale.com/alle-choere/grupo-de-canto-coral-aus-buenos-aires-gcc/"><img src="img/chor.png"/></a><h3>GIRA EUROPEA 2013</h3><h3>INTERNATIONALE CHORBIENNALE AACHEN 2013 20.00 hs.</h3><h3>Choral-Symphonic Concert</h3><p>Sinfonieorchester Aachen, Cond.Kazem Abdullah</p><p>Eurogress Aachen - Monheimsallee 48</p><p>D - 52062 Aachen</p></span>',	
	'06-18-2013' : '<span><a href="http://chorbiennale.com/alle-choere/grupo-de-canto-coral-aus-buenos-aires-gcc/"><img src="img/chor.png"/></a><h3>GIRA EUROPEA 2013</h3><h3>INTERNATIONALE CHORBIENNALE AACHEN 2013 20.00 hs.</h3><h3>Mater Gloriosa – Mater Dolorosa</h3><p>Der Junge Chor Aachen, Cond.: Fritz ter Wey</p><p>Aula Carolina - Pontstraße 7–9, 52062 Aachen</p></span>',	
	
	'06-20-2013' : '<span><img src="img/ministerio.png"/><h3>GIRA EUROPEA 2013</h3><h3>GCC-Grupo de Canto Coral - Choeur Mélanges</h3><p>Église Luthérienne de la Rédemption<p></p><p>16 Rue Chauchat 75009 Paris 09</p></span>',	
	'06-21-2013' : '<span><img src="img/ministerio.png"/><h3>GIRA EUROPEA 2013</h3><h3>Maison De L Argentine</h3>20:00 hs.<h3></h3><p>GCC- Grupo de Canto Coral, Dir.: Néstor Andrenacci</p><p>Cité Internationale Universitaire</p><p>27 A Boulevard Jourdan, 75014 Paris</p></span>',
	'06-22-2013' : '<span><img src="img/ministerio.png"/><h3>GIRA EUROPEA 2013</h3><h3>Maison De L Argentine</h3>20:00 hs.<h3></h3><p>GCC- Grupo de Canto Coral, Dir.: Néstor Andrenacci</p><p>Cité Internationale Universitaire</p><p>27 A Boulevard Jourdan, 75014 Paris</p></span>',	

	'07-28-2013' : '<span><h3>PARROQUIA MARTÍNEZ DE LA CEABA 18.30 hs.</h3><p>Santa Rosa 450, Martínez, Pcia. de Buenos Aires</p><p>Obras de: Manuel Oltra, Mariano Moruja, Ralph Vaughn Williams, </p><p>Martín Liut, Luigi Dallapiccola, Mariano Mores y Ástor Piazzolla</p><p>GCC - Grupo de Canto Coral, Dir. Néstor Andrenacci</p></span>',	
	'08-04-2013' : '<span><h3>USINA DEL ARTE 11.30 hs.</h3><p>Caffarena 1, esquina Av. Pedro de Mendoza, CABA</p><p>CICLO DE MÚSICA DE CÁMARA: CONCIERTO XXXIII</p><p>Obras de: Manuel Oltra, Mariano Moruja, Ralph Vaughn Williams, </p><p>Martín Liut, Luigi Dallapiccola, Mariano Mores y Ástor Piazzolla</p><p>GCC - Grupo de Canto Coral, Dir. Néstor Andrenacci</p></span>',	
	'08-29-2013' : '<span><h5>19.00 hs.</h5><p>Iglesia Presbiteriana San Andrés - Av. Belgrano 579, CABA</p><p>“1er. Ciclo Nacional de Música de Cámara” ”Tres siglos de música coral”</p><p>Programa:</p><p>J. S. BACH</p><p>Motete "Lobet den Herren" BWV 230</p><p>F. MENDELSSOHN</p><p>Salmo "Warum toben die Heiden" Op.78</p><p>M. OLTRA</p><p>"Tres canciones de amor": 1. Madrigalillo - 2. Eco - 3. Preludio</p><p>"Tres andaluzas": 1. Canción de jinete - 2. Es verdad - 3. Arbolé, arbolé</p><p>R. VAUGHAN WILLIAMS</p><p>"Three Shakespeare Songs": 1. Full fathom five - 2. The cloud-cappe’d towers - 3. Over hill, over dale</p><p>L. DALLAPICCOLA</p><p>"Il coro delle malmaritate"</p><p>"Il coro dei malammogliati"</p><p>A. PIAZZOLLA</p><p>"Milonga del Ángel"</p><p>M. MORES"Taquito militar"</p></span>',
	'09-10-2013' : '<span><h3>21.30 hs.</h3><p>Colegio Nº 16 D.E. 15 "Guillermo Rawson" Nº: 16 - D. E.: 15 - Avda. Triunvirato 4992, CABA</p></span>',	
	'09-28-2013' : '<span><h3>IGLESIA METODISTA CENTRAL 18 hs.</h3><p>Av. Rivadavia 4050</p><p>Festivales Musicales de Buenos Aires CICLO 2013 / Bach y la Corte de Dresde</p><p>Obras para coro y doble coro</p><p>A. LOTTI</p><p>Misa en La mayor</p><p>J. S. BACH Motete "Lobet den Herren" BWV 230F. MENDELSSOHN</p><p>Salmo "Warum toben die Heiden" Op.78J. BRAHMS</p><p>Fest und Gedenksprüche Op.1091. Unsere Väter hofften auf dich2. Wenn ein starker Gewappneter3. Wo ist ein so herrlich VolkGCC - Grupo de Canto Coral, Dir. Néstor Andrenacci</p><p>Comentarios: Mario Videla</p><a href="http://www.festivalesmusicales.org.ar/academia.html">FESTIVALES MUSICALES</a></span>',
	'09-29-2013' : '<span><h3>IGLESIA SAN VICENTE DE PAUL 20hs.</h3><p>Manuel Artigas 6150 (CABA - Mataderos)</p></span>',

	'11-23-2013' : '<span><h3>Iglesia Evangélica Metodista de Flores</h3><h4>19hs Yerbal 2451</h4><p>(entre Gral J.J. Artigas y Fray Cayetano Rodríguez, frente a la Plaza Flores)</p></span>',	
	'11-24-2013' : '<span><h3>IGLESIA NUESTRA SEÑORA DE LUJAN</h3><h4>18hs. Av. Libertador 3675</h4><p>Colegio Card. Copello</p><p>(Bs.As. prov. - Victoria)</p></span>',
	'11-25-2013' : '<span><h3>Parroquia San Pablo Apóstol</h3><h4>19.30hs Av. Álvarez Thomas 795</h4><p>(Alvarez Thomas y Palpa)</p><p>CABA</p></span>',	
	
	'12-01-2013' : '<span><h3>Parroquia San Bernardo</h3><h4>20.30hs Gurruchaga 165</h4><p>(entre Murillo y Muñecas)</p><p>CABA</p></span>'


};

