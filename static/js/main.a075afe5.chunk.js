(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{183:function(e,t,a){e.exports=a(374)},372:function(e,t,a){},374:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),c=a.n(o),s=a(28),i=a(29),u=a(34),l=a(30),h=a(35),m=a(14),d=a.n(m),f=a(85),p=a(142),y=a.n(p),g=a(38),v=a.n(g),w=function(e){var t=null,a=e.currentWeather;return t=!0===e.isLoaded&&!0===e.searchStatus?r.a.createElement("div",{className:"weather-info"},r.a.createElement("p",{className:"weather-title"},e.currentLocation),r.a.createElement("p",null,e.getDate(new Date)),r.a.createElement("div",{className:"weather-info-left"},r.a.createElement("p",{className:"weather-description"},a.summary),r.a.createElement("p",{className:"weather-image"},r.a.createElement("img",{src:"/weather"+"/images/icons/".concat(a.icon,".svg"),alt:a.summary}),r.a.createElement("span",{className:"degF"},Math.round(a.temperature,0)," \xb0F"),r.a.createElement("span",{className:"degC"},Math.round(e.FtoC(a.temperature),2),"\xb0C")))):r.a.createElement("p",{className:"not-found"},e.searchStatus),r.a.createElement("div",null,t)},E=a(19),b=function(e){var t,a=[];if(!0===e.isLoaded&&!0===e.searchStatus)for(var n=e.hourlyWeather,o=0;o<n.data.length&&(a.push({name:e.updateTime(n.data[o].time),temp:e.FtoC(n.data[o].temperature)}),!(o>7));o++);return t=r.a.createElement("div",null,r.a.createElement("h2",{className:"small-title"},"Weather forecast hourly"),r.a.createElement(E.d,{width:"100%",height:400},r.a.createElement(E.c,{data:a,fontSize:"12"},r.a.createElement(E.b,{type:"monotone",dataKey:"temp",stroke:"#8884d8"}),r.a.createElement(E.a,{stroke:"#ccc",strokeDasharray:"3 3"}),r.a.createElement(E.f,{dataKey:"name",label:{value:"Hour",position:"bottom",offset:-5,fontSize:12,color:"#333"},interval:0}),r.a.createElement(E.g,{allowDecimals:!1,label:{value:"Temperature",angle:-90,fontSize:12,color:"#333"}}),r.a.createElement(E.e,null)))),r.a.createElement("div",null,t)},C="e985b57d27d16a6af5f72b816e5afe31",S="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast",k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={isLoaded:!1,currentCoordinates:{},currentLocation:"",currentTime:null,currentWeather:{},searchStatus:!1,newCoordinates:{},hourlyWeather:{}},a.getDate=function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(r)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"fetchLocation",value:function(e,t){var a=this;fetch("".concat(S,"/").concat(C,"/").concat(e,",").concat(t)).then((function(e){return e.json()})).then((function(e){a.setState({isLoaded:!0,currentWeather:e.currently,hourlyWeather:e.hourly,searchStatus:!0})}),(function(e){a.setState({isLoaded:!0,searchStatus:"Searching...",error:e})})).then(this.getLocationName(e,t))}},{key:"getLocationName",value:function(e,t){var a=this;v.a.setApiKey("AIzaSyCO9x6JVamwo9b09PmJkpkUrYR3FI9mK6A"),v.a.setLanguage("en"),v.a.fromLatLng(e,t).then((function(e){var t=e.results[0],n=t.address_components.length;a.setState({currentLocation:"".concat(t.address_components[n-3].long_name," ").concat(t.address_components[n-1].long_name," ").concat(t.address_components[n-2].short_name)})}),(function(e){a.setState({currentLocation:"Location not found"})}))}},{key:"getLocationCoordinates",value:function(e){var t=this;v.a.fromAddress(e).then((function(e){var a=e.results[0].geometry.location;t.setState({newCoordinates:a})}),(function(e){t.setState({newCoordinates:"City not found"})}))}},{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,a){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(a){t.setState({currentCoordinates:{lat:a.coords.latitude,lon:a.coords.longitude}}),e()}))}));case 2:this.fetchLocation(this.state.currentCoordinates.lat,this.state.currentCoordinates.lon);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateTime",value:function(e){var t=new Date(1e3*e);return t.getHours()+":"+("0"+t.getMinutes()).substr(-2)}},{key:"getHourOnly",value:function(e){return new Date(1e3*e).getHours()}},{key:"fetchWithName",value:function(){var e=Object(f.a)(d.a.mark((function e(t){var a=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,n){v.a.fromAddress(t).then((function(t){var n=t.results[0].geometry.location;a.setState({newCoordinates:n}),e()}),(function(e){a.setState({searchStatus:"City not found"})}))}));case 2:this.fetchLocation(this.state.newCoordinates.lat,this.state.newCoordinates.lng);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchWithCoordinates",value:function(e,t){this.fetchLocation(e,t)}},{key:"FtoC",value:function(e){return(5*(e-32)/9).toFixed(3)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"weather-search"},r.a.createElement(y.a,{placeholder:"Search by city",onPlaceSelected:function(t){void 0===t.name?e.fetchWithCoordinates(t.geometry.location.lat(),t.geometry.location.lng()):e.fetchWithName(t.name)},types:["(regions)"]}),r.a.createElement("a",{className:"current-location",href:"#",onClick:function(){return e.fetchLocation(e.state.currentCoordinates.lat,e.state.currentCoordinates.lon)}},"Use your current location")),r.a.createElement(w,{isLoaded:this.state.isLoaded,searchStatus:this.state.searchStatus,getDate:this.getDate,currentLocation:this.state.currentLocation,FtoC:this.FtoC,currentWeather:this.state.currentWeather}),r.a.createElement(b,{isLoaded:this.state.isLoaded,searchStatus:this.state.searchStatus,FtoC:this.FtoC,hourlyWeather:this.state.hourlyWeather,updateTime:this.updateTime,getHourOnly:this.getHourOnly}))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).getTime=function(e){return e.getHours()<6||e.getHours()>18?"night":"day"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"".concat(this.getTime(new Date)," wrapper")},r.a.createElement("div",{className:"weather"},r.a.createElement(k,null)))}}]),t}(n.Component),O=(a(372),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(373),c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[183,1,2]]]);
//# sourceMappingURL=main.a075afe5.chunk.js.map