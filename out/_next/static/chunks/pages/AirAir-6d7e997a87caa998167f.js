_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{hhwx:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/AirAir",function(){return r("mSs0")}])},mSs0:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return H}));var i=r("nKUr"),n=r("H+61"),a=r("UlJF"),c=r("+Css"),s=r("7LId"),l=r("VIvw"),o=r("iHvq"),u=r("cpVT"),d=r("q1tI"),j=r.n(d),h=r("yE/o"),p=r("3mGJ"),b=r("+6Dn"),m=r("5XkN"),f=r("eetn"),x=r("MPSb"),O=r("z8k1"),g=r("3Hq7"),v=r("VscV"),y=r("D5Hz"),k=r("XHht");function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return Object(l.a)(this,r)}}var S=Object(k.createMedia)({breakpoints:{mobile:0,tablet:768,computer:1024,ecran:1192}}),z=S.MediaContextProvider,w=S.Media,q=function(e){Object(s.a)(r,e);var t=C(r);function r(e){var i;return Object(n.a)(this,r),i=t.call(this,e),Object(u.a)(Object(c.a)(i),"handleChange",(function(e,t){var r=t.name,n=t.value;return i.setState(Object(u.a)({},r,n))})),i.state={proprio:"",salarie:"",chauffage:"",famille:"",fiscalite:"",nom:"",prenom:"",adresse:"",localite:"",email:"",telephone:""},i.state={},i}return Object(a.a)(r,[{key:"handleSubmit",value:function(e){e.preventDefault(),void 0===this.state.proprio?this.setState({errorProprio:{content:"",pointing:null}}):this.setState({errorProprio:null}),void 0===this.state.salarie?this.setState({errorSalarie:{content:"",pointing:null}}):this.setState({errorSalarie:null}),void 0===this.state.chauffage?this.setState({errorChauffage:{content:"",pointing:null}}):this.setState({errorChauffage:null}),void 0===this.state.famille?this.setState({errorFamille:{content:"",pointing:null}}):this.setState({errorFamille:null}),void 0===this.state.fiscalite?this.setState({errorFiscalite:{content:"",pointing:null}}):this.setState({errorFiscalite:null}),void 0===this.state.proprio?alert("Selectionnez Proprietaire ou locataire ?"):void 0===this.state.salarie?alert("Selectionnez votre type de salaire"):void 0===this.state.chauffage?alert("Selectionnez votre type de chauffage"):void 0===this.state.famille?alert("Selectionnez nombre de personne"):void 0===this.state.fiscalite?alert("Selectionnez votre revenu fiscal"):this.dataContact()}},{key:"dataContact",value:function(){var e=this.state,t=e.proprio,r=e.salarie,i=e.chauffage,n=e.famille,a=e.fiscalite,c=e.nom,s=e.prenom,l=e.adresse,o=e.localite,u=e.email,d={from_name:u,to_name:c,proprio:t,salarie:r,chauffage:i,famille:n,fiscalite:a,adresse:l,localite:o,email:u,telephone:e.telephone,penom:s};y.send("my_Gmail","eligibilite",d,"user_O4rTmyvCyhnUYTJrczkMv").then((function(e){alert(e.text)}),(function(e){alert(e.text)})),this.state.proprio="",this.state.salarie="",this.state.chauffage="",this.state.famille="",this.state.fiscalite="",this.state.nom="",this.state.prenom="",this.state.adresse="",this.state.localite="",this.state.email="",this.state.telephone=""}},{key:"render",value:function(){this.props.children;var e=this.props.mobile,t={color:"lightgreen",textShadow:"-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",textAlign:"center",fontFamily:"verdana",fontSize:e?22:32};return Object(i.jsxs)(g.a,{children:[Object(i.jsx)(h.a,{fluid:!0,children:Object(i.jsx)(p.a,{vertical:!0,fluid:!0,children:Object(i.jsx)(b.a,{container:!0,stackable:!0,verticalAlign:"center",children:Object(i.jsxs)(b.a.Row,{children:[Object(i.jsxs)(b.a.Column,{floated:"left",width:8,children:[Object(i.jsxs)("p",{style:{fontFamily:"Comic sans MS",color:"lightgreen",textAlign:"center",fontSize:25,textShadow:"-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",letterSpacing:3},children:["Am\xe9liorez les performances \xe9nerg\xe9tiques de votre logement pour ",Object(i.jsx)(m.a,{src:"img/ecolo/1_euro.png",centered:!0,size:"tiny",spaced:!0}),"ou un reste \xe0 charge quasi nul, gr\xe2ce aux programmes",Object(i.jsx)(m.a,{src:"img/ecolo/logocee.png",centered:!0,size:"small",spaced:!0})]}),Object(i.jsx)(f.a,{aspectRatio:"16:9",id:"0m1QWV3vTzo",placeholder:"img/ecolo/ecologieyoutube.jpg",source:"youtube"}),Object(i.jsx)("h1",{style:{fontFamily:"verdana",textAlign:"center",color:"green",fontSize:e?25:35},children:Object(i.jsx)("u",{children:"Comment l'obtenir"})}),Object(i.jsxs)(x.a,{children:[Object(i.jsx)(x.a.Image,{src:"img/ecolo/validez.png",alt:"validez",size:"tiny"}),Object(i.jsx)(x.a.Content,{verticalAlign:"middle",children:Object(i.jsx)(x.a.Header,{children:"Remplissez le formulaire"})})]}),Object(i.jsxs)(x.a,{children:[Object(i.jsx)(x.a.Image,{size:"tiny",src:"img/ecolo/telephone.png",alt:"telephone"}),Object(i.jsx)(x.a.Content,{verticalAlign:"middle",children:Object(i.jsx)(x.a.Header,{children:" Un professionnel vous contact afin d'ouvrir votre dossier et convenir d'un rendez-vous"})})]}),Object(i.jsxs)(x.a,{children:[Object(i.jsx)(x.a.Image,{size:"tiny",src:"img/ecolo/ouvrier.png",alt:"ouvrier RGE"}),Object(i.jsx)(x.a.Content,{verticalAlign:"middle",children:Object(i.jsx)(x.a.Header,{children:" Une \xe9quipe de techniciens confirm\xe9s RGE se d\xe9place chez vous afin de r\xe9aliser vos travaux"})})]}),Object(i.jsxs)(x.a,{children:[Object(i.jsx)(x.a.Image,{size:"tiny",src:"img/ecolo/remerciement.png",alt:"remerciement"}),Object(i.jsx)(x.a.Content,{verticalAlign:"middle",children:Object(i.jsx)(x.a.Header,{children:"Vous ne payez que 1 euro Sur pr\xe9sentation du devis , sans aucun frais avanc\xe9"})})]}),Object(i.jsx)("br",{}),Object(i.jsxs)(x.a,{children:[Object(i.jsx)(x.a.Image,{size:"small",src:"img/ecolo/logocee.png",alt:"logo-cee"}),Object(i.jsx)(x.a.Content,{verticalAlign:"middle",children:Object(i.jsx)(x.a.Header,{children:"l'etat finance  pour 1\u20ac symbolique"})})]})]}),Object(i.jsx)(v.default,{})]})})})}),Object(i.jsx)(p.a,{children:Object(i.jsx)("p",{style:t,children:Object(i.jsx)("blockquote",{children:Object(i.jsx)("strong",{children:"Pourquoi choisir le remplacement de votre syst\xe8me de chauffage"})})})}),Object(i.jsx)(p.a,{children:Object(i.jsxs)(O.a.Group,{centered:!0,children:[Object(i.jsxs)(O.a,{children:[Object(i.jsx)(m.a,{src:"img/ecolo/argent-economie.png",wrapped:!0,ui:!1}),Object(i.jsxs)(O.a.Content,{children:[Object(i.jsx)(O.a.Header,{style:{textAlign:"center"},children:Object(i.jsx)("h2",{children:"Les avantages de la pompe \xe0 chaleur Air Air"})}),Object(i.jsxs)(O.a.Description,{style:{textAlign:"center",backgroundColor:"whitesmoke",fontFamily:"Times New Roman",lineHeight:1.5},children:[Object(i.jsx)("strong",{children:Object(i.jsx)("mark",{children:"Une faible consommation d\u2019\xe9nergie :"})}),Object(i.jsx)("br",{}),"Pour 1kWh d\u2019\xe9lectricit\xe9 consomm\xe9e pour fonctionner, la pac restitue 3 \xe0 4 kWh de chaleur. Elle permet ainsi de r\xe9duire consid\xe9rablement les d\xe9penses (votre facture de chauffage peut \xeatre divis\xe9e par 3 \xe0 4 !) ",Object(i.jsx)("br",{}),Object(i.jsx)("strong",{children:Object(i.jsx)("mark",{children:"Un confort d\u2019utilisation :"})}),Object(i.jsx)("br",{}),"La pac fonctionne de fa\xe7on autonome, elle chauffe rapidement et assure une temp\xe9rature stable dans toutes les pi\xe8ces",Object(i.jsx)("br",{}),Object(i.jsx)("strong",{children:Object(i.jsx)("mark",{children:"Une pose simple :"})}),Object(i.jsx)("br",{}),"La pac air air s'adapte partout chauffant",Object(i.jsx)("br",{}),Object(i.jsx)("strong",{children:Object(i.jsx)("mark",{children:"Pas de rejets :"})}),Object(i.jsx)("br",{}),"Ce syst\xe8me de chauffage ne rejette pas de fum\xe9es dans l\u2019atmosph\xe8re, il n\u2019y a donc aucune probl\xe9matique de conduit d\u2019\xe9vacuation \xe0 pr\xe9voir ",Object(i.jsx)("br",{}),Object(i.jsx)("strong",{children:Object(i.jsx)("mark",{children:"Un seul appareil pour tous vos besoins chaud et froid :"})}),Object(i.jsx)("br",{}),"Le syst\xe8me va produire le chauffage , pourra \xe9galement climatiser vos pi\xe8ces en p\xe9riode estivale ",Object(i.jsx)("br",{}),Object(i.jsx)("strong",{children:Object(i.jsx)("mark",{children:"Le confort:"})}),Object(i.jsx)("br",{}),"Ultra-silencieux, \xe0 partir de 19 dB(6), qui se font oublier pour une vie au calme. Une qualit\xe9 de l\u2019air am\xe9lior\xe9e en luttant contre les bact\xe9ries et les allerg\xe8nes de fa\xe7on plus efficace ",Object(i.jsx)("br",{})]})]})]}),Object(i.jsxs)(O.a,{children:[Object(i.jsx)(m.a,{src:"img/ecolo/ecologie.png",wrapped:!0,ui:!1}),Object(i.jsxs)(O.a.Content,{children:[Object(i.jsx)(O.a.Header,{style:{textAlign:"center"},children:Object(i.jsx)("h2",{children:"Ecologie"})}),Object(i.jsxs)(O.a.Description,{style:{textAlign:"center",backgroundColor:"whitesmoke",fontFamily:"Times New Roman",lineHeight:1.5},children:[Object(i.jsx)("br",{}),Object(i.jsx)("strong",{children:Object(i.jsx)("mark",{children:"Climatisation et  PAC air/air "})}),Object(i.jsx)("br",{}),"La climatisation r\xe9versible est \xe9galement appel\xe9e chauffage thermodynamique ou pompe \xe0 chaleur air/air. Ce type de technologie combine une fonction rafra\xeechissement en \xe9t\xe9 et chauffage en hiver le tout en \xe9tant tr\xe8s \xe9conomique. En effet les pompes \xe0 chaleur sont les seuls produits qui peuvent resituer plus de puissance qu\u2019ils en consomment. Le tout avec un gain de place sensible, un confort accru, et de r\xe9elles \xe9conomies d\u2019\xe9nergie \xe0 la cl\xe9.",Object(i.jsx)("br",{}),Object(i.jsx)("strong",{children:Object(i.jsx)("mark",{children:" Quel est son principe de fonctionnement ?"})}),Object(i.jsx)("br",{}),"Ce syst\xe8me est constitu\xe9 de deux \xe9changeurs (un \xe0 l\u2019int\xe9rieur de la pi\xe8ce \xe0 traiter et un autre en contact direct avec l\u2019air ext\xe9rieur). L\u2019\xe9changeur ext\xe9rieur va \xeatre utiliser pour chauffer ou refroidir un gaz frigorifique (en fonction de ce que l\u2019on souhaite faire). Dans la pi\xe8ce \xe0 traiter nous allons faire passer l\u2019air de cette derni\xe8re dans l\u2019\xe9changeur int\xe9rieur de fa\xe7on \xe0 le chauffer ou le rafraichir.",Object(i.jsx)("br",{}),Object(i.jsx)("strong",{children:Object(i.jsx)("mark",{children:"Des appareils \xe9co-responsables :"})}),Object(i.jsx)("br",{}),"gr\xe2ce \xe0 son fluide frigorig\xe8ne, le R-32, votre appareil poss\xe8de une meilleure capacit\xe9 thermique que le R-410A. R\xe9frig\xe9rant \xe0 composant unique, il est plus facile \xe0 manipuler, \xe0 r\xe9cup\xe9rer et \xe0 recycler(5)",Object(i.jsx)("br",{})]})]})]}),Object(i.jsxs)(O.a,{children:[Object(i.jsx)(m.a,{src:"img/ecolo/france.png",wrapped:!0,ui:!1}),Object(i.jsxs)(O.a.Content,{children:[Object(i.jsx)(O.a.Header,{style:{textAlign:"center"},children:Object(i.jsx)("h2",{children:"Subvention"})}),Object(i.jsxs)(O.a.Description,{style:{textAlign:"center",backgroundColor:"whitesmoke",fontFamily:"Times New Roman",lineHeight:1.5},children:[Object(i.jsx)("br",{}),Object(i.jsx)("strong",{children:Object(i.jsx)("mark",{children:"Action Logement : Nouvelle aide pour les salari\xe9s du priv\xe9"})}),Object(i.jsx)("br",{}),"L\u2019organisme Action Logement, propose une nouvelle aide : une aide pour financer l\u2019Installation de votre Pompe \xe0 Chaleur. Cette aide est attribu\xe9e aux propri\xe9taires ou locataire. L\u2019aide \xe0 la r\xe9novation \xe9nerg\xe9tique d\u2019Action Logement a pour objectif de couvrir l\u2019int\xe9gralit\xe9 du co\xfbt des travaux, et son montant est plafonn\xe9 \xe0 20 000\u20ac. C\u2019est gr\xe2ce \xe0 cette aide qui appara\xeet fin 2020 que cette pompe \xe0 chaleur peut aujourd\u2019hui vous \xeatre propos\xe9e \xe0 un euro symbolique ! Cumulez plusieurs aides travaux ! De plus, vous aurez la possibilit\xe9 de cumuler cette aide avec les diff\xe9rentes primes & aides d\xe9j\xe0 existantes."]})]})]})]})})]})}}]),r}(j.a.Component),A=function(e){Object(s.a)(r,e);var t=C(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){this.props.children;return Object(i.jsx)(w,{greaterThan:"mobile",children:Object(i.jsx)(q,{})})}}]),r}(j.a.Component),_=function(e){Object(s.a)(r,e);var t=C(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){this.props.children;return Object(i.jsx)(w,{between:["mobile","tablet"],children:Object(i.jsx)(q,{mobile:!0})})}}]),r}(j.a.Component),H=function(e){Object(s.a)(r,e);var t=C(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(z,{children:[Object(i.jsx)(A,{children:this.props.children}),Object(i.jsx)(_,{children:this.props.children})]})})}}]),r}(j.a.Component)}},[["hhwx",0,1,2,3,4,5,6,8]]]);