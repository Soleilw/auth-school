webpackJsonp([9],{"0OPg":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("mvHQ"),a=s.n(i),n=s("n5Qe"),r=s("YpoW"),o=s.n(r),l={data:function(){return{userInfor:{user_sex:1,user_image:""},showPicker4:!1,fileList:[],sexList:["男","女"],disabled:!1,files:{name:"",type:""},headerImage:null}},created:function(){$("title").text("用户注册"),this.userInfor.user_openid=sessionStorage.getItem("openId"),console.log(this.userInfor.user_openid)},methods:{onClickLeft:function(){this.$router.go(-1)},sexOnChange:function(e,t,s){console.log(t),this.userInfor.user_sex=t+1,this.showPicker4=!1},deleteFile:function(e,t){this.userInfor.user_image="",this.fileList=[],this.$set(this.userInfor,this.fileList)},afterRead:function(e){e.status="uploading",e.message="上传中...",e.content="",this.files.name=e.file.name,this.files.type=e.file.type,this.imgPreview(e.file)},onSubmit:function(){var e=this;e.userInfor.user_name&&e.userInfor.user_sex&&e.userInfor.user_card&&e.userInfor.user_iphone?n.q(a()(e.userInfor),function(t){t.sucesss?(console.log("修改用户信息成功"),n.o({user_openid:sessionStorage.getItem("openId")},function(t){console.log("用户信息"),console.log(t.result),t.result&&(sessionStorage.setItem("userInfo",a()(t.result)),n.d.userInfo=t.result,e.$toast.success("注册成功"),setTimeout(function(){e.$router.push("/personal")},1500))})):e.$toast.fail(t.error)}):e.$toast.fail("请补充完整信息")},dateFormat:function(e){var t=new Date(e),s=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();t.getHours(),t.getMinutes(),t.getSeconds();return s+"-"+(i<10?"0"+i:i)+"-"+(a<10?"0"+a:a)},postImg:function(){var e=this,t=new FormData,s=this.dataURLtoFile(this.headerImage);t.append("file",s),t.append("name",s.name),console.log(t),n.s(t,function(t){console.log(t),200==t.code?(e.fileList[0].status="",e.fileList[0].message="",e.fileList[0].url=t.data,e.fileList[0].content=t.data,e.$set(e.fileList),e.userInfor.user_image=t.data):(e.fileList[0].status="failed",e.fileList[0].message="上传失败",e.$set(e.fileList),e.$toast.fail(t.msg))})},imgPreview:function(e){var t=this,s=void 0;if(console.log(a()(o.a)),o.a.getData(e,function(){s=o.a.getTag(this,"Orientation")}),e&&window.FileReader&&/^image/.test(e.type)){var i=new FileReader;i.readAsDataURL(e),i.onloadend=function(){var e=this.result,i=new Image;i.src=e,this.result.length<=102400?(t.headerImage=this.result,t.postImg()):i.onload=function(){var e=t.compress(i,s);t.headerImage=e,t.postImg()}}}},dataURLtoFile:function(e){for(var t=e.split(","),s=atob(t[1]),i=s.length,a=new Uint8Array(i);i--;)a[i]=s.charCodeAt(i);return new File([a],this.files.name,{type:this.files.type})},rotateImg:function(e,t,s){if(null!=e){var i=e.height,a=e.width,n=2;null==n&&(n=0),"right"==t?++n>3&&(n=0):--n<0&&(n=3);var r=90*n*Math.PI/180,o=s.getContext("2d");switch(n){case 0:s.width=a,s.height=i,o.drawImage(e,0,0);break;case 1:s.width=i,s.height=a,o.rotate(r),o.drawImage(e,0,-i);break;case 2:s.width=a,s.height=i,o.rotate(r),o.drawImage(e,-a,-i);break;case 3:s.width=i,s.height=a,o.rotate(r),o.drawImage(e,-a,0)}}},compress:function(e,t){var s=document.createElement("canvas"),i=s.getContext("2d"),a=document.createElement("canvas"),n=a.getContext("2d"),r=e.src.length,o=e.width,l=e.height,u=void 0;(u=o*l/4e6)>1?(console.log("大于400万像素"),o/=u=Math.sqrt(u),l/=u):u=1,s.width=o,s.height=l,i.fillStyle="#fff",i.fillRect(0,0,s.width,s.height);var c=void 0;if((c=o*l/1e6)>1){console.log("超过100W像素");var d=~~(o/(c=~~(Math.sqrt(c)+1))),f=~~(l/c);a.width=d,a.height=f;for(var h=0;h<c;h++)for(var g=0;g<c;g++)n.drawImage(e,h*d*u,g*f*u,d*u,f*u,0,0,d,f),i.drawImage(a,h*d,g*f,d,f)}else i.drawImage(e,0,0,o,l);if(""!=t&&1!=t)switch(t){case 6:this.rotateImg(e,"left",s);break;case 8:this.rotateImg(e,"right",s);break;case 3:this.rotateImg(e,"right",s),this.rotateImg(e,"right",s)}var v=s.toDataURL("image/jpeg",.1);return console.log("压缩前："+r),console.log("压缩后："+v.length),console.log("压缩率："+~~(100*(r-v.length)/r)+"%"),a.width=a.height=s.width=s.height=0,v}}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"content"},[s("van-form",{on:{submit:e.onSubmit}},[s("div",{staticClass:"van-cell van-cell--required van-field"},[s("div",{staticClass:"van-cell__title van-field__label"},[s("span",[e._v("头像")])]),e._v(" "),s("div",{staticClass:"van-cell__value van-field__value"},[s("div",{staticClass:"van-field__body"},[s("div",{staticClass:"van-field__control van-field__control--right"},[s("van-uploader",{attrs:{"preview-size":"100px","after-read":e.afterRead,"max-count":1,delete:e.deleteFile,deletable:!e.disabled},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1)])])]),e._v(" "),s("van-field",{attrs:{type:"text",label:"名称",placeholder:"请填写名称","input-align":"right",required:""},model:{value:e.userInfor.user_name,callback:function(t){e.$set(e.userInfor,"user_name",t)},expression:"userInfor.user_name"}}),e._v(" "),s("van-field",{attrs:{readonly:"",clickable:"",value:e.sexList[e.userInfor.user_sex-1],label:"性别",placeholder:"点击选择","input-align":"right",required:""},on:{click:function(t){e.showPicker4=!0}}}),e._v(" "),s("van-field",{attrs:{type:"text",label:"证件号",placeholder:"请填写身份证号/护照号等","input-align":"right",required:""},model:{value:e.userInfor.user_card,callback:function(t){e.$set(e.userInfor,"user_card",t)},expression:"userInfor.user_card"}}),e._v(" "),s("van-field",{attrs:{type:"tel",label:"手机号",placeholder:"请填写手机号","input-align":"right",required:""},model:{value:e.userInfor.user_iphone,callback:function(t){e.$set(e.userInfor,"user_iphone",t)},expression:"userInfor.user_iphone"}}),e._v(" "),s("div",{staticStyle:{width:"70vw",margin:"15vw auto"}},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",size:"small"}},[e._v("\n                    提交\n                ")])],1)],1)],1),e._v(" "),s("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker4,callback:function(t){e.showPicker4=t},expression:"showPicker4"}},[s("van-picker",{attrs:{"show-toolbar":"",columns:e.sexList},on:{confirm:e.sexOnChange,cancel:function(t){e.showPicker4=!1}}})],1)],1)},staticRenderFns:[]};var c=s("VU/8")(l,u,!1,function(e){s("KkKb")},"data-v-633fd0f6",null);t.default=c.exports},KkKb:function(e,t){}});