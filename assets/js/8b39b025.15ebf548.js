"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[723],{567:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(5893),s=a(1151);const i={},t="Manual de Instalacion",l={id:"Linux - Valet/Manual",title:"Manual de Instalacion",description:"Este manual proporciona instrucciones detalladas para instalar y configurar el sistema FacturadorPro3 en un entorno Linux utilizando Valet. Aseg\xfarese de seguir cada paso cuidadosamente para garantizar una instalaci\xf3n exitosa.",source:"@site/docs/Linux - Valet/Manual.md",sourceDirName:"Linux - Valet",slug:"/Linux - Valet/Manual",permalink:"/Trabajo_Web/docs/Linux - Valet/Manual",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Linux - Valet/Manual.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manual de Instalaci\xf3n",permalink:"/Trabajo_Web/docs/Docker - Linux - SSL/Instalacion"},next:{title:"Instalaci\xf3n del Facturador",permalink:"/Trabajo_Web/docs/SSL Externa e Independiente/Instalacion"}},o={},c=[{value:"Requisitos Previos",id:"requisitos-previos",level:2},{value:"Pasos",id:"pasos",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"manual-de-instalacion",children:"Manual de Instalacion"}),"\n",(0,r.jsx)(n.p,{children:"Este manual proporciona instrucciones detalladas para instalar y configurar el sistema FacturadorPro3 en un entorno Linux utilizando Valet. Aseg\xfarese de seguir cada paso cuidadosamente para garantizar una instalaci\xf3n exitosa."}),"\n",(0,r.jsx)(n.h2,{id:"requisitos-previos",children:"Requisitos Previos"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Aseg\xfarate de tener acceso root."}),"\n",(0,r.jsx)(n.li,{children:"Instala PHP 7.2 y todas las librer\xedas requeridas por el aplicativo y Laravel."}),"\n",(0,r.jsx)(n.li,{children:"Instala MySQL (y PhpMyAdmin opcional) para las pruebas de la base de datos."}),"\n",(0,r.jsx)(n.li,{children:"Instala Git, Curl, Composer."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"pasos",children:"Pasos"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1. Instalaci\xf3n de PHP 7.2 en Ubuntu"})}),"\n",(0,r.jsx)(n.p,{children:"Ubuntu no cuenta con la versi\xf3n 7.2 de php de manera nativa por lo que se debe seguir un par de pasos para agregar un repositorio y luego proceder con la instalaci\xf3n, ellos son:"}),"\n",(0,r.jsx)(n.p,{children:"a. Para poder ejecutar los siguientes comandos debe acceder a la terminal como usuario root."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"apt-get update\n"})}),"\n",(0,r.jsx)(n.p,{children:"b. Para poder agregar un PPA, ejecute los siguientes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"apt-get install software-properties-common\r\napt-get install python-software-properties\n"})}),"\n",(0,r.jsx)(n.p,{children:"c. Para agregar el PPA, en algunos casos solicitar\xe1 confirmar con enter"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"add-apt-repository ppa:ondrej/php\r\napt-get update\n"})}),"\n",(0,r.jsx)(n.p,{children:"d. Procedemos a Instalar PHP, aunque se instalar algunas librer\xedas junto con PHP, se agregan para asegurar la instalaci\xf3n"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. Instalaci\xf3n de MySQL y PhpMyAdmin"})}),"\n",(0,r.jsx)(n.p,{children:"Instalamos Mysql, phpmyadmin\r\nopcional"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin.\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Se le solicitara contrase\xf1a dos veces, con su confirmaci\xf3n, tanto para mysql como para phpmyadmin"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"3. Instalaci\xf3n de Curl y Git"})}),"\n",(0,r.jsx)(n.p,{children:"Instalamos Curl y Git"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"apt-get install git\r\napt-get install curl\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"4. Instalaci\xf3n de Composer"})}),"\n",(0,r.jsx)(n.p,{children:"Luego se procede a instalar Composer"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"apt-get install composer\n"})}),"\n",(0,r.jsx)(n.p,{children:"Dar permisos de lectura y escritura a la carpeta composer"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Chmod \u2013R 777 ~/.composer\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"5. Instalaci\xf3n de librer\xedas de Valet"})}),"\n",(0,r.jsx)(n.p,{children:"Instalar librerias cpriego de Valet"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"composer global require cpriego/valet-linux\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>t});var r=a(7294);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);