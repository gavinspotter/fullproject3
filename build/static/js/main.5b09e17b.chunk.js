(this.webpackJsonpmapblog=this.webpackJsonpmapblog||[]).push([[0],Array(26).concat([function(e,t,a){e.exports=a(57)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),r=a.n(c),i=(a(31),a(4)),o=a(2),u=(a(32),function(e){return l.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},l.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),s=(a(33),function(e){return l.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}),m=(a(34),function(e){return l.a.createElement("li",{className:"user-item"},l.a.createElement(s,{className:"user-item__content"},l.a.createElement(i.b,{to:"/".concat(e.id,"/places")},l.a.createElement("div",{className:"user-item__image"},l.a.createElement(u,{image:e.image,alt:e.name})),l.a.createElement("div",{className:"user-item__info"},l.a.createElement("h2",null,e.name),l.a.createElement("h3",null,e.placeCount," ",1===e.placeCount?"Place":"Places")))))}),d=(a(40),function(e){return 0===e.items.length?l.a.createElement("div",{className:"center"},l.a.createElement(s,null,l.a.createElement("h2",null," no users found "))):l.a.createElement("ul",null,e.items.map((function(e){return l.a.createElement(m,{key:e.id,id:e.id,image:e.image,name:e.name,placeCount:e.places})})))}),E=function(){return l.a.createElement(d,{items:[{id:"u1",name:"Gavin Potter",image:"https://avatars2.githubusercontent.com/u/59751343?v=4",places:2}]})},p=a(1),f=a(8),v=a(7),h=a(15),b=function(e){return{type:"MINLENGTH",val:e}},N=function(e,t){var a,n=!0,l=Object(h.a)(t);try{for(l.s();!(a=l.n()).done;){var c=a.value;"REQUIRE"===c.type&&(n=n&&e.trim().length>0),"MINLENGTH"===c.type&&(n=n&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(n=n&&e.trim().length<=c.val),"MIN"===c.type&&(n=n&&+e>=c.val),"MAX"===c.type&&(n=n&&+e<=c.val),"EMAIL"===c.type&&(n=n&&/^\S+@\S+\.\S+$/.test(e))}}catch(r){l.e(r)}finally{l.f()}return n},g=(a(41),function(e,t){switch(t.type){case"CHANGE":return Object(v.a)(Object(v.a)({},e),{},{value:t.val,isValid:N(t.val,t.validators)});case"TOUCH":return Object(v.a)(Object(v.a)({},e),{},{isTouched:!0});default:return e}}),y=function(e){var t=Object(n.useReducer)(g,{value:"",isTouched:!1,isValid:!1}),a=Object(p.a)(t,2),c=a[0],r=a[1],i=e.id,o=e.onInput,u=c.value,s=c.isValid;Object(n.useEffect)((function(){o(i,u,s)}),[i,u,s,o]);var m=function(t){r({type:"CHANGE",val:t.target.value,validators:e.validators})},d=function(){r({type:"TOUCH"})},E="input"===e.element?l.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:m,onBlur:d,value:c.value}):l.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:m,onBlur:d,value:c.value});return l.a.createElement("div",{className:"form-control ".concat(!c.isValid&&c.isTouched&&"form-control--invalid")},l.a.createElement("label",{htmlFor:e.id},e.label),E,!c.isValid&&c.isTouched&&l.a.createElement("p",null,e.errorText))},_=(a(42),function(e){return e.href?l.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?l.a.createElement(i.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):l.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}),j=(a(43),function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid;return Object(v.a)(Object(v.a)({},e),{},{inputs:Object(v.a)(Object(v.a)({},e.inputs),{},Object(f.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});default:return e}}),O=function(){var e=Object(n.useReducer)(j,{inputs:{title:{value:"",isValid:!1},description:{value:"",isValid:!1}},isValid:!1}),t=Object(p.a)(e,2),a=t[0],c=t[1],r=Object(n.useCallback)((function(e,t,a){c({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]);return l.a.createElement("form",{className:"place-form"},l.a.createElement(y,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"please enter a valid title",onInput:r}),l.a.createElement(y,{id:"description",element:"textarea",label:"description",validators:[b(5)],errorText:"please enter a valid description (5 characters)",onInput:r}),l.a.createElement(_,{type:"submit",disabled:!a.isValid},"add place"))},C=a(58),w=(a(44),function(e){return r.a.createPortal(l.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),I=(a(45),function(e){var t=l.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},l.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},l.a.createElement("h2",null,e.header)),l.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},l.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),l.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return r.a.createPortal(t,document.getElementById("modal-hook"))}),k=function(e){return l.a.createElement(l.a.Fragment,null,e.show&&l.a.createElement(w,{onClick:e.onCancel}),l.a.createElement(C.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},l.a.createElement(I,e)))},T=(a(46),function(e){var t=Object(n.useRef)(),a=e.center,c=e.zoom;return Object(n.useEffect)((function(){var a=new window.google.maps.Map(t.current,{center:e.center,zoom:e.zoom});new window.google.maps.Marker({position:e.center,map:a})}),[a,c]),l.a.createElement("div",{ref:t,className:"map ".concat(e.className),style:e.style})}),V=(a(47),function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),c=a[0],r=a[1],i=function(){return r(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{show:c,onCancel:i,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:l.a.createElement(_,{onClick:i},"close")},l.a.createElement("div",{className:"map-container"},l.a.createElement(T,{center:e.coordinates,zoom:16}))),l.a.createElement("li",{className:"place-item"},l.a.createElement(s,{className:"place-item__content"},l.a.createElement("div",{className:"place-item__image"},l.a.createElement("img",{src:e.image,alt:e.title})),l.a.createElement("div",{className:"place-item__info"},l.a.createElement("h2",null,e.title),l.a.createElement("h3",null,e.address),l.a.createElement("p",null,e.description)),l.a.createElement("div",{className:"place-item__actions"}),l.a.createElement(_,{inverse:!0,onClick:function(){return r(!0)}},"view on map"),l.a.createElement(_,{to:"/places/".concat(e.id)},"edit"),l.a.createElement(_,{danger:!0},"delete"))))}),x=(a(48),function(e){return 0===e.items.length?l.a.createElement("div",{className:"place-list center"},l.a.createElement(s,null,l.a.createElement("h2",null,"no places found"),l.a.createElement("button",null," share place "))):l.a.createElement("ul",{className:"place-list"},e.items.map((function(e){return l.a.createElement(V,{key:e.id,id:e.id,image:e.imageUrl,title:e.title,description:e.description,address:e.address,creatorId:e.creator,coordinates:e.location})})))}),A=[{id:"p1",title:"my house",description:"its my place",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/1/1b/The_judgement_of_the_dead_in_the_presence_of_Osiris.jpg",address:"163 North Shore Road, Hampton, NH 03842",location:{lat:42.9465818,lng:-70.795169},creator:"u1"},{id:"p2",title:"my house",description:"its my place",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/1/1b/The_judgement_of_the_dead_in_the_presence_of_Osiris.jpg",address:"163 North Shore Road, Hampton, NH 03842",location:{lat:42.9465818,lng:-70.795169},creator:"u2"}],H=function(){var e=Object(o.g)().userId,t=A.filter((function(t){return t.creator===e}));return l.a.createElement(x,{items:t})},R=(a(49),function(e){return l.a.createElement("li",{className:"journal-item"},l.a.createElement(s,{className:"journal-item__content"},l.a.createElement("div",{className:""},l.a.createElement("div",null,e.entry),l.a.createElement("div",null,e.date)),l.a.createElement(_,null,"edit"),l.a.createElement(_,null,"delete")))}),S=(a(50),function(e){return 0===e.items.length?l.a.createElement("div",null,l.a.createElement("h2",null," no entry's found ")):l.a.createElement("ul",{className:"journal-list"},e.items.map((function(e){return l.a.createElement(R,{key:e.id,id:e.id,entry:e.entry,date:e.date})})))}),U=[{id:"j1",date:"aug 25",entry:"my first journal entry",creator:"u1"},{id:"j1",date:"aug 25",entry:"my first journal entry",creator:"u2"},{id:"j1",date:"aug 25",entry:"my second journal entry",creator:"u1"}],P=function(){var e=Object(o.g)().userId,t=U.filter((function(t){return t.creator===e}));return l.a.createElement(S,{items:t})},L=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid;return Object(v.a)(Object(v.a)({},e),{},{inputs:Object(v.a)(Object(v.a)({},e.inputs),{},Object(f.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});default:return e}},M=function(){var e=Object(n.useReducer)(L,{inputs:{title:{value:"",isValid:!1},description:{value:"",isValid:!1}},isValid:!1}),t=Object(p.a)(e,2),a=t[0],c=t[1],r=Object(n.useCallback)((function(e,t,a){c({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]);return l.a.createElement("form",{className:"place-form"},l.a.createElement(y,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"please enter a valid title",onInput:r}),l.a.createElement(y,{id:"description",element:"textarea",label:"description",validators:[b(5)],errorText:"please enter a valid description (5 characters)",onInput:r}),l.a.createElement(_,{type:"submit",disabled:!a.isValid},"add place"))},G=(a(51),function(e){return l.a.createElement("header",{className:"main-header"},e.children)}),z=(a(52),function(e){return l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement(i.c,{to:"/",exact:!0},"ALL USERS")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/u1/places"},"MY PLACES")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/places/new"},"ADD PLACE")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/journal/new"},"ADD JOURNAL ENTRY")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/u1/journal"},"MY JOURNAL ENTRYS")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/themes"},"THEME")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/auth"},"AUTHENTICATE")))}),B=(a(53),function(e){var t=l.a.createElement(C.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},l.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return r.a.createPortal(t,document.getElementById("drawer-hook"))}),D=(a(54),function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),c=a[0],r=a[1],o=function(){r(!1)};return l.a.createElement(l.a.Fragment,null,c&&l.a.createElement(w,{onClick:o}),l.a.createElement(B,{show:c,onClick:o},l.a.createElement("nav",{className:"main-navigation__drawer-nav"},l.a.createElement(z,null))),l.a.createElement(G,null,l.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){r(!0)}},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("h1",{className:"main-navigation__title"},l.a.createElement(i.b,{to:"/"},"Your Places")),l.a.createElement("nav",{className:"main-navigation__header-nav"},l.a.createElement(z,null))))}),Y=a(23),F=(a(56),function(){var e=Object(Y.a)(),t=e.register,a=e.handleSubmit,c=e.errors,r=Object(n.useState)(""),i=Object(p.a)(r,2),o=i[0],u=i[1];return l.a.createElement("form",{className:"theme-form",style:{background:o},onSubmit:a((function(e){console.log(e),u(e.acolor)}))},l.a.createElement("input",{type:"text",placeholder:o,name:"acolor",ref:t({required:!0,minLength:2})}),l.a.createElement("button",null," change theme "),c.acolor&&l.a.createElement("p",{style:{color:"teal"}},"thats not a color"))}),J=function(){return l.a.createElement(i.a,null,l.a.createElement(D,null),l.a.createElement("main",null,l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",exact:!0},l.a.createElement(E,null)),l.a.createElement(o.b,{path:"/:userId/places",exact:!0},l.a.createElement(H,null)),l.a.createElement(o.b,{path:"/places/new",exact:!0},l.a.createElement(O,null)),l.a.createElement(o.b,{path:"/:userId/journal",exact:!0},l.a.createElement(P,null)),l.a.createElement(o.b,{path:"/journal/new",exact:!0},l.a.createElement(M,null)),l.a.createElement(o.b,{path:"/themes"},l.a.createElement(F,{exact:!0})),l.a.createElement(o.a,{to:"/"}))))};r.a.render(l.a.createElement(J,null),document.getElementById("root"))}]),[[26,1,2]]]);
//# sourceMappingURL=main.5b09e17b.chunk.js.map