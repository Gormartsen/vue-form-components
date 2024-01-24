(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n.VueFormComponents={},n.Vue))})(this,function(n,e){"use strict";var p=0,u={},m={};const r=function(t,l){return l!==void 0?m[l]===void 0?(m[l]=0,l):(m[l]++,l+"-"+m[l]):t!==void 0?u[t]===void 0?(u[t]=0,"form-id-"+t):(u[t]++,"form-id-"+t+"-"+u[t]):(p++,"form-id-"+p)},$="",f=(t,l)=>{const s=t.__vccOpts||t;for(const[c,i]of l)s[c]=i;return s};var b=["lg","sm"],y=["text","email","file","password","textarea","color"];const _={data(){return{validationTimeOut:!1,validationStatus:{},formId:"",text:"",inputTypeTag:"input",arialabel:void 0,describedby:void 0}},props:["label","size","type","placeholder","describe","id","disabled","rows","readonly","value","modelValue","aria-label","aria-describedby","autofocus","validation"],emits:["focusout","keyup","update:modelValue"],computed:{inputType:function(){var t="text";if(this.type!="textarea")return this.type&&y.indexOf(this.type)!==-1&&(t=this.type),t},inputClasses:function(){var t="form-control";return this.readonly&&(t="form-control-plaintext"),this.type=="color"&&(t="form-control form-control-color"),this.size&&b.indexOf(this.size)!==-1&&(t=t+" form-control-"+this.size),this.validationStatus.valid&&(t=t+" is-valid"),this.validationStatus.valid==!1&&(t=t+" is-invalid"),this.$attrs.class&&(t=t+" "+this.$attrs.class),t}},methods:{Validate:function(){var t=this;this.validationTimeOut&&clearTimeout(this.validationTimeOut),this.validation&&typeof this.validation=="function"&&(this.validationTimeOut=setTimeout(function(){t.validation(t.text,function(l){t.validationStatus=l})},300))}},watch:{text:function(t){if(console.log("watch:text",t),this.Validate(),t!=null)return this.$emit("update:modelValue",t)}},updated:function(){console.log("updated",this.modelValue),this.disabled?this.$refs.input.disabled=!0:this.$refs.input.disabled=!1,this.modelValue!==void 0&&this.text!=this.modelValue&&(this.text=this.modelValue)},created:function(){console.log("created",this.modelValue),this.formId=r(this.inputType,this.id),this.text=this.modelValue,this.type=="textarea"&&(this.inputTypeTag="textarea"),this.value&&(this.text=this.value),this.ariaLabel&&(this.arialabel=this.ariaLabel),this.ariaDescribedby&&(this.describedby=this.ariaDescribedby),this.describe&&(this.describedby=this.formId+"-described")},mounted:function(){this.disabled&&(this.$refs.input.disabled=!0),this.autofocus&&this.$refs.input.focus(),console.log("mounted",this.modelValue)}},k=["for"],x={key:1,class:"invalid-feedback"},V={key:2,class:"valid-feedback"},g=["id","placeholder","aria-describedby","type","readonly","aria-label"],I=["id","placeholder","aria-describedby","aria-label","rows","readonly"],B=["id"];function C(t,l,s,c,i,o){return e.openBlock(),e.createElementBlock(e.Fragment,null,[s.label?(e.openBlock(),e.createElementBlock("label",{key:0,for:i.formId,class:"form-label"},e.toDisplayString(s.label),9,k)):e.createCommentVNode("",!0),i.validationStatus.valid==!1&&i.validationStatus.message!=""?(e.openBlock(),e.createElementBlock("div",x,e.toDisplayString(i.validationStatus.message),1)):e.createCommentVNode("",!0),i.validationStatus.valid&&i.validationStatus.message!=""?(e.openBlock(),e.createElementBlock("div",V,e.toDisplayString(i.validationStatus.message),1)):e.createCommentVNode("",!0),i.inputTypeTag=="input"?e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:3,id:i.formId,ref:"input",class:e.normalizeClass(o.inputClasses),placeholder:s.placeholder,"aria-describedby":i.describedby,type:o.inputType,readonly:s.readonly,"onUpdate:modelValue":l[0]||(l[0]=a=>i.text=a),"aria-label":i.arialabel,onFocusout:l[1]||(l[1]=a=>t.$emit("focusout"))},null,42,g)),[[e.vModelDynamic,i.text]]):e.createCommentVNode("",!0),i.inputTypeTag=="textarea"?e.withDirectives((e.openBlock(),e.createElementBlock("textarea",{key:4,id:i.formId,ref:"input",class:e.normalizeClass(o.inputClasses),placeholder:s.placeholder,"aria-describedby":i.describedby,"aria-label":i.arialabel,"onUpdate:modelValue":l[2]||(l[2]=a=>i.text=a),rows:s.rows,readonly:s.readonly},null,10,I)),[[e.vModelText,i.text]]):e.createCommentVNode("",!0),s.describe?(e.openBlock(),e.createElementBlock("div",{key:5,id:i.formId+"-described",class:"form-text"},e.toDisplayString(s.describe),9,B)):e.createCommentVNode("",!0)],64)}const S=f(_,[["render",C],["__scopeId","data-v-dca38223"]]);var T=["lg","sm"];const E={data(){return{formId:"",text:"",type:"select"}},props:["label","size","describe","multiple","id","disabled","readonly","value","options","modelValue"],emits:["update:modelValue"],computed:{describedby:function(){if(this.describe)return this.formId+"-described"},inputClasses:function(){var t="form-select";return this.readonly&&(t="form-select-plaintext"),this.type=="color"&&(t="form-select form-select-color"),this.size&&T.indexOf(this.size)!==-1&&(t=t+" form-select-"+this.size),t}},watch:{text:function(t){if(t!=null)return this.$emit("update:modelValue",t)}},updated:function(){this.disabled?this.$refs.input.disabled=!0:this.$refs.input.disabled=!1,this.modelValue!==void 0&&this.text!=this.modelValue&&(this.text=this.modelValue)},created:function(){this.formId=r(this.type,this.id),this.text=this.modelValue,this.value&&(this.text=this.value)},mounted:function(){this.disabled&&(this.$refs.input.disabled=!0)}},D=["for"],F=["id","aria-describedby","readonly","multiple"],N=["value"],z=["id"];function w(t,l,s,c,i,o){return e.openBlock(),e.createElementBlock(e.Fragment,null,[s.label?(e.openBlock(),e.createElementBlock("label",{key:0,for:i.formId,class:"form-label"},e.toDisplayString(s.label),9,D)):e.createCommentVNode("",!0),e.withDirectives(e.createElementVNode("select",{id:i.formId,ref:"input",class:e.normalizeClass(o.inputClasses),"aria-describedby":o.describedby,readonly:s.readonly,"onUpdate:modelValue":l[0]||(l[0]=a=>i.text=a),multiple:s.multiple},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.options,(a,d)=>(e.openBlock(),e.createElementBlock("option",{key:d,value:d},e.toDisplayString(a),9,N))),128))],10,F),[[e.vModelSelect,i.text]]),s.describe?(e.openBlock(),e.createElementBlock("div",{key:1,id:i.formId+"-described",class:"form-text"},e.toDisplayString(s.describe),9,z)):e.createCommentVNode("",!0)],64)}const O=f(E,[["render",w]]),R={data(){return{formId:"",text:!1,type:"checkbox"}},props:["label","id","disabled","value","modelValue"],emits:["update:modelValue"],computed:{inputClasses:function(){var t="form-check-input";return t}},watch:{text:function(t){return this.$emit("update:modelValue",t)}},updated:function(){this.disabled?this.$refs.input.disabled=!0:this.$refs.input.disabled=!1,this.modelValue?this.text=!0:this.text=!1},created:function(){this.formId=r(this.type,this.id),this.modelValue?this.text=!0:this.$emit("update:modelValue",!1),this.value&&(this.text=!0)},mounted:function(){this.disabled&&(this.$refs.input.disabled=!0)}},M={class:"form-check"},U=["id"],L=["for"];function j(t,l,s,c,i,o){return e.openBlock(),e.createElementBlock("div",M,[e.withDirectives(e.createElementVNode("input",{id:i.formId,ref:"input",class:e.normalizeClass(o.inputClasses),type:"checkbox","onUpdate:modelValue":l[0]||(l[0]=a=>i.text=a)},null,10,U),[[e.vModelCheckbox,i.text]]),s.label?(e.openBlock(),e.createElementBlock("label",{key:0,for:i.formId,class:"form-check-label"},e.toDisplayString(s.label),9,L)):e.createCommentVNode("",!0)])}const v=f(R,[["render",j]]);var h=-1,q=function(){var t="form-radio";return h==-1?(h++,t):(h++,t+"-"+h)};const P={data(){return{formId:"",type:"select",name:"",selected:0,generatedIds:{}}},props:["id","disabled","readonly","value","options","modelValue"],emits:["update:modelValue"],computed:{},watch:{selected:function(t){return this.$emit("update:modelValue",t)}},methods:{getRadioId:function(t){return this.generatedIds[t]?this.generatedIds[t]:(this.generatedIds[t]=r("radio"),this.generatedIds[t])},IsDisabled:function(t){if(this.disabled&&this.disabled.indexOf&&this.disabled.indexOf(t)!==-1)return!0}},updated:function(){this.modelValue!==void 0&&this.text!=this.modelValue&&(this.selected=this.modelValue)},created:function(){this.formId=r(this.type,this.id),this.name=q(),this.selected=this.modelValue,this.value&&(this.selected=this.value)},mounted:function(){}},A=["id","readonly","value","name","disabled"],G=["for"];function H(t,l,s,c,i,o){return e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.options,(a,d)=>(e.openBlock(),e.createElementBlock("div",{class:"form-check",key:d},[e.withDirectives(e.createElementVNode("input",{id:o.getRadioId(d),ref_for:!0,ref:"input",class:"form-check-input",readonly:s.readonly,"onUpdate:modelValue":l[0]||(l[0]=Z=>i.selected=Z),value:d,name:i.name,type:"radio",disabled:o.IsDisabled(d)},null,8,A),[[e.vModelRadio,i.selected]]),e.createElementVNode("label",{for:o.getRadioId(d),class:"form-check-label"},e.toDisplayString(a),9,G)]))),128)}const J=f(P,[["render",H]]),K={data(){return{formId:"",text:0,type:"range"}},props:["label","id","min","max","step","disabled","value","modelValue"],emits:["update:modelValue"],computed:{inputClasses:function(){var t="form-range";return t}},watch:{text:function(t){return t%1===0?this.$emit("update:modelValue",parseInt(t)):this.$emit("update:modelValue",parseFloat(t))}},updated:function(){this.disabled?this.$refs.input.disabled=!0:this.$refs.input.disabled=!1,this.modelValue&&this.text!=this.modelValue&&(this.text=this.modelValue)},created:function(){this.formId=r(this.type,this.id),this.modelValue&&(this.text=this.modelValue),this.value&&(this.text=this.value)},mounted:function(){this.disabled&&(this.$refs.input.disabled=!0)}},Q=["for"],W=["id","min","max","step"];function X(t,l,s,c,i,o){return e.openBlock(),e.createElementBlock(e.Fragment,null,[s.label?(e.openBlock(),e.createElementBlock("label",{key:0,for:i.formId,class:"form-check-label"},e.toDisplayString(s.label),9,Q)):e.createCommentVNode("",!0),e.withDirectives(e.createElementVNode("input",{id:i.formId,ref:"input",class:e.normalizeClass(o.inputClasses),type:"range","onUpdate:modelValue":l[0]||(l[0]=a=>i.text=a),min:s.min,max:s.max,step:s.step},null,10,W),[[e.vModelText,i.text]])],64)}const Y=f(K,[["render",X]]);n.FormCheckbox=v,n.FormInput=S,n.FormRadio=J,n.FormRange=Y,n.FormSelect=O,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
