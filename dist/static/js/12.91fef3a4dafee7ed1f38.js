webpackJsonp([12],{bivf:function(e,t){},drFB:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("mvHQ"),a=s.n(i),n=s("n5Qe"),l=s("YpoW"),o=s.n(l),r={data:function(){return{studentInfor:{stu_sex:"男",user_openid:sessionStorage.getItem("openId"),stu_image:"",stu_head:""},sexList:["男","女"],showPicker4:!1,disabled:!1,stu_number:"",fileList1:[],files1:{name:"",type:""},fileList2:[],files2:{name:"",type:""},deletable:!0,headerImage:null}},created:function(){$("title").text("我的孩子"),this.stu_number=n.o("stu_number"),this.$set(this.fileList1),this.$set(this.fileList2)},mounted:function(){this.GetUserInfo()},methods:{onClickLeft:function(){this.$router.go(-1)},sexOnChange:function(e,t,s){console.log(t),this.studentInfor.stu_sex=t+1,this.showPicker4=!1},onSubmit:function(){var e=this;if(console.log(e.studentInfor.stu_head),e.studentInfor.stu_head){var t={user_openid:sessionStorage.getItem("openId"),stu_number:e.studentInfor.stu_number,stu_image:e.studentInfor.stu_image,stu_head:e.studentInfor.stu_head,relation:e.studentInfor.relation};n.s(a()(t),function(t){"ok"==t.msg?(console.log("修改用户信息成功"),e.$toast.success("修改成功"),e.GetUserInfo(),e.disabled=!1,setTimeout(function(){e.$router.push("/childrenList")},2e3)):(console.log(66666),e.$toast.fail(t.msg))})}else e.$toast.fail("请补充完整信息")},GetUserInfo:function(){var e=this;n.l({stu_number:e.stu_number},function(t){console.log("用户信息"),console.log(t.data),t.data&&(e.studentInfor=t.data,e.fileList1[0]={url:e.studentInfor.stu_head},e.fileList2[0]={url:e.studentInfor.stu_image})})},dateFormat:function(e){var t=new Date(e),s=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();t.getHours(),t.getMinutes(),t.getSeconds();return s+"-"+(i<10?"0"+i:i)+"-"+(a<10?"0"+a:a)},deleteFile1:function(e,t){this.studentInfor.stu_image="",this.fileList1=[],this.$set(this.studentInfor,this.fileList1)},deleteFile2:function(e,t){this.studentInfor.stu_head="",this.fileList2=[],this.$set(this.studentInfor,this.fileList2)},afterRead1:function(e){e.status="uploading",e.message="上传中...",e.content="",this.files1.name=e.file.name,this.files1.type=e.file.type,this.imgPreview1(e.file)},afterRead2:function(e){e.status="uploading",e.message="上传中...",e.content="",this.files2.name=e.file.name,this.files2.type=e.file.type,this.imgPreview2(e.file)},postImg1:function(){var e=this,t=new FormData,s=e.dataURLtoFile1(e.headerImage);t.append("file",s),t.append("name",s.name),console.log(t),n.e(t,function(t){console.log(t),t.sucesss?(e.fileList1[0].status="",e.fileList1[0].message="",e.fileList1[0].url=t.sucesss,e.fileList1[0].content=t.sucesss,e.$set(e.fileList1),console.log(e.fileList1),e.studentInfor.stu_head=t.sucesss):(e.fileList1[0].status="failed",e.fileList1[0].message="上传失败",e.$set(e.fileList1),e.$toast.fail(t.error))})},postImg2:function(){var e=this,t=new FormData,s=e.dataURLtoFile2(e.headerImage);t.append("file",s),t.append("name",s.name),console.log(t),n.e(t,function(t){console.log(t),t.sucesss?(e.fileList2[0].status="",e.fileList2[0].message="",e.fileList2[0].url=t.sucesss,e.fileList2[0].content=t.sucesss,e.$set(e.fileList2),console.log(e.fileList2),e.studentInfor.stu_image=t.sucesss):(e.fileList2[0].status="failed",e.fileList2[0].message="上传失败",e.$set(e.fileList2),e.$toast.fail(t.error))})},imgPreview1:function(e){var t,s=this;if(console.log(a()(o.a)),o.a.getData(e,function(){t=o.a.getTag(this,"Orientation")}),e&&window.FileReader&&/^image/.test(e.type)){var i=new FileReader;i.readAsDataURL(e),i.onloadend=function(){var e=this.result,i=new Image;i.src=e,this.result.length<=102400?(s.headerImage=this.result,s.postImg1()):i.onload=function(){var e=s.compress1(i,t);s.headerImage=e,s.postImg1()}}}},imgPreview2:function(e){var t,s=this;if(console.log(a()(o.a)),o.a.getData(e,function(){t=o.a.getTag(this,"Orientation")}),e&&window.FileReader&&/^image/.test(e.type)){var i=new FileReader;i.readAsDataURL(e),i.onloadend=function(){var e=this.result,i=new Image;i.src=e,this.result.length<=102400?(s.headerImage=this.result,s.postImg2()):i.onload=function(){var e=s.compress2(i,t);s.headerImage=e,s.postImg2()}}}},dataURLtoFile1:function(e){for(var t=e.split(","),s=atob(t[1]),i=s.length,a=new Uint8Array(i);i--;)a[i]=s.charCodeAt(i);return new File([a],this.files1.name,{type:this.files1.type})},dataURLtoFile2:function(e){for(var t=e.split(","),s=atob(t[1]),i=s.length,a=new Uint8Array(i);i--;)a[i]=s.charCodeAt(i);return new File([a],this.files2.name,{type:this.files2.type})},rotateImg1:function(e,t,s){if(null!=e){var i=e.height,a=e.width,n=2;null==n&&(n=0),"right"==t?++n>3&&(n=0):--n<0&&(n=3);var l=90*n*Math.PI/180,o=s.getContext("2d");switch(n){case 0:s.width=a,s.height=i,o.drawImage(e,0,0);break;case 1:s.width=i,s.height=a,o.rotate(l),o.drawImage(e,0,-i);break;case 2:s.width=a,s.height=i,o.rotate(l),o.drawImage(e,-a,-i);break;case 3:s.width=i,s.height=a,o.rotate(l),o.drawImage(e,-a,0)}}},compress1:function(e,t){var s,i,a=document.createElement("canvas"),n=a.getContext("2d"),l=document.createElement("canvas"),o=l.getContext("2d"),r=e.src.length,d=e.width,u=e.height;if((s=d*u/4e6)>1?(console.log("大于400万像素"),d/=s=Math.sqrt(s),u/=s):s=1,a.width=d,a.height=u,n.fillStyle="#fff",n.fillRect(0,0,a.width,a.height),(i=d*u/1e6)>1){console.log("超过100W像素");var c=~~(d/(i=~~(Math.sqrt(i)+1))),f=~~(u/i);l.width=c,l.height=f;for(var h=0;h<i;h++)for(var g=0;g<i;g++)o.drawImage(e,h*c*s,g*f*s,c*s,f*s,0,0,c,f),n.drawImage(l,h*c,g*f,c,f)}else n.drawImage(e,0,0,d,u);if(""!=t&&1!=t)switch(t){case 6:this.rotateImg1(e,"left",a);break;case 8:this.rotateImg1(e,"right",a);break;case 3:this.rotateImg1(e,"right",a),this.rotateImg1(e,"right",a)}var m=a.toDataURL("image/jpeg",.1);return console.log("压缩前："+r),console.log("压缩后："+m.length),console.log("压缩率："+~~(100*(r-m.length)/r)+"%"),l.width=l.height=a.width=a.height=0,m},rotateImg2:function(e,t,s){if(null!=e){var i=e.height,a=e.width,n=2;null==n&&(n=0),"right"==t?++n>3&&(n=0):--n<0&&(n=3);var l=90*n*Math.PI/180,o=s.getContext("2d");switch(n){case 0:s.width=a,s.height=i,o.drawImage(e,0,0);break;case 1:s.width=i,s.height=a,o.rotate(l),o.drawImage(e,0,-i);break;case 2:s.width=a,s.height=i,o.rotate(l),o.drawImage(e,-a,-i);break;case 3:s.width=i,s.height=a,o.rotate(l),o.drawImage(e,-a,0)}}},compress2:function(e,t){var s,i,a=document.createElement("canvas"),n=a.getContext("2d"),l=document.createElement("canvas"),o=l.getContext("2d"),r=e.src.length,d=e.width,u=e.height;if((s=d*u/4e6)>1?(console.log("大于400万像素"),d/=s=Math.sqrt(s),u/=s):s=1,a.width=d,a.height=u,n.fillStyle="#fff",n.fillRect(0,0,a.width,a.height),(i=d*u/1e6)>1){console.log("超过100W像素");var c=~~(d/(i=~~(Math.sqrt(i)+1))),f=~~(u/i);l.width=c,l.height=f;for(var h=0;h<i;h++)for(var g=0;g<i;g++)o.drawImage(e,h*c*s,g*f*s,c*s,f*s,0,0,c,f),n.drawImage(l,h*c,g*f,c,f)}else n.drawImage(e,0,0,d,u);if(""!=t&&1!=t)switch(t){case 6:this.rotateImg1(e,"left",a);break;case 8:this.rotateImg1(e,"right",a);break;case 3:this.rotateImg1(e,"right",a),this.rotateImg1(e,"right",a)}var m=a.toDataURL("image/jpeg",.1);return console.log("压缩前："+r),console.log("压缩后："+m.length),console.log("压缩率："+~~(100*(r-m.length)/r)+"%"),l.width=l.height=a.width=a.height=0,m}}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"content"},[s("van-form",{on:{submit:e.onSubmit}},[s("div",{staticClass:"van-cell van-cell--required van-field"},[s("div",{staticClass:"van-cell__title van-field__label"},[s("span",[e._v("头像")])]),e._v(" "),s("div",{staticClass:"van-cell__value van-field__value"},[s("div",{staticClass:"van-field__body"},[s("div",{staticClass:"van-field__control van-field__control--right"},[s("van-uploader",{attrs:{"preview-size":"100px","after-read":e.afterRead1,"max-count":1,delete:e.deleteFile1,deletable:e.deletable},model:{value:e.fileList1,callback:function(t){e.fileList1=t},expression:"fileList1"}})],1)])])]),e._v(" "),s("van-field",{attrs:{type:"text",label:"学号",placeholder:"请填写学号","input-align":"right",required:""},model:{value:e.studentInfor.stu_number,callback:function(t){e.$set(e.studentInfor,"stu_number",t)},expression:"studentInfor.stu_number"}}),e._v(" "),s("van-field",{attrs:{type:"text",label:"名称",placeholder:"请填写名称","input-align":"right",required:""},model:{value:e.studentInfor.stu_name,callback:function(t){e.$set(e.studentInfor,"stu_name",t)},expression:"studentInfor.stu_name"}}),e._v(" "),s("van-field",{attrs:{readonly:"",clickable:"",value:e.sexList[e.studentInfor.stu_sex-1],label:"性别",placeholder:"点击选择","input-align":"right",required:""},on:{click:function(t){e.showPicker4=!0}}}),e._v(" "),s("van-field",{attrs:{type:"text",label:"年龄",placeholder:"请填写年龄","input-align":"right",required:""},model:{value:e.studentInfor.stu_age,callback:function(t){e.$set(e.studentInfor,"stu_age",t)},expression:"studentInfor.stu_age"}}),e._v(" "),s("van-field",{attrs:{type:"text",label:"班级",placeholder:"请填写班级","input-align":"right",required:""},model:{value:e.studentInfor.class,callback:function(t){e.$set(e.studentInfor,"class",t)},expression:"studentInfor.class"}}),e._v(" "),s("van-field",{attrs:{type:"textarea",label:"备注",placeholder:"请填写备注","input-align":"right",required:""},model:{value:e.studentInfor.relation,callback:function(t){e.$set(e.studentInfor,"relation",t)},expression:"studentInfor.relation"}}),e._v(" "),s("van-cell",{attrs:{required:"",title:"学生照片"}},[s("div",{staticClass:"van-cell__value van-field__value"},[s("div",{staticClass:"van-field__body"},[s("div",{staticClass:"van-field__control van-field__control--right"},[s("van-uploader",{attrs:{"preview-size":"100px","after-read":e.afterRead2,"max-count":1,delete:e.deleteFile2,deletable:e.deletable},model:{value:e.fileList2,callback:function(t){e.fileList2=t},expression:"fileList2"}})],1)])])]),e._v(" "),s("div",{staticStyle:{width:"70vw",margin:"15vw auto"}},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",size:"small",disabled:e.disabled}},[e._v("\n\t\t\t\t\t提交\n\t\t\t\t")])],1)],1)],1),e._v(" "),s("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker4,callback:function(t){e.showPicker4=t},expression:"showPicker4"}},[s("van-picker",{attrs:{"show-toolbar":"",columns:e.sexList},on:{confirm:e.sexOnChange,cancel:function(t){e.showPicker4=!1}}})],1)],1)},staticRenderFns:[]};var u=s("VU/8")(r,d,!1,function(e){s("bivf")},"data-v-59f5cbdc",null);t.default=u.exports}});