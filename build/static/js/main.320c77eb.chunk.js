(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(7),o=a.n(l),u=(a(14),a(1)),s=a(2),r=a(4),c=a(3),m=a(5),d=function(e){function t(){return Object(u.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"ColorBlock",value:function(){return{margin:"5px 20px 0px 20px",width:"50%"}}},{key:"createHeaderRow",value:function(){return i.a.createElement("thead",{className:"thead-dark"},i.a.createElement("tr",null,i.a.createElement("th",null," id "),i.a.createElement("th",null," name "),i.a.createElement("th",null," age "),i.a.createElement("th",null,"  ")))}},{key:"tableStyle",value:function(){return"table table-sm table-striped table-hover table-bordered"}},{key:"emptyStyle",value:function(){return{"text-align":"center"}}},{key:"createRow",value:function(){return 0===this.props.data.length?i.a.createElement("tr",{style:this.emptyStyle()},"  ",i.a.createElement("td",{colSpan:3},"No Data Found")):this.props.data.map(function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",null,e.id),i.a.createElement("td",null,e.name),i.a.createElement("td",null,e.age),i.a.createElement("td",null,i.a.createElement("button",{className:"btn btn-sm btn-primary"},"Edit"),i.a.createElement("button",{className:"btn btn-sm btn-danger"},"Delete"))))})}},{key:"render",value:function(){return i.a.createElement("div",{className:"table-responsive-sm"},i.a.createElement("table",{style:this.ColorBlock(),className:this.tableStyle()},this.createHeaderRow(),i.a.createElement("tbody",null,this.createRow())))}}]),t}(n.Component),p=window.ReactModalBootstrap.Modal,b=window.ReactModalBootstrap.ModalHeader,h=window.ReactModalBootstrap.ModalTitle,E=window.ReactModalBootstrap.ModalClose,f=window.ReactModalBootstrap.ModalBody,q=window.ReactModalBootstrap.ModalFooter,y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={isOpen:!1,isSubOpen:!1},a.openModal=function(){a.setState({isOpen:!0})},a.hideModal=function(){a.setState({isOpen:!1})},a.openSubModal=function(){a.setState({isSubOpen:!0})},a.hideSubModal=function(){a.setState({isSubOpen:!1})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"layout-page"},i.a.createElement("main",{className:"layout-main"},i.a.createElement("div",{className:"container"},i.a.createElement("button",{className:"btn btn-primary",onClick:this.openModal},"Open Modal"),i.a.createElement(p,{isOpen:this.state.isOpen,size:"modal-lg",onRequestHide:this.hideModal},i.a.createElement(b,null,i.a.createElement(E,{onClick:this.hideModal}),i.a.createElement(h,null,"Modal title")),i.a.createElement(f,null,i.a.createElement("button",{className:"btn btn-primary",onClick:this.openSubModal},"Open Sub Modal"),i.a.createElement("hr",null),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda ex iure, necessitatibus odit optio quas recusandae repellat totam. Alias dignissimos ea obcaecati quae qui recusandae rem repellendus, vel veniam!"),i.a.createElement("p",null,"Consequatur delectus doloremque in quam qui reiciendis rem ut. Culpa cupiditate doloribus eos est ex illum magni nesciunt obcaecati odit ratione, saepe vitae? Accusantium aliquid assumenda fugiat perferendis ratione suscipit!"),i.a.createElement("p",null,"Accusantium ad alias aliquid architecto, aspernatur autem commodi distinctio dolor ducimus excepturi fugit hic laborum maxime, mollitia necessitatibus neque nihil odio, officiis quae quaerat quam quasi quia sed tempore ut!"),i.a.createElement("p",null,"Accusamus asperiores aspernatur atque commodi consectetur cumque cupiditate distinctio dolor dolorum eum excepturi expedita explicabo fugiat iusto, labore magnam, natus nesciunt nobis odio officiis provident quam, quasi quo saepe suscipit!"),i.a.createElement("p",null,"Accusantium at commodi corporis cum cumque delectus deleniti dicta dolor dolore dolorem ducimus esse fugiat fugit maiores neque nulla perspiciatis placeat, possimus quisquam repellendus saepe suscipit tempore totam, vel voluptatem!"),i.a.createElement("p",null,"Consequatur delectus doloremque in quam qui reiciendis rem ut. Culpa cupiditate doloribus eos est ex illum magni nesciunt obcaecati odit ratione, saepe vitae? Accusantium aliquid assumenda fugiat perferendis ratione suscipit!"),i.a.createElement("p",null,"Accusantium ad alias aliquid architecto, aspernatur autem commodi distinctio dolor ducimus excepturi fugit hic laborum maxime, mollitia necessitatibus neque nihil odio, officiis quae quaerat quam quasi quia sed tempore ut!"),i.a.createElement("p",null,"Accusamus asperiores aspernatur atque commodi consectetur cumque cupiditate distinctio dolor dolorum eum excepturi expedita explicabo fugiat iusto, labore magnam, natus nesciunt nobis odio officiis provident quam, quasi quo saepe suscipit!"),i.a.createElement("p",null,"Accusantium at commodi corporis cum cumque delectus deleniti dicta dolor dolore dolorem ducimus esse fugiat fugit maiores neque nulla perspiciatis placeat, possimus quisquam repellendus saepe suscipit tempore totam, vel voluptatem!"),i.a.createElement(p,{isOpen:this.state.isSubOpen,onRequestHide:this.hideSubModal,dialogStyles:{base:{bottom:-600,transition:"bottom 0.4s"},open:{bottom:0}}},i.a.createElement(b,null,i.a.createElement(E,{onClick:this.hideSubModal}),i.a.createElement(h,null,"Sub Modal title")),i.a.createElement(f,null,i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto laborum nemo porro quaerat qui quisquam sequi, tenetur. Alias nostrum qui ratione repellat rerum tenetur voluptas. Commodi dolore eligendi facilis nihil."),i.a.createElement("p",null,"Autem distinctio fugit laboriosam molestias nulla, qui repudiandae ullam vero voluptas? Aperiam corporis dolore laboriosam molestiae saepe veritatis voluptate, voluptatem. Assumenda ducimus error fugit iusto quos ratione! Doloribus, iste saepe?"),i.a.createElement("p",null,"Ab ea ipsam iure perferendis! Ad debitis dolore excepturi explicabo hic incidunt placeat quasi repellendus soluta, vero. Autem delectus est laborum minus modi molestias natus provident, quidem rerum sint, voluptas!")))),i.a.createElement(q,null,i.a.createElement("button",{className:"btn btn-default",onClick:this.hideModal},"Close"),i.a.createElement("button",{className:"btn btn-primary"},"Save changes"))))))}}]),t}(i.a.Component),g=function(e){switch(e.currentModal){case"ADD_EMPLOYEE":return console.log("dadsadsa"),i.a.createElement(y,e);default:return null}},v=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={type:"",data:[{name:"oday",id:1,age:28},{name:"oday",id:2,age:22},{name:"ofay",id:3,age:23},{name:"oday",id:4,age:24}]},a.handleEmployeeOperation=function(e){console.log(e),a.setState({type:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,this.handleOpenModal(),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return e.handleEmployeeOperation("ADD_EMPLOYEE")},style:this.btnStyle(),className:"btn btn-primary btn-sm"},"add"),i.a.createElement(d,{data:this.state.data})))}},{key:"btnStyle",value:function(){return{margin:"20px 20px 0px 20px"}}},{key:"handleOpenModal",value:function(){if(console.log("handleOpenModal ()"),""!==this.state.type)return console.log("handleOpenModal ()11"),i.a.createElement(g,{data:this.state.data,currentModal:this.state.type})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.320c77eb.chunk.js.map