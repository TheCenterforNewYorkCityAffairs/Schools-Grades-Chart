	var diameter = '71vw',
	width = '84vw',
	height= '71vw';

	// var vertical = ["7vw","14vw","21vw","28vw","35vw","42vw","49vw","56vw","63vw"];

	// Search is taken from an Aaron Hill code. 

	var horizontal = ["hLine0","hLine1","hLine2"];

	var vertical = ["line0","line1","line2","line3","line4","line5","line6","line7","line8"];


		var substringMatcher = function(strs) {
  			return function findMatches(q, cb) {
    		var matches, substrRegex;
 
   			 // an array that will be populated with substring matches
   			matches = [];
 
    // regex used to determine if a string contains the substring `q`
   			substrRegex = new RegExp(q, 'i');
 
    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
   			 $.each(strs, function(i, str) {
      			if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
       		 matches.push({ value: str });
    	  }
    });
 
    cb(matches);
  };
};

var searchInput = function () {

    var toCheck = document.getElementsByClassName('tt-input')[0].value;
    
    if (toCheck != '') {
    
    for (var i = 0; i < schools.length; i++) {
    
        if (toCheck === schools[i]) {
        
            schoolNow = schools[i];
            transitionHandle(i)
            document.getElementById('schoolName').textContent = schoolNow; 
            document.getElementsByClassName('tt-input')[0].value = ''; 
            document.getElementById('notFound').textContent = '';
            break; 
        
        }
        
        else {
        
            document.getElementById('notFound').textContent = '"' + toCheck + '"' + " not found. Search again.";
            document.getElementsByClassName('tt-input')[0].value = ''; 
        
        } 
    
    }
    }


		$('#schoolSearch .typeahead').typeahead({
		  hint: true,
		  highlight: true,
		  minLength: 1
		},
		{
		  name: 'schools',
		  displayKey: 'value',
		  source: substringMatcher(schools)
		});

		var searchButton = document.getElementById('button'); 
		searchButton.addEventListener('click', searchInput);


}

// event listener on enter not yet working
// document.addEventListener('keypress', function (e) {
//     var key = e.which || e.keyCode;
//     if (key == 13) { // 13 is enter
//       searchInput()
//     }
// });

