(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-538a1c6a"],{"11e9":function(t,e,a){var l=a("52a7"),o=a("4630"),i=a("6821"),n=a("6a99"),r=a("69a8"),s=a("c69a"),c=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?c:function(t,e){if(t=i(t),e=n(e,!0),s)try{return c(t,e)}catch(a){}if(r(t,e))return o(!l.f.call(t,e),t[e])}},"216e":function(t,e,a){},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,a){var l=a("d3f4"),o=a("8b97").set;t.exports=function(t,e,a){var i,n=e.constructor;return n!==a&&"function"==typeof n&&(i=n.prototype)!==a.prototype&&l(i)&&o&&o(t,i),t}},"6d58":function(t,e,a){"use strict";var l=a("216e"),o=a.n(l);o.a},"7f7f":function(t,e,a){var l=a("86cc").f,o=Function.prototype,i=/^\s*function ([^ (]*)/,n="name";n in o||a("9e1e")&&l(o,n,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},"8b97":function(t,e,a){var l=a("d3f4"),o=a("cb7c"),i=function(t,e){if(o(t),!l(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,l){try{l=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),l(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,a){return i(t,a),e?t.__proto__=a:l(t,a),t}}({},!1):void 0),check:i}},9093:function(t,e,a){var l=a("ce10"),o=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return l(t,o)}},a21f:function(t,e,a){var l=a("584a"),o=l.JSON||(l.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},aa77:function(t,e,a){var l=a("5ca1"),o=a("be13"),i=a("79e5"),n=a("fdef"),r="["+n+"]",s="​",c=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),d=function(t,e,a){var o={},r=i(function(){return!!n[t]()||s[t]()!=s}),c=o[t]=r?e(f):n[t];a&&(o[a]=c),l(l.P+l.F*r,"String",o)},f=d.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},ac6a:function(t,e,a){for(var l=a("cadf"),o=a("0d58"),i=a("2aba"),n=a("7726"),r=a("32e9"),s=a("84f2"),c=a("2b4c"),u=c("iterator"),d=c("toStringTag"),f=s.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},b=o(p),h=0;h<b.length;h++){var m,g=b[h],v=p[g],I=n[g],_=I&&I.prototype;if(_&&(_[u]||r(_,u,f),_[d]||r(_,d,g),s[g]=f,v))for(m in l)_[m]||i(_,m,l[m],!0)}},c5f6:function(t,e,a){"use strict";var l=a("7726"),o=a("69a8"),i=a("2d95"),n=a("5dbc"),r=a("6a99"),s=a("79e5"),c=a("9093").f,u=a("11e9").f,d=a("86cc").f,f=a("aa77").trim,p="Number",b=l[p],h=b,m=b.prototype,g=i(a("2aeb")(m))==p,v="trim"in String.prototype,I=function(t){var e=r(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():f(e,3);var a,l,o,i=e.charCodeAt(0);if(43===i||45===i){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:l=2,o=49;break;case 79:case 111:l=8,o=55;break;default:return+e}for(var n,s=e.slice(2),c=0,u=s.length;c<u;c++)if(n=s.charCodeAt(c),n<48||n>o)return NaN;return parseInt(s,l)}}return+e};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof b&&(g?s(function(){m.valueOf.call(a)}):i(a)!=p)?n(new h(I(e)),a,b):I(e)};for(var _,w=a("9e1e")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;w.length>y;y++)o(h,_=w[y])&&!o(b,_)&&d(b,_,u(h,_));b.prototype=m,m.constructor=b,a("2aba")(l,p,b)}},e9d0:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-cascades"}),t._v(" 基础表格")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"delete"},on:{click:t.handleDelAll}},[t._v("批量删除")]),a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"订单状态"},model:{value:t.select_cate,callback:function(e){t.select_cate=e},expression:"select_cate"}},[a("el-option",{key:"2",attrs:{label:"待支付",value:"1"}}),a("el-option",{key:"3",attrs:{label:"已支付",value:"2"}})],1),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词(订单号、酒店信息、房屋信息)"},model:{value:t.PageResult.search,callback:function(e){t.$set(t.PageResult,"search",e)},expression:"PageResult.search"}}),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:t.getData}},[t._v("搜索")])],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"OrderNumber",label:"订单号",sortable:"",width:"150"}}),a("el-table-column",{attrs:{prop:"CreatedAt",label:"创建时间",sortable:"",width:"170",formatter:t.formatCreatedAt}}),a("el-table-column",{attrs:{prop:"HotelItem.chineseName",label:"酒店名称",width:"170"}}),a("el-table-column",{attrs:{prop:"RoomInfo.roomNameCn",label:"房间信息",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{cursor:"pointer"},on:{click:function(a){t.roomShow(e.$index,e.row)}}},[t._v(t._s(e.row.RoomInfo.roomNameCn))])]}}])}),a("el-table-column",{attrs:{prop:"Status",label:"订单状态",width:"120",formatter:t.formatStatus}}),a("el-table-column",{attrs:{prop:"RealInfo.averagePrice",label:"应付金额",width:"120"}}),a("el-table-column",{attrs:{prop:"User.NickName",label:"用户信息",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{cursor:"pointer"},on:{click:function(a){t.userShow(e.$index,e.row)}}},[t._v(t._s(e.row.User.NickName))])]}}])}),a("el-table-column",{attrs:{prop:"InDate",label:"入住日期",width:"120"}}),a("el-table-column",{attrs:{prop:"OutDate",label:"离开日期",width:"120"}}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("修改订单\n                    ")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除\n                    ")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.PageResult.total},on:{"current-change":t.handleCurrentChange}})],1)],1),a("el-dialog",{attrs:{title:"房间详细信息",visible:t.roomVisible,width:"50%"},on:{"update:visible":function(e){t.roomVisible=e}}},[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:this.roomInfo,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"roomNameCn",label:"房间名称",width:"100"}}),a("el-table-column",{attrs:{prop:"area",label:"房间大小",width:"100"}}),a("el-table-column",{attrs:{prop:"bedDescription",label:"床位类型",width:"100"}}),a("el-table-column",{attrs:{prop:"isExtraBed",label:"是否可加床",width:"100"}}),a("el-table-column",{attrs:{prop:"averagePrice",label:"均价",width:"75"}}),a("el-table-column",{attrs:{prop:"ratePrice",label:"优惠价",width:"75"}}),a("el-table-column",{attrs:{label:"早餐信息",width:"140"}},[t._v("\n                "+t._s(this.realInfo.mealInfo)+"\n            ")]),a("el-table-column",{attrs:{label:"网络信息",width:"140"}},[t._v("\n                "+t._s(this.realInfo.networkInfo)+"\n            ")]),a("el-table-column",{attrs:{label:"wifi",width:"75"}},[t._v("\n                "+t._s(this.realInfo.wifi)+"\n            ")])],1)],1),a("el-dialog",{attrs:{title:"用户详细信息",visible:t.userVisible,width:"35%"},on:{"update:visible":function(e){t.userVisible=e}}},[a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:this.userInfo,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"Avatar",label:"头像",width:"75"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticClass:"image",staticStyle:{width:"40px",height:"40px"},attrs:{src:t.row.Avatar}})]}}])}),a("el-table-column",{attrs:{prop:"Gender",label:"性别",width:"60",formatter:t.formatGender}}),a("el-table-column",{attrs:{prop:"Mobile",label:"手机号码",width:"120"}}),a("el-table-column",{attrs:{prop:"NickName",label:"昵称",width:"75"}}),a("el-table-column",{attrs:{prop:"Username",label:"真实姓名",width:"75"}}),a("el-table-column",{attrs:{prop:"CardNumber",label:"身份证号码",width:"180"}})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:t.editVisible,width:"30%"},on:{"update:visible":function(e){t.editVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"入住日期"}},[a("el-date-picker",{staticStyle:{width:"60%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.form.Indate,callback:function(e){t.$set(t.form,"Indate",e)},expression:"form.Indate"}})],1),a("el-form-item",{attrs:{label:"离开日期"}},[a("el-date-picker",{staticStyle:{width:"60%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.form.Outdate,callback:function(e){t.$set(t.form,"Outdate",e)},expression:"form.Outdate"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("我要修改")])],1)],1),a("el-dialog",{attrs:{title:"提示",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[a("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)]),a("el-dialog",{attrs:{title:"提示",visible:t.delAllVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delAllVisible=e}}},[a("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.delAllVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.delAll}},[t._v("确 定")])],1)])],1)},o=[],i=a("f499"),n=a.n(i),r=(a("ac6a"),a("c5f6"),a("7f7f"),a("4020")),s={name:"basetable",data:function(){return{tableData:[],cur_page:1,multipleSelection:[],select_cate:"",del_list:[],is_search:!1,editVisible:!1,delVisible:!1,delAllVisible:!1,roomVisible:!1,userVisible:!1,form:{ID:0,Indate:"",Outdate:""},roomInfo:[],userInfo:[],realInfo:{},PageResult:{code:null,page:0,message:"",status:0,per:10,order_number:"",total:0,user_id:0,data:null,search:""},idx:-1}},created:function(){this.getData()},computed:{data:function(){var t=this;return this.tableData.filter(function(e){for(var a=!1,l=0;l<t.del_list.length;l++)if(e.name===t.del_list[l].name){a=!0;break}if(!a&&e.address.indexOf(t.select_cate)>-1&&(e.name.indexOf(t.select_word)>-1||e.address.indexOf(t.select_word)>-1))return e})}},methods:{userShow:function(t,e){this.userInfo[0]=e.User,console.log(this.userInfo),this.userVisible=!0},roomShow:function(t,e){this.roomInfo[0]=e.RoomInfo,this.realInfo=e.RealInfo,console.log(this.roomInfo),this.roomVisible=!0},formatBind:function(t,e,a){return 1===a?"已绑定":2===a?"未绑定":void 0},formatGender:function(t,e,a){return 1===a?"男":2===a?"女":"未知"},formatStatus:function(t,e,a){switch(a){case 2:return"待支付";case 3:return"已支付";case 4:return"已取消"}},formatCreatedAt:function(t,e,a){var l=new Date(Date.parse(a)),o=l.getFullYear()+"-",i=(l.getMonth()+1<10?"0"+(l.getMonth()+1):l.getMonth()+1)+"-",n=l.getDate()+" ",r=l.getHours()+":",s=l.getMinutes()+":",c=l.getSeconds();return l.getHours()<10&&(r="0"+r),l.getMinutes()<10&&(s="0"+s),l.getSeconds()<10&&(c="0"+c),o+i+n+r+s+c},handleCurrentChange:function(t){this.PageResult.page=t,this.getData()},getData:function(){var t=this;this.PageResult.status=Number(this.select_cate),r["a"].post("/api/admin/order/list",this.PageResult).then(function(e){1e4===e.code&&(t.PageResult=e,t.tableData=e.data,t.parseData())})},parseData:function(){var t=this;this.tableData.forEach(function(e,a){""!==e.RoomInfo&&(t.tableData[a].RoomInfo=JSON.parse(e.RoomInfo)),""!==e.HotelItem&&(t.tableData[a].HotelItem=JSON.parse(e.HotelItem)),""!==e.RealInfo&&(t.tableData[a].RealInfo=JSON.parse(e.RealInfo))})},encodeData:function(){var t=this;this.tableData.forEach(function(e,a){""!==e.RoomInfo&&(t.tableData[a].RoomInfo=n()(e.RoomInfo)),""!==e.HotelItem&&(t.tableData[a].HotelItem=n()(e.HotelItem)),""!==e.RealInfo&&(t.tableData[a].RealInfo=n()(e.RealInfo))})},search:function(){this.is_search=!0},formatter:function(t,e){return t.address},filterTag:function(t,e){return e.tag===t},handleEdit:function(t,e){this.idx=t;var a=this.tableData[t];this.form={Indate:a.InDate,Outdate:a.OutDate},this.editVisible=!0},handleDelete:function(t,e){this.idx=t,this.delVisible=!0},handleDelAll:function(){this.delAllVisible=!0},delAll:function(){var t=this,e=this.multipleSelection.length,a=new Array,l="";this.del_list=this.del_list.concat(this.multipleSelection),console.log(this.del_list[0]);for(var o=0;o<e;o++)a.push(this.multipleSelection[o].ID);r["a"].post("/api/admin/order/delete",{ids:a}).then(function(e){1e4===e.code&&(t.delAllVisible=!1,t.$message.error("删除了"+l),t.multipleSelection=[])})},handleSelectionChange:function(t){this.multipleSelection=t},saveEdit:function(){var t=this;Date.parse(this.form.Indate)>Date.parse(this.form.Outdate)||(this.form.ID=this.tableData[this.idx].ID,this.editVisible=!1,r["a"].post("/api/admin/order/update",this.form).then(function(e){1e4===e.code?(t.tableData[t.idx].InDate=t.form.Indate,t.tableData[t.idx].OutDate=t.form.Outdate,console.log(e),t.$message.success("修改第 ".concat(t.idx+1," 行成功"))):10014===e.code&&t.$router.push("/login")}))},deleteRow:function(){var t=this,e=new Array;e.push(this.tableData[this.idx].ID),r["a"].post("/api/admin/order/delete",{ids:e}).then(function(e){1e4===e.code?(t.$message.success("删除成功"),t.tableData.splice(t.idx,1),t.delVisible=!1):10014===e.code&&t.$router.push("/login")})}}},c=s,u=(a("6d58"),a("2877")),d=Object(u["a"])(c,l,o,!1,null,"202edcc6",null);d.options.__file="Order.vue";e["default"]=d.exports},f499:function(t,e,a){t.exports=a("a21f")},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-538a1c6a.c4a7e00f.js.map