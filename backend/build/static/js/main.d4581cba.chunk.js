(this["webpackJsonpranking-app-frontend"]=this["webpackJsonpranking-app-frontend"]||[]).push([[0],{186:function(e,n,t){e.exports=t(389)},389:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(51),l=t.n(i),c=t(20),o=t(25),u=t(26),s=t(29),d=t(28),p=t(396),m=t(403),g=t(404),h=t(402),f=t(40),v=t(390),y=t(52),E=t(23);var k=function(e){var n=e.text,t=e.type,a=e.name,i=e.value,l=e.onChange;return r.a.createElement("div",null,n,r.a.createElement("input",{type:t,name:a,value:i,onChange:l}))},b=t(7),w=t.n(b),N=t(16),O=t(35),R=t.n(O),C={login:function(){var e=Object(N.a)(w.a.mark((function e(n){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.post("/api/login",n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},j={icon:"",header:"",message:""},I=function(e,n){e({type:"CHANGE_NOTIFICATION",message:n}),setTimeout((function(){e({type:"CHANGE_NOTIFICATION",message:{icon:"",header:"",message:""}})}),5e3)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;return"CHANGE_NOTIFICATION"===n.type?n.message:e},T={username:void 0,admin:void 0,token:""},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1?arguments[1]:void 0;if("LOGIN"===n.type){var t={username:n.username,admin:n.admin,token:n.token};return window.localStorage.setItem("loggedUser",JSON.stringify(t)),{username:n.username,admin:n.admin,token:n.token}}return"LOGOUT"===n.type?(window.localStorage.removeItem("loggedUser"),{username:void 0,admin:void 0,token:""}):e},G=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).state={username:"",password:""},a.handleFormChange=a.handleFormChange.bind(Object(E.a)(a)),a.logIn=a.logIn.bind(Object(E.a)(a)),a}return Object(u.a)(t,[{key:"handleFormChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"logIn",value:function(e){e.preventDefault();var n=this.props.logIn;n(this.state),this.setState({username:"",password:""})}},{key:"render",value:function(){var e=this.state,n=e.username,t=e.password;return r.a.createElement("div",null,r.a.createElement("h2",null,"Signing in is only available for admin!"),r.a.createElement("form",{onSubmit:this.logIn},r.a.createElement(k,{type:"input",text:"Username:",name:"username",value:n,onChange:this.handleFormChange}),r.a.createElement(k,{type:"password",text:"Password:",name:"password",value:t,onChange:this.handleFormChange}),r.a.createElement("button",{type:"submit"},"Log in"," ")))}}]),t}(r.a.Component),S={logIn:function(e){return function(){var n=Object(N.a)(w.a.mark((function n(t){var a,r;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,C.login(e);case 3:a=n.sent,t({type:"LOGIN",username:a.username,admin:a.admin,token:a.token}),"Login successfully!",r="Welcome back, ".concat(a.username,"!"),"sign in alternate",I(t,{header:"Login successfully!",content:r,icon:"sign in alternate"}),n.next=17;break;case 11:n.prev=11,n.t0=n.catch(0),"Login failed!","Wrong username or password!","thumbs down",I(t,{header:"Login failed!",content:"Wrong username or password!",icon:"thumbs down"});case 17:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}},F=Object(c.b)(null,S)(G),L=t(401);var _=Object(c.b)((function(e){return{notification:e.notification}}))((function(e){var n=e.notification;return""===n.icon?null:r.a.createElement("div",{className:"success"},r.a.createElement(L.a,{icon:n.icon,header:n.header,content:n.content}))})),P=t(176),D=t(30),B=t(175),U="",H=function(){return{headers:{Authorization:U}}},K=function(){var e=Object(N.a)(w.a.mark((function e(n){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("/api/ranking","/new"),e.next=3,R.a.post(t,n,H());case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(N.a)(w.a.mark((function e(n){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("/api/ranking","/").concat(n),e.next=3,R.a.delete(t,H());case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),M=function(){var e=Object(N.a)(w.a.mark((function e(n){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("/api/ranking","/").concat(n),e.next=3,R.a.get(t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),W={createRanking:K,getRankings:function(){var e=Object(N.a)(w.a.mark((function e(){var n,t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("/api/ranking","/"),e.next=3,R.a.get(n);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),deleteRanking:Y,getRanking:M},J={allRankings:[],selectedRanking:{},loading:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1?arguments[1]:void 0;if("CREATE_RANKING"===n.type){var t=[].concat(Object(B.a)(e.allRankings),[n.content.ranking]),a=Object(D.a)({},e,{allRankings:t,loading:!1});return a}if("CREATING_RANKING"===n.type){var r=Object(D.a)({},e,{loading:!0});return r}if("SETTING_RANKINGS"===n.type){var i=Object(D.a)({},e,{loading:!0});return i}if("SET_RANKINGS"===n.type){var l=Object(D.a)({},e,{allRankings:n.content.rankings,loading:!1});return l}if("DELETING_RANKING"===n.type){var c=Object(D.a)({},e,{loading:!0});return c}if("DELETE_RANKING"===n.type){var o=e.allRankings.filter((function(e){return e._id!==n.content.deletedRanking._id})),u=Object(D.a)({},e,{allRankings:o,loading:!1});return u}if("GETTING_RANKING"===n.type){var s=Object(D.a)({},e,{loading:!0});return s}if("GET_RANKING"===n.type){var d=Object(D.a)({},e,{selectedRanking:n.content.ranking,loading:!1});return d}return e},q=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(o.a)(this,t),(e=n.call(this)).state={rankingFileBase64:void 0,rankingFileName:"",rankingName:"",rankingDate:(new Date).toString()},e.handleFormChange=e.handleFormChange.bind(Object(E.a)(e)),e.onDrop=e.onDrop.bind(Object(E.a)(e)),e.handleFormChange=e.handleFormChange.bind(Object(E.a)(e)),e.sendFile=e.sendFile.bind(Object(E.a)(e)),e}return Object(u.a)(t,[{key:"onDrop",value:function(e){var n=this,t=e[0],a=new FileReader;a.onload=function(e){n.setState({rankingFileBase64:e.target.result,rankingFileName:t.name})},a.readAsDataURL(t)}},{key:"sendFile",value:function(e){e.preventDefault();var n=this.state,t={rankingFileBase64:n.rankingFileBase64,rankingName:n.rankingName,rankingDate:n.rankingDate};(0,this.props.createNewRanking)(t),this.setState({rankingFileBase64:void 0,rankingFileName:"",rankingName:"",rankingDate:""})}},{key:"handleFormChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"renderUploadForm",value:function(){var e=this.state,n=e.rankingFileBase64,t=e.rankingName,a=e.rankingDate;return n?r.a.createElement("form",{onSubmit:this.sendFile},r.a.createElement(k,{type:"input",text:"Name of ranking:",name:"rankingName",value:t,onChange:this.handleFormChange}),r.a.createElement(k,{type:"date",text:"Date of competition:",name:"rankingDate",value:a,onChange:this.handleFormChange}),r.a.createElement("button",{type:"submit"},"Upload")):null}},{key:"renderDroppedFileName",value:function(){var e=this.state,n=e.rankingFileBase64,t=e.rankingFileName;if(n){var a="Filename: ".concat(t);return r.a.createElement("p",null,a)}return null}},{key:"renderDropzone",value:function(){return r.a.createElement("div",{id:"fileDrop"},r.a.createElement("h3",null,"Drop excel file to create new ranking"),r.a.createElement(P.a,{className:"field upload-box",onDrop:this.onDrop,multiple:!1,accept:".xls"},r.a.createElement("div",{className:"field",style:{borderStyle:"dashed"}},r.a.createElement("p",{className:"upload-p"},"Click to navigate to the file or drag and drop them here."),r.a.createElement("br",null))))}},{key:"renderFileUploadingForm",value:function(){return r.a.createElement("div",null,this.renderDropzone(),this.renderDroppedFileName(),this.renderUploadForm())}},{key:"render",value:function(){var e=this.props.credentials.admin;return r.a.createElement("div",null,e&&this.renderFileUploadingForm(),!e&&r.a.createElement("h3",null,"You are not allowed to be here"))}}]),t}(r.a.Component),V={createNewRanking:function(e){return function(){var n=Object(N.a)(w.a.mark((function n(t){var a,r;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:"CREATING_RANKING"}),n.next=4,W.createRanking(e);case 4:a=n.sent,r="Ranking ".concat(e.rankingName," was created succsefully!"),"Click Rankings to view ranking you created.","thumbs up",t({type:"CREATE_RANKING",content:a}),I(t,{header:r,content:"Click Rankings to view ranking you created.",icon:"thumbs up"}),n.next=18;break;case 12:n.prev=12,n.t0=n.catch(0),"Error occured while creating ranking","Make sure excel file is correct rating file","thumbs down",I(t,{header:"Error occured while creating ranking",content:"Make sure excel file is correct rating file",icon:"thumbs down"});case 18:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}},Q=Object(c.b)((function(e){return{credentials:e.login}}),V)(q),X=t(400),Z=function(e){return new Date(e.date).getTime()},$=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(N.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.getAllRankings,e.next=3,n();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteRanking",value:function(e){(0,this.props.deleteRankingById)(e)}},{key:"deleteButton",value:function(e){var n=this;return r.a.createElement("button",{type:"button",className:"delete",onClick:function(){return n.deleteRanking(e)}},"Delete")}},{key:"renderRankingCell",value:function(e){var n=e.date.substring(0,10),t="/rankings/".concat(e._id),a=this.props.credentials.admin;return r.a.createElement(X.a.Row,{key:e._id},r.a.createElement(X.a.Cell,null,r.a.createElement(p.a,{to:t}," ",e.competitionName)),r.a.createElement(X.a.Cell,null,n),r.a.createElement(X.a.Cell,null,e.positions.length),r.a.createElement(X.a.Cell,null,a&&this.deleteButton(e._id)))}},{key:"render",value:function(){var e=this,n=this.props.ranking,t=n.allRankings;if(n.loading)return r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui active inverted dimmer"},r.a.createElement("div",{className:"ui textloader"},"Loading rankings from database")));if(0===t.length)return r.a.createElement("p",{id:"noRankings"},"No rankings saved to database yet");var a=t.slice().sort((function(e,n){return Z(n)-Z(e)}));return r.a.createElement("div",{id:"rankingList"},r.a.createElement("h3",null,"Here are all ".concat(a.length," rankings that are uploaded to this site")),r.a.createElement(X.a,null,r.a.createElement(X.a.Header,null,r.a.createElement(X.a.Row,null,r.a.createElement(X.a.HeaderCell,null,"Competition name"),r.a.createElement(X.a.HeaderCell,null,"Date"),r.a.createElement(X.a.HeaderCell,null,"Players"),r.a.createElement(X.a.HeaderCell,null))),r.a.createElement(X.a.Body,null,a.map((function(n){return e.renderRankingCell(n)})))))}}]),t}(r.a.Component),ee={getAllRankings:function(){return function(){var e=Object(N.a)(w.a.mark((function e(n){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:"SETTING_RANKINGS"}),e.next=4,W.getRankings();case 4:t=e.sent,"Rankings fetched successfully!","","list ul",n({type:"SET_RANKINGS",content:t}),I(n,{header:"Rankings fetched successfully!",content:"",icon:"list ul"}),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(0),"Error while fetching rankings","Try again later","thumbs down",I(n,{header:"Error while fetching rankings",content:"Try again later",icon:"thumbs down"});case 18:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}()},deleteRankingById:function(e){return function(){var n=Object(N.a)(w.a.mark((function n(t){var a,r;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:"DELETING_RANKING"}),n.next=4,W.deleteRanking(e);case 4:a=n.sent,r="Ranking ".concat(a.deletedRanking.competitionName," was deleted succsefully!"),"Page should update list automatically","thumbs up",t({type:"DELETE_RANKING",content:a}),I(t,{header:r,content:"Page should update list automatically",icon:"thumbs up"}),n.next=18;break;case 12:n.prev=12,n.t0=n.catch(0),"Error occured while deleting ranking","Try again later","thumbs down",I(t,{header:"Error occured while deleting ranking",content:"Try again later",icon:"thumbs down"});case 18:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}},ne=Object(c.b)((function(e){return{ranking:e.ranking,credentials:e.login}}),ee)($);var te=function(e){var n=e.positions;return r.a.createElement("div",null,r.a.createElement(X.a,null,r.a.createElement(X.a.Header,null,r.a.createElement(X.a.Row,null,r.a.createElement(X.a.HeaderCell,null,"Position"),r.a.createElement(X.a.HeaderCell,null,"Player"),r.a.createElement(X.a.HeaderCell,null,"Club"),r.a.createElement(X.a.HeaderCell,null,"Rating"))),r.a.createElement("tbody",null,n.map((function(e){return n=e,r.a.createElement(X.a.Row,{key:n._id},r.a.createElement(X.a.Cell,null,n.position),r.a.createElement(X.a.Cell,null,n.playerName),r.a.createElement(X.a.Cell,null,n.clubName),r.a.createElement(X.a.Cell,null,n.rating));var n})))))},ae=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).state={selectedIndex:0},a.toggleLeft=a.toggleLeft.bind(Object(E.a)(a)),a.toggleRight=a.toggleRight.bind(Object(E.a)(a)),a}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.location;(0,e.getRankingById)(n.match.params.rankingId)}},{key:"toggleLeft",value:function(){var e=this.state.selectedIndex;this.setState({selectedIndex:e-1})}},{key:"toggleRight",value:function(){var e=this.state.selectedIndex;this.setState({selectedIndex:e+1})}},{key:"renderNavigationButtons",value:function(e){var n=this.state.selectedIndex;return r.a.createElement("div",{id:"navigationButtons"},r.a.createElement(v.a,{onClick:this.toggleLeft,disabled:0===n},r.a.createElement(f.a,{name:"angle double left"})),r.a.createElement(v.a,{onClick:this.toggleRight,disabled:n===e-1},r.a.createElement(f.a,{name:"angle double right"})))}},{key:"render",value:function(){var e=this.props.ranking;if(e.loading)return r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui active inverted dimmer"},r.a.createElement("div",{className:"ui textloader"},"Loading ranking from database")));var n=e.selectedRanking;if(!n.positions)return r.a.createElement("p",null,"No ranking with this id!");var t=function(e){return e.positions.slice().sort((function(e,n){return e.position-n.position}))}(n),a=function(e){var n=0;return e.reduce((function(e,t){var a=e;return a[n]&&e[n].length>=100&&(n+=1),e[n]||(a[n]=[]),a[n].push(t),a}),[])}(t),i="".concat(n.competitionName,", players ").concat(t.length),l=this.state.selectedIndex,c="Showing page ".concat(l+1," / ").concat(a.length);return r.a.createElement("div",null,r.a.createElement("h3",null,i),r.a.createElement("h4",null,c),this.renderNavigationButtons(a.length),r.a.createElement(te,{positions:a[l]}),this.renderNavigationButtons(a.length))}}]),t}(r.a.Component),re={getRankingById:function(e){return function(){var n=Object(N.a)(w.a.mark((function n(t){var a,r;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:"GETTING_RANKING"}),n.next=4,W.getRanking(e);case 4:a=n.sent,r="Ranking ".concat(a.ranking.competitionName," fetched successfully!"),"Have fun browsing!","trophy",t({type:"GET_RANKING",content:a}),I(t,{header:r,content:"Have fun browsing!",icon:"trophy"}),n.next=18;break;case 12:n.prev=12,n.t0=n.catch(0),"Error while fetching ranking","Try again later","thumbs down",I(t,{header:"Error while fetching ranking",content:"Try again later",icon:"thumbs down"});case 18:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}},ie=Object(c.b)((function(e){return{ranking:e.ranking}}),re)(ae),le={getPlayers:function(){var e=Object(N.a)(w.a.mark((function e(){var n,t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("/api/players","/"),e.next=3,R.a.get(n);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getPlayer:function(){var e=Object(N.a)(w.a.mark((function e(n){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("/api/players","/").concat(n),e.next=3,R.a.get(t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},ce={players:[],selectedPlayer:void 0,loading:!1,error:!1},oe=function(e){return"GETTING_PLAYERS"===e||"GETTING_PLAYER"===e},ue=function(e){return"GET_PLAYERS_FAILURE"===e||"GET_PLAYER_FAILURE"===e},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,n=arguments.length>1?arguments[1]:void 0;if(oe(n.type)){var t=Object(D.a)({},e,{loading:!0,error:!1});return t}if("GET_PLAYERS_SUCCESS"===n.type){var a=Object(D.a)({},e,{players:n.content.players,loading:!1,error:!1});return a}if("GET_PLAYER_SUCCESS"===n.type){var r=Object(D.a)({},e,{selectedPlayer:n.content.player,loading:!1,error:!1});return r}if(ue(n.type)){var i=Object(D.a)({},e,{loading:!1,error:!0});return i}return e},de=t(405),pe=function(){return r.a.createElement("div",null,r.a.createElement(de.a,{as:"h2",icon:!0,textAlign:"center"},r.a.createElement(f.a,{name:"chart line",circular:!0}),r.a.createElement(de.a.Content,null,"All rating data in one place"),r.a.createElement("div",{className:"sub header"},"Filter players by writing players name, click players name to view statistics"),r.a.createElement("div",{className:"sub header"},"NOTE: Write surname before firstname")))},me=t(397);var ge=function(e){var n=e.handleNameChange,t=e.playerName;return r.a.createElement("div",null,"Name:",r.a.createElement(me.a,{type:"text",onChange:n,value:t,text:"Name"}))},he=t(399);var fe=function(e){var n=e.players;return r.a.createElement(he.a,{id:"playerList"},n.map((function(e){return function(e){return r.a.createElement(he.a.Item,{key:e._id,id:e._id},r.a.createElement(p.a,{to:"/players/".concat(e._id)},e.name))}(e)})))},ve=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(o.a)(this,t),(e=n.call(this)).state={playerName:"",filteredPlayers:[]},e.handleNameChange=e.handleNameChange.bind(Object(E.a)(e)),e.filterPlayers=e.filterPlayers.bind(Object(E.a)(e)),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(N.a)(w.a.mark((function e(){var n,t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.getAllPlayers,t=this.state.playerName,e.next=4,n();case 4:this.filterPlayers(t);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleNameChange",value:function(e){this.setState({playerName:e.target.value}),this.filterPlayers(e.target.value)}},{key:"filterPlayers",value:function(e){var n=this.props.player.players.filter((function(n){return function(e,n){return e.toLowerCase().includes(n.toLowerCase())}(n.name,e)}));this.setState({filteredPlayers:n})}},{key:"amountOfResults",value:function(){var e=this.state.filteredPlayers.length;return 0===e?r.a.createElement("h2",null,"No players found"):r.a.createElement("h2",null,"Showing ".concat(e," players that matched your search"))}},{key:"render",value:function(){var e=this.props.player;if(!e||e.loading)return r.a.createElement("p",null,"Please be patient :)");if(e.error)return r.a.createElement("p",null,"Error");var n=this.state,t=n.playerName,a=n.filteredPlayers;return r.a.createElement("div",null,r.a.createElement(pe,null),r.a.createElement(ge,{handleNameChange:this.handleNameChange,playerName:t}),this.amountOfResults(),r.a.createElement(fe,{players:a}))}}]),t}(r.a.Component),ye={getAllPlayers:function(){return function(){var e=Object(N.a)(w.a.mark((function e(n){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:"GETTING_PLAYERS"}),e.next=4,le.getPlayers();case 4:t=e.sent,"Players fetched successfully!","","list ul",n({type:"GET_PLAYERS_SUCCESS",content:t}),I(n,{header:"Players fetched successfully!",content:"",icon:"list ul"}),e.next=19;break;case 12:e.prev=12,e.t0=e.catch(0),"Error while fetching players","Try again later","thumbs down",n({type:"GET_PLAYERS_FAILURE"}),I(n,{header:"Error while fetching players",content:"Try again later",icon:"thumbs down"});case 19:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}()}},Ee=Object(c.b)((function(e){return{player:e.player}}),ye)(ve),ke=t(169);var be=function(e){var n=e.header,t=e.label,a=e.labels,i=e.data,l=e.options,c={labels:a,datasets:[{label:t,fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:i}]};return r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement(ke.a,{data:c,options:l}))};var we=function(e){var n=e.positions,t=function(e){return e.map((function(e){return e.date.substring(0,10)}))}(n),a=function(e){return e.map((function(e){return e.rating}))}(n),i=function(e){return e.map((function(e){return e.position}))}(n);return r.a.createElement("div",null,r.a.createElement(be,{labels:t,data:a,header:"Rating over time",label:"Rating",options:{scales:{yAxes:[{ticks:{reverse:!1}}]}}}),r.a.createElement(be,{labels:t,data:i,header:"Position in mens ranking over time",label:"Position",options:{scales:{yAxes:[{ticks:{reverse:!0}}]}}}))},Ne=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.location;(0,e.getPlayerById)(n.match.params.playerId)}},{key:"render",value:function(){var e=this.props.player,n=e.selectedPlayer;if(!e||e.loading)return r.a.createElement("p",null,"Loading");if(!n||e.error)return r.a.createElement("p",null,"Error");var t=n.positions.sort((function(e,n){var t=new Date(e.date),a=new Date(n.date);return t.getTime()-a.getTime()}));return r.a.createElement("div",{id:"playerView"},r.a.createElement("h2",null,"Statistics of ".concat(n.name)),r.a.createElement(we,{positions:t}))}}]),t}(r.a.Component),Oe={getPlayerById:function(e){return function(){var n=Object(N.a)(w.a.mark((function n(t){var a,r;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:"GETTING_PLAYER"}),n.next=4,le.getPlayer(e);case 4:a=n.sent,r="Player ".concat(a.player.name," fetched successfully!"),"","list ul",t({type:"GET_PLAYER_SUCCESS",content:a}),I(t,{header:r,content:"",icon:"list ul"}),n.next=19;break;case 12:n.prev=12,n.t0=n.catch(0),"Error while fetching player","Try again later","thumbs down",t({type:"GET_PLAYER_FAILURE"}),I(t,{header:"Error while fetching player",content:"Try again later",icon:"thumbs down"});case 19:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}},Re=Object(c.b)((function(e){return{player:e.player}}),Oe)(Ne),Ce=t(406),je=t(398),Ie=function(){return r.a.createElement("div",{id:"aboutPage"},r.a.createElement(de.a,{as:"h2",icon:!0,textAlign:"center"},r.a.createElement(f.a,{name:"table tennis",circular:!0}),r.a.createElement(de.a.Content,null,"Welcome to Ranking-app!")),r.a.createElement(Ce.a,null,"Purpose of this website is to offer long term statisctics for players who play in Finland.",r.a.createElement(je.a,null),"This website is developed in co-operation with Finnish table tennis union:"," ",r.a.createElement("a",{href:"http://www.sptl.fi/sptl_uudet/"},"www.sptl.fi"),r.a.createElement(je.a,null),r.a.createElement(f.a,{name:"github",circular:!0}),"View source code:"," ",r.a.createElement("a",{href:"https://github.com/FummiTaksi/ranking-app-backend"},"https://github.com/FummiTaksi/ranking-app-backend"),r.a.createElement(je.a,null),"Any questions or suggestions?"," ",r.a.createElement("a",{href:"mailto:mustonealeksi@gmail.com"},"Please contact")))},xe=function(e,n,t){return r.a.createElement(h.a.Item,null,r.a.createElement(p.a,{to:e},n,r.a.createElement(f.a,{name:t})))},Te=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.initUser)()}},{key:"logInOrLogOut",value:function(){var e=this.props,n=e.credentials,t=e.logOut,a=n.username;return a?r.a.createElement("div",{id:"loggedIn"},r.a.createElement("p",null,"You are logged in as ".concat(a," ")),r.a.createElement(v.a,{id:"logOut",onClick:function(){return t()}},r.a.createElement(f.a,{name:"sign out alternate"}),"Logout")):r.a.createElement("div",null,xe("/signin","Sign in","sign in alternate"))}},{key:"renderUploadLink",value:function(){return this.props.credentials.username?r.a.createElement("div",null,xe("/upload","Create new ranking","plus")):null}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(h.a,null,xe("/","Players","id card"),this.renderUploadLink(),xe("/rankings","Rankings","ordered list"),xe("/about","About","question circle"),this.logInOrLogOut()),r.a.createElement(g.a,{exact:!0,path:"/about",render:function(){return r.a.createElement(Ie,null)}}),r.a.createElement(g.a,{exact:!0,path:"/signin",render:function(){return r.a.createElement(F,null)}}),r.a.createElement(g.a,{exact:!0,path:"/upload",render:function(){return r.a.createElement(Q,null)}}),r.a.createElement(g.a,{exact:!0,path:"/rankings",render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(g.a,{exact:!0,path:"/rankings/:rankingId",render:function(e){return r.a.createElement(ie,{location:e})}}),r.a.createElement(g.a,{exact:!0,path:"/",render:function(){return r.a.createElement(Ee,null)}}),r.a.createElement(g.a,{exact:!0,path:"/players/:playerId",render:function(e){return r.a.createElement(Re,{location:e})}}))),r.a.createElement(_,null))}}]),t}(r.a.Component),Ae={logOut:function(){return function(){var e=Object(N.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"LOGOUT"}),"Logout successfully!","Thank you, come again!","sign out alternate",I(n,{header:"Logout successfully!",content:"Thank you, come again!",icon:"sign out alternate"});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},initUser:function(){return function(){var e=Object(N.a)(w.a.mark((function e(n){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=window.localStorage.getItem("loggedUser"))&&(a=JSON.parse(t),n({type:"LOGIN",username:a.username,admin:a.admin,token:a.token}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}},Ge=Object(c.b)((function(e){return{credentials:e.login}}),Ae)(Te),Se=t(53),Fe=t(173),Le=Object(Se.c)({notification:x,login:A,ranking:z,player:se}),_e=Object(Se.d)(Le,Object(Se.a)(Fe.a,(function(e){return function(n){return function(t){n(t);var a=e.getState().login.token;U="bearer ".concat(a)}}})));l.a.render(r.a.createElement(c.a,{store:_e},r.a.createElement(Ge,null)),document.getElementById("root"))}},[[186,1,2]]]);
//# sourceMappingURL=main.d4581cba.chunk.js.map