var schools = ["P.S. 015 Roberto Clemente","P.S. 019 Asher Levy","P.S. 020 Anna Silver","P.S. 034 Franklin D. Roosevelt","The STAR Academy - P.S.63","P.S. 064 Robert Simon","P.S. 110 Florence Nightingale","P.S. 134 Henrietta Szold","P.S. 137 John L. Bernstein","P.S. 140 Nathan Straus","P.S. 142 Amalia Castro","P.S. 184m Shuang Wen","P.S. 188 The Island School","Henry Street School for International Studies","Technology, Arts, and Sciences Studio","The East Village Community School","University Neighborhood Middle School","Collaborative Academy of Science, Technology, & Language-Arts Education","The Children's Workshop School","Neighborhood School","Earth School","School for Global Leaders","University Neighborhood High School","East Side Community School","Forsyth Satellite Academy","Marta Valle High School","Lower East Side Preparatory High School","New Explorations into Science, Technology and Math High School","Cascades High School","Bard High School Early College","Tompkins Square Middle School","P.S. 001 Alfred E. Smith","P.S. 002 Meyer London","P.S. 003 Charrette School","P.S. 006 Lillie D. Blake","P.S. 011 William T. Harris","P.S. 033 Chelsea Prep","P.S. 040 Augustus Saint-Gaudens","P.S. 041 Greenwich Village","P.S. 042 Benjamin Altman","47 The American Sign Language and English Secondary School","P.S. 051 Elias Howe","P.S. 059 Beekman Hill International","P.S. 77 Lower Lab School","P.S. 89","J.H.S. 104 Simon Baruch","P.S. 111 Adolph S. Ochs","East Side Middle School","P.S. 116 Mary Lindley Murray","P.S. 124 Yung Wing","P.S. 126 Jacob August Riis","P.S. 130 Hernando De Soto","M.S. 131","The Urban Assembly School for Emergency Management","Stephen T. Mather Building Arts & Craftsmanship High School","P.S. 150","Yorkville Community School","P.S. 158 Bayard Taylor","J.H.S. 167 Robert F. Wagner","P.S. 183 Robert L. Stevenson","P.S. 198 Isador E. Ida Straus","P.S. 212 Midtown West","P.S./I.S. 217 Roosevelt Island","Ella Baker School","P.S. 234 Independence School","M.S. 255 Salk School of Science","M.S. 260 Clinton School Writers & Artists","East Side Elementary School, PS 267","BATTERY PARK CITY SCHOOL","The River School","Food and Finance High School","I.S. 289","P.S. 290 Manhattan New School","Essex Street Academy","High School of Hospitality Management","Pace High School","Urban Assembly School of Design and Construction, The","Facing History School, The","Urban Assembly Academy of Government and Law, The","Lower Manhattan Arts Academy","New York City Lab Middle School for Collaborative Studies","James Baldwin School, The: A School for Expeditionary Learning","Urban Assembly School of Business for Young Women, the","The Peck Slip School","The 47 American Sign Language & English Lower School","Gramercy Arts High School","NYC iSchool","MANHATTAN BUSINESS ACADEMY","BUSINESS OF SPORTS SCHOOL","EMMA LAZARUS HIGH SCHOOL","SPRUCE STREET SCHOOL","THE HIGH SCHOOL FOR LANGUAGE AND DIPLOMACY","High School for Environmental Studies","Institute for Collaborative Education","Professional Performing Arts High School","Baruch College Campus High School","N.Y.C. Lab School for Collaborative Studies","School of the Future High School","N.Y.C. Museum School","Eleanor Roosevelt High School","Millennium High School","Landmark High School","High School for Health Professions and Human Services","Quest to Learn","Leadership and Public Service High School","MANHATTAN ACADEMY FOR ARTS & LANGUAGE","Legacy School for Integrated Studies","Murray Hill Academy","Hudson High School of Learning Technologies","International High School at Union Square","Manhattan Village Academy","Ballet Tech, NYC Public School for Dance","Vanguard High School","Manhattan International High School","Washington Irving High School","Stuyvesant High School","High School of Economics and Finance","Unity Center for Urban Technologies","Urban Assembly Gateway School for Technology","Talent Unlimited High School","Murry Bergtraum High School for Business Careers","PS 527 - East Side School for Social Action","Jacqueline Kennedy Onassis High School","Repertory Company High School for Theatre Arts","Union Square Academy for Health Sciences","Harvest Collegiate High School","Manhattan Bridges High School","New Design High School","Independence High School","High School for Dual Language and Asian Studies","Academy for Software Engineering","Liberty High School Academy for Newcomers","Urban Assembly New York Harbor School","High School M560 - City As School","Urban Academy Laboratory High School","Satellite Academy High School","Manhattan Comprehensive Night and Day High School","Richard R. Green High School of Teaching","Harvey Milk High School","The High School of Fashion Industries","Humanities Preparatory Academy","Chelsea Career and Technical Education High School","Norman Thomas High School","High School of Graphic Communication Arts","Art and Design High School","Life Sciences Secondary School","Lower Manhattan Community Middle School","P.S. 009 Sarah Anderson","J.H.S. 054 Booker T. Washington","P.S. 075 Emily Dickinson","P.S. 076 A. Philip Randolph","P.S. 084 Lillian Weber","P.S. 087 William Sherman","P.S. 145, The Bloomingdale School","P.S. 149 Sojourner Truth","P.S. 163 Alfred E. Smith","P.S. 165 Robert E. Simon","P.S. 166 The Richard Rodgers School of The Arts and Technology","P.S. 180 Hugo Newman","P.S. 185 - The Early Childhood Discovery and Design Magnet School","P.S. 191 Amsterdam","P.S. 199 Jessie Isador Straus","P.S. 208 Alain L. Locke","STEM Institute of Manhattan","P.S. 242 - The Young Diplomats Magnet Academy","M.S. 243 Center School","M.S. M245 The Computer School","M.S. M247 Dual Language Middle School","M.S. 250 West Side Collaborative Middle School","M.S. 256 Academic & Athletic Excellence","Community Action School - MS 258","Manhattan Theatre Lab High School","High School for Arts, Imagination and Inquiry","Urban Assembly School for Media Studies, The","P.S. 333 Manhattan School for Children","The Anderson School","The Urban Assembly School for Green Careers","The Global Learning Collaborative","Innovation Diploma Plus","Wadleigh Secondary School for the Performing & Visual Arts","FRANK McCOURT HIGH SCHOOL","West Prep Academy","P.S. 452","Beacon High School","Fiorello H. LaGuardia High School of Music & Art and Performing Arts","High School for Law, Advocacy and Community Justice","High School of Arts and Technology","Edward A. Reynolds West Side High School","Manhattan / Hunter Science High School","Special Music School","Frederick Douglass Academy II Secondary School","Mott Hall II","P.S. 007 Samuel Stern","Tag Young Scholars","J.H.S. 013 Jackie Robinson","River East Elementary","P.S. 38 Roberto Clemente","P.S. 050 Vito Marcantonio","James Weldon Johnson","The Lexington Academy","P.S. 083 Luis Munoz Rivera","P.S. 096 Joseph Lanzetta","P.S. 102 Jacques Cartier","P.S. 108 Assemblyman Angelo Del Toro Educational Complex","P.S. 112 Jose Celso Barbosa","P.S. 146 Ann M. Short","P.S. 155 William Paca","P.S. 171 Patrick Henry","The Bilingual Bicultural School","P.S. 206 Jose Celso Barbosa","M.S. 224 Manhattan East School for Arts & Academics","ESPERANZA PREPARATORY ACADEMY","Mosaic Preparatory Academy","Renaissance School of the Arts","Global Neighborhood Secondary School","Global Technology Preparatory","Coalition School for Social Change","Manhattan Center for Science and Mathematics","Park East High School","Central Park East I","Central Park East High School","Young Women's Leadership School","Academy for Environmental Science Secondary School","Heritage School, The","Isaac Newton Middle School for Math & Science","Central Park East II","P.S. 030 Hernandez/Hughes","P.S. 036 Margaret Douglas","P.S. 046 Arthur Tappan","P.S. 092 Mary McLeod Bethune","P.S. 123 Mahalia Jackson","P.S. 125 Ralph Bunche","P.S. 129 John H. Finley","P.S. 133 Fred R Moore","Eagle Academy for Young Men of Harlem","P.S. 154 Harriet Tubman","The Urban Assembly School for Global Commerce","P.S. 161 Pedro Albizu Campos","P.S. 175 Henry H Garnet","P.S. 194 Countee Cullen","P.S. 197 John B. Russwurm","P.S. 200- The James Mccune Smith School","Harlem Renaissance High School","I.S. M286 Renaissance Leadership Academy","KAPPA IV","Mott Hall High School","Thurgood Marshall Academy Lower School","Columbia Secondary School","Academy for Social Action: A College Board School","Urban Assembly School for the Performing Arts","The Urban Assembly Institute for New Technologies","Choir Academy of Harlem","Frederick Douglass Academy","New Design Middle School","Teachers College Community School","Thurgood Marshall Academy for Learning and Social Change","Bread & Roses Integrated Arts High School","High School for Mathematics, Science and Engineering at City College","P.S. 004 Duke Ellington","P.S. 005 Ellen Lurie","P.S. 008 Luis Belliard","P.S. 018 Park Terrace","P.S. 028 Wright Brothers","P.S. 048 P.O. Michael J. Buczek","J.H.S. 052 Inwood","P.S. 098 Shorac Kappock","Dos Puentes Elementary School","P.S. 115 Alexander Humboldt","P.S. 128 Audubon","P.S. 132 Juan Pablo Duarte","J.H.S. 143 Eleanor Roosevelt","P.S. 152 Dyckman Valley","P.S. 153 Adam Clayton Powell","P.S. 173","Professor Juan Bosch Public School","P.S./I.S. 187 Hudson Cliffs","P.S. 189","P.S. 192 Jacob H. Schiff","P.S./I.S. 210 - Twenty-first Century Academy for Community Leadership","I.S. 218 Salome Urena","The Mott Hall School","Paula Hedbavny School","City College Academy of the Arts","Amistad Dual Language School","Muscota","M.S. 319 - Maria Teresa","Middle School 322","M.S. 324 - Patria Mirabal","P.S. 325","M.S. 326 - Writers Today & Leaders Tomorrow","M.S. 328 - Manhattan Middle School for Scientific Inquiry","Community Health Academy of the Heights","Washington Heights Expeditionary Learning School","Harbor Heights","Washington Heights Academy","Hamilton Heights School","High School for Excellence and Innovation","The College Academy","High School for Media and Communications","High School for Law and Public Service","High School for Health Careers and Sciences","Castle Bridge School","I.S. 528 Bea Fuller Rodgers School","A. Philip Randolph Campus High School","Gregorio Luperon High School for Science and Mathematics","P.S. 001 Courtlandt School","PS 5 Port Morris","P.S. 018 John Peter Zenger","P.S. 025 Bilingual School","P.S./M.S. 029 Melrose School","P.S. 030 Wilton","P.S./M.S. 031 The William Lloyd Garrison","P.S. 043 Jonas Bronck","P.S. 049 Willis Avenue","P.S. 065 Mother Hale Academy","J.H.S. 151 Lou Gehrig","P.S. 154 Jonathan D. Hyatt","P.S. 157 Grove Hill","P.S. 161 Ponce De Leon","J.H.S. 162 Lola Rodriguez De Tio","P.S. 179","M.S. 203","South Bronx Preparatory: A College Board School","M.S. 223 The Laboratory School of Finance and Technology","P.S. / I.S. 224","H.E.R.O. High (Health, Education, and Research Occupations High School)","P.S. 277","South Bronx Academy for Applied Media","Academy of Public Relations","Crotona Academy High School","International Community High School","Academy of Applied Mathematics and Technology","Concourse Village Elementary School","Young Leaders Elementary School","Jill Chaifetz Transfer High School","Bronx Haven High School","Performance School","Community School for Social Justice","Mott Haven Village Preparatory High School","University Heights Secondary School","Hostos-Lincoln Academy of Science","Foreign Language Academy of Global Studies","Bronx Design and Construction Academy","Bronx Leadership Academy II High School","New Explorers High School","Urban Assembly School for Careers in Sports","The Urban Assembly Bronx Academy of Letters","Mott Haven Community High School","Alfred E. Smith Career and Technical Education High School","Samuel Gompers Career and Technical Education High School","Health Opportunities High School","P.S. X014 Senator John Calandra","P.S. 036 Unionport","P.S. 048 Joseph R. Drake","P.S. 062 Inocensio Casanova","P.S. 069 Journey Prep School","P.S. 071 Rose E. Scala","P.S. 072 Dr. William Dorney","P.S. 75 School of Research and Discovery","P.S. 093 Albert G. Oliver","P.S. 100 Isaac Clason","M.S. X101 Edward R. Byrne","P.S. 107","P.S. 119","J.H.S. 123 James M. Kieran","J.H.S. 125 Henry Hudson","P.S. 130 Abram Stevens Hewitt","J.H.S. 131 Albert Einstein","P.S. 138 Samuel Randall","P.S. X140 The Eagle School","P.S. 146 Edward Collins","P.S. 152 Evergreen","P.S. 182","Bronx Studio School for Writers and Artists","Women's Academy of Excellence","Renaissance High School for Musical Theater & Technology","Gateway School for Environmental Research and Technology","M.S. 301 Paul L. Dunbar","M.S. 302 Luisa Dessus Cruz","P.S. 304 Early Childhood School","Pablo Neruda Academy","Millennium Art Academy","Pelham Lab High School","Holcombe L. Rucker School of Community Research","P.S. 333 - The Museum School","The Academy of the Arts","The School for Inquiry and Social Justice","Schuylerville Preparatory High School","Bronx River High School","Urban Assembly Academy of Civic Engagement","Archimedes Academy for Math, Science and Technology Applications","Urban Institute of Mathematics","The Bronx Mathematics Preparatory School","Antonia Pantoja Preparatory Academy: A College Board School","Bronx Community High School","Herbert H. Lehman High School","The Hunts Point School","BRONX BRIDGES HIGH SCHOOL","Soundview Academy for Culture and Scholarship","Bronx Guild","Mott Hall Community School","Felisa Rincon de Gautier Institute for Law and Public Policy, The","Banana Kelly High School","Bronx Arena High School","School for Community Research and Learning","Westchester Square Academy","School for Tourism and Hospitality","Bronx Compass High School","Blueprint Middle School","Jane Addams High School for Academic Careers","P.S./M.S. 004 Crotona Park West","P.S. 011 Highbridge","J.H.S. 022 Jordan L. Mott","P.S. 028 Mount Hope","P.S. 035 Franz Siegel","P.S. 042 Claremont","P.S. 053 Basheer Quisim","P.S. 055 Benjamin Franklin","P.S. 058","P.S. 063 Author's Academy","P.S. 064 Pura Belpre","P.S. 070 Max Schoenfeld","P.S. 073 Bronx","P.S. X088 - S. Silverstein Little Sparrow School","P.S. 109 Sedgwick","P.S. 110 Theodore Schoenfeld","P.S. X114 - Luis Llorens Torres Schools","I.S. 117 Joseph H. Wade","P.S. 126 Dr Marjorie H Dunbar","Mott Hall III","P.S. 132 Garret A. Morgan","J.H.S. 145 Arturo Toscanini","P.S. 163 Arthur A. Schomburg","P.S. 170","P.S. 199X - The Shakespeare School","P.S. 204 Morris Heights","Kappa","P.S./I.S. 218 Rafael Hernandez Dual Language Magnet School","I.S. 219 New Venture School","Bronx Collegiate Academy","I.S. 229 Roland Patterson","P.S. 230 Dr Roland N. Patterson","Eagle Academy for Young Men","I.S. 232","P.S. 236 Langston Hughes","Urban Assembly School for Applied Math and Science, The","Eximius College Preparatory Academy: A College Board School","Mott Hall Bronx High School","Bronx Center for Science and Mathematics","Validus Preparatory Academy: An Expeditionary Learning School","The New American Academy at Roberto Clemente State Park","Leadership Institute","The Walton Avenue School","Morris Academy for Collaborative Studies","I.S. X303 Leadership & Community Service","Lucero Elementary School","I.S. 313 School of Leadership Development","Bronx Writing Academy","Bronx Early College Academy for Teaching & Learning","Urban Science Academy","Comprehensive Model School Project M.S. 327","New Millennium Business Academy Middle School","DreamYard Preparatory School","I.S. 339","New Directions Secondary School","The Highbridge Green School","Academy for Language and Technology","Bronx International High School","School for Excellence","Bronx High School of Business","Bronx High School for Medical Science","Jonathan Levin High School for Media and Communications","The Family School","Grant Avenue Elementary School","Science and Technology Academy: A Mott Hall School","Sheridan Academy for Young Leaders","Bronx School for Law, Government and Justice","Frederick Douglass Academy III Secondary School","Bronx Leadership Academy High School","High School for Violin and Dance","Mount Eden Children's Academy","Claremont International HS","Young Women's Leadership School of the Bronx","P.S. 3 Raul Julia Micro Society","P.S. 007 Kingsbridge","P.S. 008 Issac Varian","P.S. 9 Ryer Avenue Elementary School","P.S. X015 Institute for Environmental Learning","PS/MS 20 P.O.George J. Werdann, III","P.S. 023 The New Children's School","P.S. 024 Spuyten Duyvil","P.S. 032 Belmont","P.S. 033 Timothy Dwight","P.S. X037 - Multiple Intelligence School","Thomas C. Giordano Middle School 45","P.S. 046 Edgar Allan Poe","P.S. 051 Bronx New School","P.S. / I.S. 54","P.S. 056 Norwood Heights","P.S. 059 The Community School of Technology","J.H.S. 080 The Mosholu Parkway","P.S. 081 Robert J. Christen","P.S. 085 Great Expectations","P.S. 086 Kingsbridge Heights","P.S. 091 Bronx","P.S. 094 Kings College School","P.S. 095 Sheila Mencher","J.H.S. 118 William W. Niles","Riverdale / Kingsbridge Academy (Middle School / High School 141)","P.S. 159 Luis Munoz Marin Biling","P.S. 205 Fiorello Laguardia","I.S. 206 Ann Mersereau","P.S. 207","P.S. 209","Bronx Engineering and Technology Academy","Theatre Arts Production Company School","P.S. 226","Jonas Bronck Academy","The Marie Curie School for Medicine, Nursing, and Health Professions","West Bronx Academy for the Future","The New School for Leadership and Journalism","P.S. 246 Poe Center","I.S. 254","Bronx Academy for Software Engineering (BASE)","Kingsbridge International High School","P.S. 279 Captain Manuel Rivera, Jr.","P.S./M.S. 280 Mosholu Parkway","Bronx School of Law and Finance","P.S. 291","P.S. 306","Luisa Pineiro Fuentes School of Science and Discovery","Bronx Dance Academy School","P.S. 310 Marble Hill","P.S. 315 Lab School","Providing Urban Learners Success In Education High School","The Bronx School of Young Leaders","P.S. 340","International School for Liberal Arts","Ampark Neighborhood","Bronx Collaborative High School","World View High School","P.S. 360","ACADEMY FOR PERSONAL LEADERSHIP AND EXCELLENCE","In-Tech Academy (M.S. / High School 368)","Knowledge and Power Preparatory Academy International High School (Kappa)","Elementary School for Math, Science, and Technology","School for Environmental Citizenship","M.S. 390","The Angelo Patri Middle School","P.S. 396","English Language Learners and International Support Preparatory Academy (ELLIS)","High School for Teaching and the Professions","Belmont Preparatory High School","Fordham High School for the Arts","Fordham Leadership Academy for Business and Technology","Bronx High School for Law and Community Service","DeWitt Clinton High School","Celia Cruz Bronx High School of Music, The","Bronx High School of Science","Creston Academy","East Fordham Academy for the Arts","Marble Hill High School for International Studies","Crotona International High School","Bronx Theatre High School","Discovery High School","High School for Energy and Technology","Grace Dodge Career and Technical Education High School","High School of American Studies at Lehman College","P.S. 016 Wakefield","P.S. 019 Judith K. Weiss","P.S. 021 Philip H. Sheridan","P.S. 041 Gun Hill Road","P.S. 068 Bronx","P.S. 076 The Bennington School","P.S. 078 Anne Hutchinson","P.S. 083 Donald Hertz","P.S. 087 Bronx","P.S. 089 Bronx","P.S. 096 Richard Rodgers","P.S. 097 Bronx","P.S. 103 Hector Fontanez","P.S. 105 Sen Abraham Bernstein","P.S. 106 Parkchester","P.S. 108 Philip J. Abinanti","P.S. 111 Seton Falls","P.S. 112 Bronxwood","P.S. 121 Throop","J.H.S. 127 The Castle Hill","MS 142 John Philip Sousa","J.H.S. 144 Michelangelo","P.S. 153 Helen Keller","P.S. 160 Walt Disney","BAYCHESTER ACADEMY","P.S. 175 City Island","P.S. 178 - Dr. Selman Waksman","M.S. 180 Dr. Daniel Hale Williams","I.S. 181 Pablo Casals","Cornerstone Academy for Social Action","PS/MS 194","Bronx Health Sciences High School","Bronx High School for Writing and Communication Arts","Bronx Lab School","Academy for Scholarship and Entrepreneurship: A College Board School","Globe School for Environmental Research","High School of Computers and Technology","The Forward School","Collegiate Institute for Math and Science","The Young Scholars Academy of The Bronx","Bronx Academy of Health Careers","Astor Collegiate Academy","Aspire Preparatory Middle School","Bronx Green Middle School","Bronx Alliance Middle School","Young Voices Academy of the Bronx","School of Diplomacy","Christopher Columbus High School","Bronx High School for the Visual Arts","Harry S Truman High School","Cornerstone Academy for Social Action Middle School (CASA)","Pelham Academy of Academics and Community Engagement","PS/MS 11X498 - VAN NEST ACADEMY","Bronxdale High School","High School of Language and Innovation","New World High School","The Bronxwood Preparatory Academy","One World Middle School at Edenwald","Baychester Middle School","Pelham Preparatory Academy","High School for Contemporary Arts","Bronx Aerospace High School","Bronx Park Middle School","Pelham Gardens Middle School","Linden Tree Elementary School","P.S. 006 West Farms","P.S. 044 David C. Farragut","P.S. 047 John Randolph","P.S. 050 Clara Barton","P.S. 057 Crescent","P.S. 061 Francisco Oller","P.S. 066 School of Higher Expectations","P.S. 067 Mohegan School","P.S. 092 Bronx","J.H.S. 098 Herman Ridder","M.S. 129 Academy for Independent Learning and Leadership","P.S. 134 George F. Bristow","P.S. 150 Charles James Fox","E.S.M.T- I.S. 190","P.S. 195","P.S. 196","P.S. 211","P.S. 212","P.S. 214","School of Performing Arts","Mott Hall V","Metropolitan High School, The","Explorations Academy","Bronx Latin","East Bronx Academy for the Future","Frederick Douglass Academy V. Middle School","Peace and Diversity Academy","Fannie Lou Hamer Middle School","The School of Science and Applied Learning","Fairmont Neighborhood School","Kappa III","I.S. X318 Math, Science & Technology Through Arts","Accion Academy","Urban Assembly School for Wildlife Conservation","Emolior Academy","Entrada Academy","Pan American International High School at Monroe","Arturo A. Schomburg Satellite Academy Bronx","Urban Scholars Community School","THE CINEMA SCHOOL","Bronx Career and College Preparatory High School","Bronx Regional High School","Bronx Envision Academy","The Metropolitan Soundview High School","Archer Elementary School","PS 536","High School of World Cultures","Fannie Lou Hamer Freedom High School","Wings Academy","Bronx Little School","Monroe Academy for Visual Arts & Design","P.S. 003 The Bedford Village","P.S. 008 Robert Fulton","P.S. 009 Teunis G. Bergen","P.S. 011 Purvis J. Behan","P.S. 020 Clinton Hill","P.S. 044 Marcus Garvey","P.S. 046 Edward C. Blum","P.S. 054 Samuel C. Barnes","P.S. 056 Lewis H. Latimer","P.S. 067 Charles A. Dorsey","P.S. 093 William H. Prescott","M.S. 113 Ronald Edmonds Learning Center","P.S. 133 William A. Butler","P.S. 256 Benjamin Banneker","Dr. Susan S. McKinney Secondary School of the Arts","M.S. K266 - Park Place Community Middle School","P.S. 270 Johann DeKalb","P.S. 282 Park Slope","P.S. 287 Bailey K. Ashford","Satellite East Middle School","P.S. 305 Dr. Peter Ray","P.S. 307 Daniel Hale Williams","Satellite West Middle School","Urban Assembly High School of Music and Art","The Urban Assembly Unison School","Brooklyn Community High School of Communication, Arts and Media","Science Skills Center High School for Science, Technology and the Creative Arts","Brooklyn Technical High School","Brooklyn International High School","The Urban Assembly School for Law and Justice","Academy of Arts and Letters","ACORN Community High School","Urban Assembly Institute of Math and Science for Young Women","Brooklyn Academy High School","Bedford Stuyvesant Preparatory High School","Bedford Academy High School","MS 596 Peace Academy","George Westinghouse Career and Technical Education High School","Brooklyn High School for Leadership and Community Service","Benjamin Banneker Academy","City Polytechnic High School of Engineering, Architecture, and Technology","Fort Greene Preparatory Academy","P.S. 016 Leonard Dunkly","P.S. 017 Henry D. Woodworth","P.S. 018 Edward Bush","P.S. 019 Roberto Clemente","P.S. 023 Carter G. Woodson","P.S. 031 Samuel F. Dupont","P.S. 034 Oliver H. Perry","J.H.S. 050 John D. Wells","P.S. 059 William Floyd","Juan Morel Campos Secondary School","P.S. 084 Jose De Diego","P.S. 110 The Monitor","P.S. 120 Carlos Tapia","John Ericsson Middle School 126","P.S. 132 The Conselyea School","P.S. 147 Isaac Remsen","P.S. 157 Benjamin Franklin","P.S. 196 Ten Eyck","P.S. 250 George H. Lindsay","P.S. 257 John F. Hylan","P.S. 297 Abraham Stockton","I.S. 318 Eugenio Maria De Hostos","P.S. 319","Foundations Academy","The School for the Urban Environment","P.S. 380 John Wayne Elementary","Brooklyn Arbor Elementary School","Brooklyn Latin School, The","Green School: An Academy for Environmental Careers","PROGRESS High School for Professional Careers","School for Legal Studies","The High School for Enterprise, Business and Technology","Brooklyn Preparatory High School","Williamsburg High School for Architecture and Design","Williamsburg Preparatory School","Conselyea Preparatory School","M.S. 582","Lyons Community School","Automotive High School","Young Women's Leadership School of Brooklyn","Frances Perkins Academy","El Puente Academy for Peace and Justice","P.S. 001 The Bergen","Magnet School of Math, Science and Design Technology","P.S. 015 Patrick F. Daly","P.S. 024","P.S. 029 John M. Harrigan","P.S. 032 Samuel Mills Sprole","P.S. 038 The Pacific","P.S. 039 Henry Bristow","M.S. 51 William Alexander","P.S. 058 The Carroll","J.H.S. 088 Peter Rouget","P.S. 094 The Henry Longfellow","P.S. 107 John W. Kimball","The Maurice Sendak Community School","P.S. 124 Silas B. Dutcher","P.S. 130 The Parkside","P.S. 131 Brooklyn","I.S. 136 Charles O. Dewey","P.S. 146","The Windsor Terrace School","P.S. 169 Sunset Park","P.S. 172 Beacon School of Excellence","P.S. 230 Doris L. Cohen","P.S. 261 Philip Livingston","P.S. 295","P.S. 321 William Penn","The Childrenâ€™s School","Brooklyn Frontiers High School","Brooklyn School for Global Studies","M.S. 442 Carroll Gardens School for Innovation","New Voices School of Academic & Creative Arts","The Math & Science Exploratory School","Brooklyn Secondary School for Collaborative Studies","Secondary School for Law","Secondary School for Journalism","Park Slope Collegiate","School for International Studies","Sunset Park Avenues Elementary School","Cobble Hill School of American Studies","West Brooklyn Community High School","Khalil Gibran International Academy","Brooklyn High School of the Arts","Sunset Park High School","Red Hook Neighborhood School","Millennium Brooklyn HS","South Brooklyn Community High School","Sunset Park Prep","P.S. 005 Dr. Ronald Mcnair","P.S. 021 Crispus Attucks","P.S. 025 Eubie Blake School","P.S. 026 Jesse Owens","P.S. 028 The Warren Prep Academy","M.S. 035 Stephen Decatur","P.S. 040 George W. Carver","J.H.S. 057 Whitelaw Reid","P.S. 081 Thaddeus Stevens","P.S. 243K- The Weeksville School","P.S. 262 El Hajj Malik El Shabazz Elementary School","M.S. 267 Math, Science & Technology","P.S. 308 Clara Cardwell","P.S. 309 The George E. Wibecan Preparatory Academy","P.S. 335 Granville T. Woods","School of Business, Finance and Entrepreneurship","Frederick Douglass Academy IV Secondary School","Boys and Girls High School","Brooklyn High School for Law and Technology","Upper School @ P.S. 25","M.S. 584","Gotham Professional Arts Academy","Brighter Choice Community School","Brooklyn Brownstone School","Young Scholars' Academy for Discovery and Exploration","Research and Service High School","Madiba Prep Middle School","The Brooklyn Academy of Global Finance","Parkside Preparatory Academy","P.S. 006","Dr. Jacqueline Peek-Davis School","M.S. 061 Dr. Gladstone H. Atwell","P.S. 091 The Albany Avenue School","P.S. 092 Adrian Hegeman","Pathways in Technology Early College High School (P-Tech)","P.S. 138 Brooklyn","P.S. 161 The Crown","P.S. 167 The Parkway","P.S. 181 Brooklyn","P.S. 189 The Bilingual Center","P.S. 191 Paul Robeson","P.S. 221 Toussaint L'Ouverture","P.S. 241 Emma L. Johnston","M.S. 246 Walt Whitman","P.S. 249 The Caton","P.S. 289 George V. Brower","P.S. 316 Elijah Stroud","Middle School for Academic and Social Excellence","I.S. 340","Ebbets Field Middle School","Elijah Stroud Middle School","The School of Integrated Learning","P.S. 375 Jackie Robinson School","Academy for College Preparation and Career Exploration: A College Board School","M.S. K394","P.S. 397 Foster-Laurie","P.S. 398 Walter Weaver","P.S. 399 Stanley Eugene Clark","Academy of Hospitality and Tourism","Ronald Edmonds Learning Center II","W.E.B. Dubois Academic High School","International High School at Prospect Heights","The High School for Global Citizenship","School for Human Rights, The","New Bridges Elementary","School for Democracy and Leadership","High School for Youth and Community Development at Erasmus","High School for Service & Learning at Erasmus","Science, Technology and Research Early College High School at Erasmus","International Arts Business School","High School for Public Service: Heroes of Tomorrow","Brooklyn Academy of Science and the Environment","Brooklyn School for Music & Theatre","Brownsville Academy High School","Middle School for the Arts","Medgar Evers College Preparatory School","Clara Barton High School","Brooklyn Arts and Science Elementary School","New Heights Middle School","Brooklyn Institute for Liberal Arts","Academy for Health Careers","P.S. 770 New American Academy","P.S. 66","I.S. 068 Isaac Bildersee","P.S. 114 Ryder Elementary","P.S. 115 Daniel Mucatel School","P.S. 135 Sheldon A. Brookner","P.S. 208 Elsa Ebeling","I.S. 211 John Wilson","P.S. 219 Kennedy-King","P.S. 233 Langston Hughes","P.S. 235 Lenox School","P.S. 244 Richard R. Green","P.S. 268 Emma Lazarus","P.S. 272 Curtis Estabrook","P.S. 276 Louis Marshall","P.S. 279 Herman Schreiber","I.S. 285 Meyer Levin","THE SCIENCE AND MEDICINE MIDDLE SCHOOL","It Takes a Village Academy","Brooklyn Generation School","Brooklyn Theatre Arts High School","Kurt Hahn Expeditionary Learning School","Victory Collegiate High School","Brooklyn Bridge Academy","East Flatbush Community Research School","Middle School for Art and Philosophy","Arts & Media Preparatory Academy","Middle School of Marketing and Legal Studies","High School for Innovation in Advertising and Media","Cultural Academy for the Arts and Sciences","High School for Medical Professions","Olympus Academy","Academy for Conservation and the Environment","Urban Action Academy","East Brooklyn Community High School","P.S. 007 Abraham Lincoln","P.S. 013 Roberto Clemente","P.S. 065","P.S. 089 Cypress Hills","P.S. 108 Sal Abbracciamento","P.S. 149 Danny Kaye","P.S. 158 Warwick","P.S. 159 Isaac Pitkin","J.H.S. 166 George Gershwin","I.S. 171 Abraham Lincoln","P.S. 174 Dumont","P.S. 190 Sheffield","P.S. 202 Ernest S. Jenkyns","P.S. 213 New Lots","P.S. 214 Michael Friedsam","J.H.S. 218 James P. Sinnott","P.S. 224 Hale A. Woodruff","P.S. 273 Wortman","P.S. 290 Juan Morel Campos","J.H.S. 292 Margaret S. Douglas","J.H.S. 302 Rafael Cordero","P.S. 306 Ethan Allen","Essence School","The Fresh Creek School","P.S. 328 Phyllis Wheatley","P.S. 345 Patrolman Robert Bolden","P.S. 346 Abe Stark","I.S. 364 Gateway","Academy for Young Writers","East New York Family Academy","Spring Creek Community School","Frederick Douglass Academy VIII Middle School","FDNY High School for Fire and Life Safety","High School for Civil Rights","Performing Arts and Technology High School","World Academy for Total Community Health High School","Brooklyn Gardens Elementary School","Multicultural High School","Transit Tech Career and Technical Education High School","Academy of Innovative Technology","Brooklyn Lab School","Van Siclen Community Middle School","Cypress Hills Collegiate Preparatory School","W. H. Maxwell Career and Technical Education High School","Vista Academy","Liberty Avenue Middle School","School of the Future Brooklyn","East New York Elementary School of Excellence","East New York Middle School of Excellence","The School for Classics: An Academy of Thinkers, Writers and Peformers","PS/IS 30 Mary White Ovington","P.S. 048 Mapleton","J.H.S. 062 Ditmas","P.S. 69 Vincent D. Grippo School","P.S. 102 The Bayview","P.S./I.S. 104 The Fort Hamilton School","P.S. 105 The Blythebourne","P.S. 112 Lefferts Park","P.S. 127 Mckinley Park","P.S. 160 William T. Sampson","P.S. 163 Bath Beach","P.S. 164 Caesar Rodney","Ralph A. Fabrizio School","P.S. 176 Ovington","P.S. 179 Kensington","The SEEALL Academy","P.S. 185 Walter Kassenbrock","P.S. 186 Dr. Irving A Gladstone","The Christa McAuliffe School\I.S. 187","P.S. 192 - The Magnet School for Math and Science Inquiry","P.S. 200 Benson School","J.H.S. 201 The Dyker Heights","P.S. 204 Vince Lombardi","P.S. 205 Clarion","J.H.S. 220 John J. Pershing","J.H.S. 223 The Montauk","J.H.S. 227 Edward B. Shallow","P.S. 229 Dyker","P.S. 247 Brooklyn","J.H.S. 259 William Mckinley","P.S. 264 BAY RIDGE ELEMENTARY SCHOOL FOR THE ARTS","The School For Future Leaders","New Utrecht High School","High School of Telecommunication Arts and Technology","Fort Hamilton High School","PS 503: The School of Discovery","Franklin Delano Roosevelt High School","P.S. 506: The School of Journalism & Technology","Urban Assembly School for Criminal Justice","The Academy of Talented Scholars","Brooklyn School of Inquiry","P.S. 748 Brooklyn School for Global Scholars","School of Math, Science, and Healthy Living","P.S. 90 Edna Cohen School","P.S. 095 The Gravesend","I.S. 096 Seth Low","P.S. 97 The Highlawn","I.S. 98 Bay Academy","P.S. 099 Isaac Asimov","P.S. 100 The Coney Island School","P.S. 101 The Verrazano","P.S. 121 Nelson A. Rockefeller","P.S. 128 Bensonhurst","P.S. 153 Homecrest","P.S. 177 The Marlboro","P.S. 188 Michael E. Berdy","P.S. 199 Frederick Wachtel","P.S. 209 Margaret Mead","P.S. 212 Lady Deborah Moody","P.S. 215 Morris H. Weiss","P.S. 216 Arturo Toscanini","P.S. K225 - The Eileen E. Zaglin","P.S. 226 Alfred De B.Mason","I.S. 228 David A. Boody","P.S. 238 Anne Sullivan","Mark Twain I.S. 239 for the Gifted & Talented","P.S. 253","I.S. 281 Joseph B Cavallaro","P.S. 288 The Shirley Tanyhill","I.S. 303 Herbert S. Eisenberg","P.S. 329 Surfside","International High School at Lafayette","Rachel Carson High School for Coastal Studies","High School of Sports Management","Abraham Lincoln High School","Kingsborough Early College School","Edward R. Murrow High School","John Dewey High School","Life Academy High School for Film and Music","Expeditionary Learning School for Community Leaders","William E. Grady Career and Technical Education High School","Brooklyn Studio Secondary School","Liberation Diploma Plus","J.H.S. 014 Shell Bank","P.S. 052 Sheepshead Bay","J.H.S. 078 Roy H. Mann","P.S. 109","P.S. 119 Amersfort","P.S. K134","P.S. 139 Alexine A. Fenty","School of Science & Technology","P.S. 193 Gil Hodges","P.S. 194 Raoul Wallenberg","P.S. 195 Manhattan Beach","P.S. 197 - The Kings Highway Academy","P.S. 198 Brooklyn","P.S. 203 Floyd Bennett School","P.S. 206 Joseph F Lamb","P.S. 207 Elizabeth G. Leary","P.S. 217 Colonel David Marcus School","P.S. 222 Katherine R. Snyder","J.H.S. 234 Arthur W. Cunningham","P.S. 236 Mill Basin","Andries Hudde","P.S. 245","P.S. 251 Paerdegat","P.S. 254 Dag Hammarskjold","P.S. 255 Barbara Reing School","P.S. 269 Nostrand","P.S. 277 Gerritsen Beach","J.H.S. 278 Marine Park","P.S. 312 Bergen Beach","P.S. K315","P.S. 326","P.S. 361 East Flatbush Early Childhood School","I. S. 381","Midwood High School","James Madison High School","Sheepshead Bay High School","Leon M. Goldstein High School for the Sciences","Brooklyn College Academy","Origins High School","Professional Pathways High School","P.S. 041 Francis White","P.S. 073 Thomas S. Boyland","P.S./I.S. 137 Rachel Jean Mitchell","P.S. 150 Christopher","P.S./ I.S. 155 Nicholas Herkimer","P.S. 156 Waverly","P.S. 165 Ida Posner","P.S. 178 Saint Clair Mckelway","P.S. 184 Newport","P.S. 284 Lew Wallace","P.S. 298 Dr. Betty Shabazz","P.S./I.S. 323","P.S. 327 Dr. Rose B. English","Brownsville Collaborative Middle School","I.S. 392","Christopher Avenue Community School","Riverdale Avenue Community School","Brooklyn Collegiate: A College Board School","Frederick Douglass Academy VII High School","Kappa V","Mott Hall IV","Brooklyn Landmark Elementary School","General D. Chappie James Elementary School of Science","General D. Chappie James Middle School of Science","Brooklyn Democracy Academy","Eagle Academy for Young Men II","Aspirations Diploma Plus High School","Metropolitan Diploma Plus High School","Brooklyn Environmental Exploration School (BEES)","Riverdale Avenue Middle School","Mott Hall Bridges Academy","Teachers Preparatory High School","I.S. 5 - The Walter Crowley Intermediate School","P.S. 007 Louis F. Simeone","P.S. 012 James B. Colgate","P.S. 013 Clement C. Moore","P.S. 014 Fairview","P.S. Q016 The Nancy DeBenedittis School","P.S. 019 Marino Jeantet","P.S. 28 - The Thomas Emanuel Early Childhood Center","P.S. 049 Dorothy Bonawit Kole","P.S. 58 - School of Heroes","I.S. 061 Leonardo Da Vinci","P.S. 068 Cambridge","P.S. 071 Forest","I.S. 73 - The Frank Sansivieri Intermediate School","I.S. 077","P.S. 81Q Jean Paul Richter","P.S. / I.S. 087 Middle Village","P.S. 088 Seneca","P.S. 089 Elmhurst","P.S. 091 Richard Arkwright","I.S. 093 Ridgewood","P.S. 102 Bayview","PS 110","P.S./I.S. 113 Anthony J. Pranzo","I.S. 119 The Glendale","I.S. 125 Thom J. McCann Woodside","P.S. 128 The Lorraine Tuzzo, Juniper Valley Elementary School","P.S. 143 Louis Armstrong","P.S. 153 Maspeth Elem","P.S. 199 Maurice A. Fitzgerald","Elm Tree Elementary School","P.S. 229 Emanuel Kaplan","International High School for Health Sciences","P.S. 239","Academy of Finance and Enterprise","High School of Applied Communication","A.C.E. Academy for Scholars at the Geraldine Ferraro Campus","Civic Leadership Academy","Pan American International High School","Bard High School Early College Queens","Learners and Leaders","Pioneer Academy","Corona Arts and Sciences Academy","P.S. 330","Newtown High School","Grover Cleveland High School","Middle College High School at LaGuardia Community College","International High School at LaGuardia Community College","High School for Arts and Business","Robert F. Wagner, Jr. Secondary School for Arts and Technology","Maspeth High School","Queens Vocational and Technical High School","Aviation Career & Technical Education High School","VOYAGES Preparatory","The 51 Avenue Academy (The Path To Academic Excellence)","P.S. 020 John Bowne","P.S. 021 Edward Hart","P.S. 022 Thomas Jefferson","P.S. 024 Andrew Jackson","I.S. 025 Adrien Block","P.S. 029 Queens","P.S. 032 State Street","P.S. 079 Francis Lewis","P.S. 107 Thomas A Dooley","P.S. 120 Queens","P.S. 129 Patricia Larkin","P.S. 130","P.S. 154 Queens","P.S. 163 Flushing Heights","P.S. 164 Queens Valley","P.S. 165 Edith K. Bergtraum","P.S. 169 Bay Terrace","P.S. 184 Flushing Manor","J.H.S. 185 Edward Bleeker","J.H.S. 189 Daniel Carter Beard","P.S. 193 Alfred J. Kennedy","J.H.S. 194 William Carr","PS/MS 200 - The Pomonok School & STAR Academy","P.S. 201 The Discovery School for Inquiry and Research","P.S. 209 Clearview Gardens","P.S. 214 Cadwallader Colden","P.S. 219 Paul Klapper","I.S. 237","Veritas Academy","Queens High School for Language Studies","P.S. 242 Leonard P. Stavisky Early Childhood School","The Active Learning Elementary School","I.S. 250 The Robert F. Kennedy Community Middle School","Queens School of Inquiry, The","Flushing International High School","East-West School of International Studies","World Journalism Preparatory: A College Board School","BELL Academy","John Bowne High School","Flushing High School","The Queens College School for Math, Science and Technology","Townsend Harris High School","Queens Academy High School","Robert F. Kennedy Community High School","North Queens Community High School","P.S. 018 Winchester","P.S. 026 Rufus King","P.S. 031 Bayside","P.S. 041 Crocheron","P.S. 046 Alley Pond","J.H.S. 067 Louis Pasteur","J.H.S. 074 Nathaniel Hawthorne","P.S. 094 David D. Porter","P.S. 098 The Douglaston School","P.S. 115 Glen Oaks","P.S. 133 Queens","M.S. 158 Marie Curie","P.S. 159","P.S. 162 John Golden","Irwin Altman Middle School 172","P.S. 173 Fresh Meadows","P.S./ IS 178 Holliswood","P.S. 186 Castlewood","P.S. 188 Kingsbury","P.S. 191 Mayflower","P.S. 203 Oakland Gardens","P.S. 205 Alexander Graham Bell","P.S. 213 The Carl Ullman School","J.H.S. 216 George J. Ryan","P.S. 221 The North Hills School","P.S. / I.S. 266","Benjamin N. Cardozo High School","Francis Lewis High School","Martin Van Buren High School","Bayside High School","Queens High School of Teaching, Liberal Arts and the Sciences","P.S./M.S 042 R. Vernam","P.S. 043","P.S. 045 Clarence Witherspoon","P.S. 047 Chris Galas","P.S. 051","M.S. 053 Brian Piccolo","P.S. 056 Harry Eichler","P.S. 060 Woodhaven","P. S. 62 - Chester Park School","P.S. 063 Old South","P.S. 064 Joseph P. Addabbo","P.S. 65 - The Raymond York Elementary School","P.S. 066 Jacqueline Kennedy Onassis","P.S. 090 Horace Mann","P.S. 096","P.S. 097 Forest Park","P.S. 100 Glen Morris","P.S. 104 The Bays Water","P.S. 105 The Bay School","P.S. 106","P.S. 108 Captain Vincent G. Fowler","P.S. / M.S. 114 Belle Harbor","P.S. 123","P.S. 124 Osmond A Church","M.S. 137 America's School of Heroes","P.S. 146 Howard Beach","P.S. 155","P.S. 183 Dr. Richard R. Green","P.S. 197 The Ocean School","J.H.S. 202 Robert H. Goddard","P.S. 207 Rockwood Park","J.H.S. 210 Elizabeth Blackwell","P.S. 215 Lucretia Mott","P.S. 223 Lyndon B. Johnson","J.H.S. 226 Virgil I. Grissom","P.S. 232 Lindenwood","P.S. 253","P.S. 254 - The Rosa Parks School","Frederick Douglass Academy VI High School","Voyages Prep - South Queens","Channel View School for Research","P.S. 273","Knowledge and Power Preparatory Academy VI","Hawtree Creek Middle School","Queens High School for Information, Research, and Technology","New York City Academy for Discovery","Robert H. Goddard High School of Communication Arts and Technology","Academy of Medical Technology: A College Board School","WATERSIDE CHILDREN'S STUDIO SCHOOL","WATERSIDE SCHOOL FOR LEADERSHIP","VILLAGE ACADEMY","Scholars' Academy","Rockaway Park High School for Environmental Sustainability","Goldie Maple Academy","Rockaway Collegiate High School","Wave Preparatory Elementary School","August Martin High School","Beach Channel High School","Richmond Hill High School","John Adams High School","High School for Construction Trades, Engineering and Architecture","J.H.S. 008 Richard S. Grossley","P.S. 30 Queens","P.S. 040 Samuel Huntington","P.S. 048 William Wordsworth","P.S. 050 Talfourd Lawn Elementary School","P.S. 054 Hillside","P.S. 055 Maure","Catherine & Count Basie Middle School 72","P.S. 080 Thurgood Marshall Magnet","P.S. 082 Hammond","P.S. Q086","P.S. 099 Kew Gardens","P.S. 101 School in the Gardens","P.S. 117 J. Keld / Briarwood School","P.S. 121 Queens","P.S. 139 Rego Park","P.S. 140 Edward K Ellington","P.S. 144 Col Jeromus Remsen","J.H.S. 157 Stephen A. Halsey","P.S. 160 Walter Francis Bishop","P.S. 161 Arthur Ashe School","Metropolitan Expeditionary Learning School","P.S. 174 William Sidney Mount","P.S. 175 The Lynn Gross Discovery School","P.S. 182 Samantha Smith","J.H.S. 190 Russell Sage","P.S. 196 Grand Central Parkway","P.S. 206 The Horace Harding School","J.H.S. 217 Robert A. Van Wyck","P.S. 220 Edward Mandel","York Early College Academy","The Emerson School","The Academy for Excellence through the Arts","Queens Collegiate: A College Board School","Hillside Arts & Letters Academy","High School for Community Leadership","Queens Satellite High School for Opportunity","Jamaica Gateway to the Sciences","PS 354","Forest Hills High School","Jamaica High School","Hillcrest High School","Thomas A. Edison Career and Technical Education High School","Queens Gateway to Health Sciences Secondary School","QUEENS METROPOLITAN HIGH SCHOOL","Queens High School for the Sciences at York College","High School for Law Enforcement and Public Safety","Young Women's Leadership School, Queens","P.S. 015 Jackie Robinson","P.S. 033 Edward M. Funk","P.S. 034 John Harvard","P.S. 035 Nathaniel Woodhull","P.S. 036 Saint Albans School","Cynthia Jenkins School","P.S. 038 Rosedale","P.S. 052 Queens","I.S. 059 Springfield Gardens","P.S. 095 Eastwood","Jean Nuzzi Intermediate School","PS/IS 116 William C. Hughley","P.S. 118 Lorraine Hansberry","P.S. 131 Abigail Adams","P.S. 132 Ralph Bunche","P.S. 134 Hollis","The Bellaire School","P.S. 136 Roy Wilkins","P.S./ M.S.138 Sunrise","PS/MS 147 Ronald McNair","P.S. 156 Laurelton","P.S. 176 Cambria Heights","P.S. 181 Brookfield","I.S. 192 The Linden","P.S. 195 William Haberle","P.S. / I.S. 208","I.S. 238 - Susan B. Anthony Academy","Institute for Health Professions at Cambria Heights","Queens Preparatory Academy","P.S. 251 Queens","Pathways College Preparatory School: A College Board School","Excelsior Preparatory High School","PS/IS 268","The Gordon Parks School","George Washington Carver High School for the Sciences","Preparatory Academy for Writers: A College Board School","Queens United Middle School","P.S./I.S. 295","Cambria Heights Academy","Eagle Academy for Young Men III","Collaborative Arts Middle School","Community Voices Middle School","Mathematics, Science Research and Technology Magnet High School","Law, Government and Community Service High School","Business, Computer Applications & Entrepreneurship High School","Humanities & Arts Magnet High School","P.S. 002 Alfred Zimberg","I.S. 010 Horace Greeley","P.S. 011 Kathryn Phelan","P.S. 017 Henry David Thoreau","P.S. 069 Jackson Heights","P.S. 070 Queens","P.S. 076 William Hallet","P.S./I.S. 78Q","P.S. 084 Steinway","P.S. 085 Judge Charles Vallone","P.S. 092 Harry T. Stewart Sr.","P.S. 111 Jacob Blackwell","P.S. 112 Dutch Kills","P.S. 122 Mamie Fay","Albert Shanker School for Visual and Performing Arts","P.S. 127 Aerospace Science Magne","I.S. 141 The Steinway","I.S. 145 Joseph Pulitzer","P.S. 148 Queens","P.S. 149 Christa Mcauliffe","P.S. 150 Queens","P.S. 151 Mary D. Carter","P.S. 152 Gwendoline N. Alleyne School","P.S. 166 Henry Gradstein","P.S. 171 Peter G. Van Alst","I.S. 204 Oliver W. Holmes","P.S. 212","P.S. Q222 - Fire Fighter Christopher A. Santora School","I.S. 227 Louis Armstrong","P.S. 228 Early Childhood Magnet School of the Arts","I.S. 230","P.S. 234","Academy for New Americans","Energy Tech High School","P.S. 280","Young Women's Leadership School, Astoria","Hunters Point Community Middle School","Academy for Careers in Television and Film","East Elmhurst Community School","William Cullen Bryant High School","Long Island City High School","Frank Sinatra School of the Arts High School","Information Technology High School","Newcomers High School","Academy of American Studies","Baccalaureate School for Global Education","P.S. 001 Tottenville","I.S. R002 George L. Egbert","P.S. 003 The Margaret Gioiosa School","P.S. 004 Maurice Wollin","P.S. 005 Huguenot","P.S. 6 Corporal Allan F. Kivlehan School","I.S. 007 Elias Bernstein","P.S. 8 Shirlee Solomon","Naples Street Elementary School","P.S. 11 Thomas Dongan School","P.S. 013 M. L. Lindemeyer","P.S. 014 Cornelius Vanderbilt","P.S. 016 John J. Driscoll","P.S. 018 John G. Whittier","P.S. 019 The Curtis School","P.S. 020 Port Richmond","P.S. 21 Margaret Emery-Elm Park","P.S. 022 Graniteville","P.S. 023 Richmondtown","I.S. 024 Myra S. Barnes","P.S. 026 The Carteret School","I.S. 027 Anning S. Prall","P.S. 029 Bardwell","P.S. 030 Westerleigh","P.S. 031 William T. Davis","P.S. 032 The Gifford School","I.S. 034 Tottenville","P.S. 35 The Clove Valley School","P.S. 036 J. C. Drumgoole","P.S. 038 George Cromwell","P.S. 39 Francis J. Murphy Jr.","P.S. 041 New Dorp","P.S. 042 Eltingville","P.S. 044 Thomas C. Brown","P.S. 045 John Tyler","P.S. 046 Albert V. Maniscalco","CSI High School for International Studies","P.S. 048 William G. Wilcox","I.S. 49 Berta A. Dreyfus","P.S. 050 Frank Hankinson","I.S. 051 Edwin Markham","P.S. 052 John C. Thompson","P.S. 053 Bay Terrace","P.S. 054 Charles W. Leng","P.S. 055 Henry M. Boehm","P.S. 56 The Louis Desario School","P.S. 057 Hubert H. Humphrey","Space Shuttle Columbia School","The Harbor View School","P.S. 060 Alice Austen","I.S. 061 William A Morris","Marsh Avenue School for Expeditionary Learning","Gaynor McCown Expeditionary Learning School","P.S. 65 The Academy of Innovative Learning","P.S. 069 Daniel D. Tompkins","I.S. 072 Rocco Laurie","P.S. 74 FUTURE LEADERS ELEMENTARY SCHOOL","I.S. 075 Frank D. Paulo","PS 78","The Michael J. Petrides School","New Dorp High School","Port Richmond High School","Curtis High School","Tottenville High School","Susan E. Wagner High School","Concord High School","Ralph R. McKee Career and Technical Education High School","Staten Island Technical High School","Staten Island School of Civic Leadership","P.S./I.S. 045 Horace E. Greene","P.S. 075 Mayda Cortiella","P.S. 086 The Irvington","P.S. 106 Edward Everett Hale","P.S. 116 Elizabeth L Farrell","P.S. 123 Suydam","P.S. 145 Andrew Jackson","P.S. 151 Lyndon B. Johnson","J.H.S. 162 The Willoughby","The Brooklyn School for Math and Research","P.S. 274 Kosciusko","J.H.S. 291 Roland Hayes","The Anna Gonzalez Community School","P.S. 299 Thomas Warren Field","I.S. 347 School of Humanities","I.S. 349 Math, Science & Tech.","P.S. 376","P.S. 377 Alejandrina B. De Gautier","J.H.S. 383 Philippa Schuyler","P.S. /I.S. 384 Frances E. Carter","Academy for Environmental Leadership","EBC High School for Public Service - Bushwick","Bushwick School for Social Justice","Academy of Urban Planning","All City Leadership Secondary School","Bushwick Leaders High School for Academic Excellence","Evergreen Middle School for Urban Exploration","Bushwick Community High School"];
 
var schoolMaxLength = 0;
var lni = 0;

for (var i=0; i < schools.length; i++) {
    if (schools[i].length > schoolMaxLength) {
        schoolMaxLength = schools[i].length;
        lni = i;
    }
}

console.log('Longest school name: ');
console.log(schools[lni]);
    
var schoolNow = '';




	function importData(){

		d3.json("js/alldata.json", function(error, alldata){
			if (error) throw error;
			console.log("json conected");
			console.log(alldata);	
			

		var svg = d3.select('#chart').append('svg')
		.attr("width", width)
		.attr("height", height);



	// Chart vertical and horizontal lines
		svg.selectAll("line")
			.data(horizontal)
			.enter()
				.append("rect")
				// .attr ("height", function(d){return d;})
				.attr ("width",'70vw')
				.attr ("height", 0.25)
				// .attr("fill", "gray")
				.attr("y", function(d, i){return 8.75 + i * 8.75 + "vw"});
		
		
		svg.selectAll("line")
			.data(vertical)
			.enter()
				.append("rect")
				// .attr ("height", function(d){return d;})
				.attr ("height",35+"vw")
				.attr ("width", 0.25)
				.attr("fill", "gray")
				.attr("x", function(d, i){return i * 8.75 + "vw"});

		
			

		// svg.selectAll("line")
		// 	.data(horizontal)
		// 	.enter()
		// 		.append("line")
		// 		.attr("x1", 0)
		// 		.attr("x2", 70+"vw")
		// 		.attr("y1", function(d, i){return i * 8.75 + "vw"})
		// 		.attr("y2", function(d, i){return i * 8.75 + "vw"})
		// 		.attr("stroke", "gray")
		// 		.attr("stroke-width", 0.5);		
		

		// svg.selectAll("line")
		// 	.data(vertical)
		// 	.enter()
		// 		.append("line")
		// 		.attr("x1", function(d, i){return i * 8.75 + "vw"})
		// 		.attr("x2", function(d, i){return i * 8.75 + "vw"})
		// 		.attr("y1", 0)
		// 		.attr("y2", 35+"vw")
		// 		.attr("stroke", "gray")
		// 		.attr("stroke-width", 0.5);	



		

			// svg.selectAll("line")
			// .data(alldata)
			// .enter()
			// .append("line")
			// .attr("x1", function(d,i){
			// 	return d.medincome / 2457.14286 +("vw");})
			// .attr("x2", function(d,i){
			// 	return d.medincome / 2457.14286 +("vw");
			// })
			// .attr("y1",function(d, i){
			// 	return 43.75 - (d.mathrating * 8.75) +("vw");})
			// .attr("y2", function(d, i){
			// 	return 43.75 - (d.mathrating * 8.75) +("vw");
			// })
			// .attr("stroke", "gray")
			// .attr("stroke-width", 0.5);

			

			// .attr("class", "noline")

			// .on('mouseover',function(d){
			// 	d3.select(this).classed("yesline",true)

			// })
			// .on('mouseout',function(d){
			// 	d3.select(this).classed("yesline",false)
				
			// });
		


	//Creating the circles	
		var circleScale = d3.scale.linear()
		.domain(d3.extent(alldata,function(d)
			{return d.students}))
		.range(["0.4vw","3.5vw"])


		var circles = svg.selectAll("circle")
			.data(alldata)
			.enter()
			.append("circle")
			.attr("r", function(d){	
				return circleScale(d.students)
				// return d.students * 0.002 +("vw");
			})

			.attr("cx", function(d){
				// return d.medincome / 1457.14286 +("vw");
				return d.medincome / 2457.14286 +("vw");
			})
			.attr("cy", function(d, i){
				return 43.75 - (d.mathrating * 8.75) +("vw");
			})


	     	.style("fill",function(d){
	        	  return ((d.eth == "Black")?"#00635D":
	        	  	(d.eth == "White")?"#7B0828":
	        	  	(d.eth == "Hispanic")?"#E3D26F":
	        	  	(d.eth == "Asian")?"#36173A":
	        	  	(d.eth == "Other")?"#BB6B00":"gray");

	      	})
	     	.style('fill-opacity', 0.6)
			.style("stroke", "gray")
			.style("stroke-width", 0.5)

	     	d3.selection.prototype.moveToFront = function() {
			  return this.each(function(){
			    this.parentNode.appendChild(this);
			  });
			}

			circles.on("mouseover",function(){
			  var sel = d3.select(this);
			  sel.moveToFront();
			})
			
			d3.selection.prototype.moveToBack = function() { 
			    this.each(function() { 
			        this.parentNode.firstChild
			          && this.parentNode.insertBefore(this, firstChild); 
			        }); 
			}

	  //     	.on('mouseover',function(d){
			// 	d3.select(this).classed("index",true)

			// })
			// .on('mouseout',function(d){
			// 	d3.select(this).classed("index",false)
				
			// })
			
			;







		// svg.selectAll("line")
		// 	.data(alldata)
		// 	.enter()
		// 		.append("line")
		// 		.attr("x1", function(d, i){return d.medincome / 2457.14286 +("vw");})
		// 		.attr("x2", function(d, i){return d.medincome / 2457.14286 +("vw");})
		// 		.attr("y1", function(d, i){return 43.75 - (d.mathrating * 8.75) +("vw");})
		// 		.attr("y2", function(d, i){return 43.75 - (d.mathrating * 8.75) +("vw");})
		// 		.attr("stroke", "gray")
		// 		.attr("stroke-width", 0.5);



	
		// svg.selectAll("text")
		// 	.data(alldata)
		// 	.enter()
		// 	.append("text")
		// 	.attr("fill", "gray")
		// 	.attr("class", "text-fill")
		// 	.attr("text-anchor", "middle")
		// 	.attr("y", function(d,i){
		// 		return 43.75 - (d.mathrating * 8.75) +("vw"); 
		// 	})
		// 	.attr("x", function(d,i){
		// 		return d.medincome / 2457.14286 +("vw");
		// 		// return d.medincome / 2457.14286 +("vw");
		// 	})
		// 	.text(function(d){
		// 		return "students:" + d.students;
		// 	})

		// 		//THis is the on mouse over alldata
		// 	.on('mouseover',function(d){
		// 		d3.select(this).classed("selected",true)

		// 	})
		// 	.on('mouseout',function(d){
		// 		d3.select(this).classed("selected",false)
				
		// 	});



	})
}


	
	importData();


