(this["webpackJsonpcalli-app"]=this["webpackJsonpcalli-app"]||[]).push([[6],{415:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_confirm_sign_in",(function(){return b})),n.d(t,"amplify_confirm_sign_up",(function(){return g})),n.d(t,"amplify_forgot_password",(function(){return F})),n.d(t,"amplify_require_new_password",(function(){return C})),n.d(t,"amplify_sign_in",(function(){return v})),n.d(t,"amplify_sign_up",(function(){return O})),n.d(t,"amplify_verify_contact",(function(){return I}));var r=n(16),i=n(13),a=n(43),s=n(30),o=n(35),u=n(82),l=n(11),h=n(24),c=n(145),d=n(474),p=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{u(r.next(e))}catch(t){a(t)}}function o(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}u((r=r.apply(e,t||[])).next())}))},f=function(e,t){var n,r,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(o){a=[6,o],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},m=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var a=arguments[t],s=0,o=a.length;s<o;s++,i++)r[i]=a[s];return r},b=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleSubmit=function(e){return t.confirm(e)},this.headerText=l.a.CONFIRM_SMS_CODE,this.submitButtonText=l.a.CONFIRM,this.handleAuthStateChange=c.d,this.defaultFormFields=[{type:"code",required:!0,handleInputChange:function(e){return t.handleCodeChange(e)}}],this.formFields=this.defaultFormFields,this.mfaOption=o.c.SMS,this.loading=!1}return e.prototype.componentWillLoad=function(){this.setup()},e.prototype.userHandler=function(){this.setup()},e.prototype.setup=function(){this.user&&this.user.challengeName===o.b.SoftwareTokenMFA&&(this.mfaOption=o.c.TOTP,this.headerText===l.a.CONFIRM_SMS_CODE&&(this.headerText=l.a.CONFIRM_TOTP_CODE)),this.constructedFormFieldOptions=this.constructFormFieldOptions(this.formFields)},e.prototype.handleCodeChange=function(e){this.code=e.target.value},e.prototype.confirm=function(e){return p(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:if(e&&e.preventDefault(),t=this.user.challengeName===o.b.SoftwareTokenMFA?o.b.SoftwareTokenMFA:null,!u.a||"function"!==typeof u.a.confirmSignIn)throw new Error(h.d);this.loading=!0,r.label=1;case 1:return r.trys.push([1,4,5,6]),[4,u.a.confirmSignIn(this.user,this.code,t)];case 2:return r.sent(),[4,Object(d.a)(this.user,this.handleAuthStateChange)];case 3:return r.sent(),[3,6];case 4:return n=r.sent(),Object(c.a)(n),[3,6];case 5:return this.loading=!1,[7];case 6:return[2]}}))}))},e.prototype.constructFormFieldOptions=function(e){var t=this,n=[];if(void 0!==e)return e.length<=0?this.defaultFormFields:(e.forEach((function(e){"string"===typeof e||"code"!==e.type?n.push(e):n.push(Object.assign({handleInputChange:function(e){return t.handleCodeChange(e)}},e))})),n)},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:i.a.get(this.headerText),handleSubmit:this.handleSubmit,submitButtonText:i.a.get(this.submitButtonText),loading:this.loading,secondaryFooterContent:Object(r.i)("span",null,Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.SignIn)}},i.a.get(l.a.BACK_TO_SIGN_IN)))},Object(r.i)("amplify-auth-fields",{formFields:this.constructedFormFieldOptions})))},Object.defineProperty(e,"watchers",{get:function(){return{user:["userHandler"]}},enumerable:!1,configurable:!0}),e}(),g=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleSubmit=function(e){return t.confirmSignUp(e)},this.headerText=l.a.CONFIRM_SIGN_UP_HEADER_TEXT,this.submitButtonText=l.a.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT,this.formFields=[],this.handleAuthStateChange=c.d,this.usernameAlias="username",this.loading=!1,this.newFormFields=[],this.phoneNumber={countryDialCodeValue:h.p,phoneNumberValue:null}}return e.prototype.componentWillLoad=function(){this.setup()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.userHandler=function(){this.setup()},e.prototype.setup=function(){this.userInput=this.user&&this.user.username,this._signUpAttrs=this.user&&this.user.signUpAttrs,Object(c.c)(this.usernameAlias),this.buildFormFields()},e.prototype.buildDefaultFormFields=function(){var e=this;this.newFormFields=[{type:""+this.usernameAlias,required:!0,handleInputChange:this.handleFormFieldInputChange(""+this.usernameAlias),value:this.userInput,disabled:!!this.userInput,inputProps:{autocomplete:"username"}},{type:"code",label:i.a.get(l.a.CONFIRM_SIGN_UP_CODE_LABEL),placeholder:i.a.get(l.a.CONFIRM_SIGN_UP_CODE_PLACEHOLDER),required:!0,hint:Object(r.i)("div",null,i.a.get(l.a.CONFIRM_SIGN_UP_LOST_CODE)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.resendConfirmCode()}},i.a.get(l.a.CONFIRM_SIGN_UP_RESEND_CODE))),handleInputChange:this.handleFormFieldInputChange("code")}]},e.prototype.buildFormFields=function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var a=Object.assign({},n);"code"===a.type&&(a.hint=Object(c.h)(a)?Object(r.i)("div",null,i.a.get(l.a.CONFIRM_SIGN_UP_LOST_CODE)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.resendConfirmCode()}},i.a.get(l.a.CONFIRM_SIGN_UP_RESEND_CODE))):a.hint),a.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},t.push(a)})),this.newFormFields=t}},e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.userInput=e.target.value};case"phone_number":return function(e){return Object(c.g)(e,t.phoneNumber)};case"code":return function(e){return t.code=e.target.value};default:return}},e.prototype.setFieldValue=function(e){switch(e.type){case"username":case"email":void 0===e.value?this.userInput="":this.userInput=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.getUsername=function(){if(this.user&&this.user.username)return this.user.username;switch(this.usernameAlias){case"username":case"email":return this.userInput;case"phone_number":return Object(c.b)(this.phoneNumber)}},e.prototype.resendConfirmCode=function(){return p(this,void 0,void 0,(function(){var e,t;return f(this,(function(n){switch(n.label){case 0:if(event&&event.preventDefault(),!u.a||"function"!==typeof u.a.resendSignUp)throw new Error(h.d);n.label=1;case 1:if(n.trys.push([1,3,,4]),!(e=this.getUsername()))throw new Error(l.a.EMPTY_USERNAME);return[4,u.a.resendSignUp(e.trim())];case 2:return n.sent(),[3,4];case 3:return t=n.sent(),Object(c.a)(t),[3,4];case 4:return[2]}}))}))},e.prototype.confirmSignUp=function(e){return p(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:if(e&&e.preventDefault(),!u.a||"function"!==typeof u.a.confirmSignUp)throw new Error(h.d);this.loading=!0,r.label=1;case 1:if(r.trys.push([1,6,7,8]),!(t=this.getUsername()))throw new Error(l.a.EMPTY_USERNAME);return t=t.trim(),[4,u.a.confirmSignUp(t,this.code)];case 2:if(!r.sent())throw new Error(i.a.get(l.a.CONFIRM_SIGN_UP_FAILED));return this._signUpAttrs&&this._signUpAttrs.password&&""!==this._signUpAttrs.password?[4,Object(d.b)(t,this._signUpAttrs.password,this.handleAuthStateChange)]:[3,4];case 3:return r.sent(),[3,5];case 4:this.handleAuthStateChange(o.a.SignIn),r.label=5;case 5:return[3,8];case 6:return n=r.sent(),Object(c.a)(n),[3,8];case 7:return this.loading=!1,[7];case 8:return[2]}}))}))},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:i.a.get(this.headerText),submitButtonText:i.a.get(this.submitButtonText),handleSubmit:this.handleSubmit,loading:this.loading,secondaryFooterContent:Object(r.i)("div",null,Object(r.i)("span",null,Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.SignIn)}},i.a.get(l.a.BACK_TO_SIGN_IN))))},Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields})))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"],user:["userHandler"]}},enumerable:!1,configurable:!0}),e}(),y=new a.a("ForgotPassword"),F=function(){function e(e){var t=this;Object(r.k)(this,e),this.headerText=l.a.RESET_YOUR_PASSWORD,this.sendButtonText=l.a.SEND_CODE,this.submitButtonText=l.a.SUBMIT,this.formFields=[],this.handleSend=function(e){return t.send(e)},this.handleSubmit=function(e){return t.submit(e)},this.handleAuthStateChange=c.d,this.usernameAlias="username",this.delivery=null,this.loading=!1,this.phoneNumber={countryDialCodeValue:h.p,phoneNumberValue:null},this.newFormFields=[],this.forgotPasswordAttrs={userInput:"",password:"",code:""}}return e.prototype.componentWillLoad=function(){Object(c.c)(this.usernameAlias),this.buildFormFields()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.buildFormFields=function(){var e=this;0===this.formFields.length?this.buildDefaultFormFields():this.formFields.forEach((function(t){var n=Object.assign({},t);n.handleInputChange=function(n){return e.handleFormFieldInputWithCallback(n,t)},e.newFormFields.push(n)}))},e.prototype.buildDefaultFormFields=function(){switch(this.usernameAlias){case"email":this.newFormFields=[{type:"email",required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"forgot-password-email-input"}}];break;case"phone_number":this.newFormFields=[{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"forgot-password-phone-number-input"}}];break;case"username":default:this.newFormFields=[{type:"username",required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"forgot-password-username-input"}}]}},e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.forgotPasswordAttrs.userInput=e.target.value};case"phone_number":return function(e){return Object(c.g)(e,t.phoneNumber)};case"password":case"code":return function(n){return t.forgotPasswordAttrs[e]=n.target.value};default:return}},e.prototype.setFieldValue=function(e,t){switch(e.type){case"username":case"email":void 0===e.value?t.userInput="":t.userInput=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;case"password":case"code":void 0===e.value?t[e.type]="":t[e.type]=e.value}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.send=function(e){return p(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:if(e&&e.preventDefault(),!u.a||"function"!==typeof u.a.forgotPassword)throw new Error(h.d);switch(this.loading=!0,this.usernameAlias){case"phone_number":try{this.forgotPasswordAttrs.userInput=Object(c.b)(this.phoneNumber)}catch(a){Object(c.a)(a)}}r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,u.a.forgotPassword(this.forgotPasswordAttrs.userInput.trim())];case 2:return t=r.sent(),y.debug(t),this.newFormFields=[{type:"code",required:!0,handleInputChange:this.handleFormFieldInputChange("code"),inputProps:{"data-test":"forgot-password-code-input"}},{type:"password",required:!0,handleInputChange:this.handleFormFieldInputChange("password"),label:i.a.get(l.a.NEW_PASSWORD_LABEL),placeholder:i.a.get(l.a.NEW_PASSWORD_PLACEHOLDER)}],this.delivery=t.CodeDeliveryDetails,[3,5];case 3:return n=r.sent(),Object(c.a)(n),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.submit=function(e){return p(this,void 0,void 0,(function(){var t,n,r,i,a,s;return f(this,(function(l){switch(l.label){case 0:if(e&&e.preventDefault(),!u.a||"function"!==typeof u.a.forgotPasswordSubmit)throw new Error(h.d);this.loading=!0,l.label=1;case 1:return l.trys.push([1,3,4,5]),t=this.forgotPasswordAttrs,n=t.userInput,r=t.code,i=t.password,[4,u.a.forgotPasswordSubmit(n.trim(),r,i)];case 2:return a=l.sent(),y.debug(a),this.handleAuthStateChange(o.a.SignIn),this.delivery=null,[3,5];case 3:return s=l.sent(),Object(c.a)(s),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.render=function(){var e=this,t=this.delivery?function(t){return e.handleSubmit(t)}:function(t){return e.handleSend(t)},n=this.delivery?this.submitButtonText:this.sendButtonText;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:i.a.get(this.headerText),handleSubmit:t,loading:this.loading,secondaryFooterContent:Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.SignIn)},"data-test":"forgot-password-back-to-sign-in-link"},i.a.get(l.a.BACK_TO_SIGN_IN)),testDataPrefix:"forgot-password",submitButtonText:i.a.get(n)},Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields})))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"]}},enumerable:!1,configurable:!0}),e}(),w=new a.a("amplify-require-new-password"),C=function(){function e(e){var t=this;Object(r.k)(this,e),this.headerText=l.a.CHANGE_PASSWORD,this.submitButtonText=l.a.CHANGE_PASSWORD_ACTION,this.handleSubmit=function(e){return t.completeNewPassword(e)},this.handleAuthStateChange=c.d,this.formFields=[{type:o.e.Password,required:!0,handleInputChange:function(e){return t.handlePasswordChange(e)},label:i.a.get(l.a.NEW_PASSWORD_LABEL),placeholder:i.a.get(l.a.NEW_PASSWORD_PLACEHOLDER),inputProps:{"data-test":"require-new-password-password-input"}}],this.loading=!1,this.requiredAttributes={},this.newFormFields=this.formFields,this.phoneNumber={countryDialCodeValue:h.p,phoneNumberValue:" "}}return e.prototype.userHandler=function(){this.setCurrentUser()},e.prototype.handleRequiredAttributeInputChange=function(e,t){"phone_number"===e?this.formatPhoneNumber(t):this.requiredAttributes[e]=t.target.value},e.prototype.setCurrentUser=function(){return p(this,void 0,void 0,(function(){var e,t,n,r,i=this;return f(this,(function(a){switch(a.label){case 0:if(this.user)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,u.a.currentAuthenticatedUser()];case 2:return(e=a.sent())&&(this.currentUser=e),[3,4];case 3:return t=a.sent(),Object(c.a)(t),[3,4];case 4:return[3,6];case 5:this.currentUser=this.user,a.label=6;case 6:return this.currentUser&&this.currentUser.challengeParam&&this.currentUser.challengeParam.requiredAttributes&&(n=this.currentUser.challengeParam.requiredAttributes,r=Object(c.f)(),n.forEach((function(e){var t={type:e,required:!0,label:r[e].label,placeholder:r[e].placeholder,handleInputChange:function(t){return i.handleRequiredAttributeInputChange(e,t)},inputProps:{"data-test":"require-new-password-"+e+"-input"}};i.newFormFields=m(i.newFormFields,[t])}))),[2]}}))}))},e.prototype.componentWillLoad=function(){return this.setCurrentUser()},e.prototype.handlePasswordChange=function(e){this.password=e.target.value},e.prototype.formatPhoneNumber=function(e){Object(c.g)(e,this.phoneNumber);try{if(e.target.name===h.j&&this.phoneNumber.phoneNumberValue){var t=Object(c.b)(this.phoneNumber);this.requiredAttributes.phone_number=t}}catch(n){w.error("error in phone number field - "+n)}},e.prototype.completeNewPassword=function(e){return p(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:if(e&&e.preventDefault(),!u.a||"function"!==typeof u.a.completeNewPassword)throw new Error(h.d);this.loading=!0,r.label=1;case 1:return r.trys.push([1,8,9,10]),[4,u.a.completeNewPassword(this.currentUser,this.password,this.requiredAttributes)];case 2:switch(t=r.sent(),w.debug("complete new password",t),t.challengeName){case o.b.SMSMFA:return[3,3];case o.b.MFASetup:return[3,4]}return[3,5];case 3:return this.handleAuthStateChange(o.a.ConfirmSignIn,t),[3,7];case 4:return w.debug("TOTP setup",t.challengeParam),this.handleAuthStateChange(o.a.TOTPSetup,t),[3,7];case 5:return[4,Object(d.a)(t,this.handleAuthStateChange)];case 6:r.sent(),r.label=7;case 7:return[3,10];case 8:return n=r.sent(),Object(c.a)(n),[3,10];case 9:return this.loading=!1,[7];case 10:return[2]}}))}))},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:i.a.get(this.headerText),handleSubmit:this.handleSubmit,loading:this.loading,secondaryFooterContent:Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.SignIn)}},i.a.get(l.a.BACK_TO_SIGN_IN)),submitButtonText:i.a.get(this.submitButtonText)},Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields})))},Object.defineProperty(e,"watchers",{get:function(){return{user:["userHandler"]}},enumerable:!1,configurable:!0}),e}(),v=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleSubmit=function(e){return t.signIn(e)},this.headerText=l.a.SIGN_IN_HEADER_TEXT,this.submitButtonText=l.a.SIGN_IN_ACTION,this.handleAuthStateChange=c.d,this.usernameAlias="username",this.formFields=[],this.hideSignUp=!1,this.newFormFields=[],this.loading=!1,this.phoneNumber={countryDialCodeValue:h.p,phoneNumberValue:null},this.signInAttributes={userInput:"",password:""}}return e.prototype.componentWillLoad=function(){Object(c.c)(this.usernameAlias),this.buildFormFields()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.signInAttributes.userInput=e.target.value};case"phone_number":return function(e){return Object(c.g)(e,t.phoneNumber)};case"password":return function(e){return t.signInAttributes.password=e.target.value};default:return function(){}}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.signIn=function(e){return p(this,void 0,void 0,(function(){var t;return f(this,(function(n){switch(n.label){case 0:switch(e&&e.preventDefault(),this.loading=!0,this.usernameAlias){case"phone_number":try{this.signInAttributes.userInput=Object(c.b)(this.phoneNumber)}catch(r){Object(c.a)(r)}}return t=this.signInAttributes.userInput.trim(),[4,Object(d.b)(t,this.signInAttributes.password,this.handleAuthStateChange,this.usernameAlias)];case 1:return n.sent(),this.loading=!1,[2]}}))}))},e.prototype.buildDefaultFormFields=function(){var e=this,t=[];switch(this.usernameAlias){case"email":t.push({type:"email",required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-in-email-input",autocomplete:"username"}});break;case"phone_number":t.push({type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-in-phone-number-input",autocomplete:"username"}});break;case"username":default:t.push({type:"username",required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"sign-in-username-input",autocomplete:"username"}})}t.push({type:"password",hint:Object(r.i)("div",null,i.a.get(l.a.FORGOT_PASSWORD_TEXT)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.ForgotPassword)},"data-test":"sign-in-forgot-password-link"},i.a.get(l.a.RESET_PASSWORD_TEXT))),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-in-password-input"}}),this.newFormFields=m(t)},e.prototype.buildFormFields=function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var a=Object.assign({},n);"password"===a.type&&(a.hint=Object(c.h)(a)?Object(r.i)("div",null,i.a.get(l.a.FORGOT_PASSWORD_TEXT)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.ForgotPassword)},"data-test":"sign-in-forgot-password-link"},i.a.get(l.a.RESET_PASSWORD_TEXT))):a.hint),a.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},e.setFieldValue(a,e.signInAttributes),t.push(a)})),this.newFormFields=t}},e.prototype.setFieldValue=function(e,t){switch(e.type){case"username":case"email":void 0===e.value?t.userInput="":t.userInput=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;case"password":void 0===e.value?t.password="":t.password=e.value}},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:i.a.get(this.headerText),handleSubmit:this.handleSubmit,testDataPrefix:"sign-in"},Object(r.i)("div",{slot:"subtitle"},Object(r.i)("slot",{name:"header-subtitle"})),Object(r.i)("slot",{name:"federated-buttons"},Object(r.i)("amplify-federated-buttons",{handleAuthStateChange:this.handleAuthStateChange,federated:this.federated})),!Object(s.d)(this.federated)&&Object(r.i)("amplify-strike",null,"or"),Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields}),Object(r.i)("div",{slot:"amplify-form-section-footer",class:"sign-in-form-footer"},Object(r.i)("slot",{name:"footer"},!this.hideSignUp&&Object(r.i)("slot",{name:"secondary-footer-content"},Object(r.i)("span",null,i.a.get(l.a.NO_ACCOUNT_TEXT)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.SignUp)},"data-test":"sign-in-create-account-link"},i.a.get(l.a.CREATE_ACCOUNT_TEXT)))),Object(r.i)("div",{class:this.hideSignUp?"full-width-footer-content":""},Object(r.i)("slot",{name:"primary-footer-content"},Object(r.i)("amplify-button",{type:"submit",disabled:this.loading,"data-test":"sign-in-sign-in-button"},this.loading?Object(r.i)("amplify-loading-spinner",null):Object(r.i)("span",null,i.a.get(this.submitButtonText)))))))))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"]}},enumerable:!1,configurable:!0}),e}();v.style=":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}.full-width-footer-content{width:100%}";var O=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleSubmit=function(e){return t.signUp(e)},this.handleSignUp=function(e){return t.authSignUp(e)},this.headerText=l.a.SIGN_UP_HEADER_TEXT,this.submitButtonText=l.a.SIGN_UP_SUBMIT_BUTTON_TEXT,this.haveAccountText=l.a.SIGN_UP_HAVE_ACCOUNT_TEXT,this.signInText=l.a.SIGN_IN_TEXT,this.formFields=[],this.handleAuthStateChange=c.d,this.usernameAlias="username",this.newFormFields=[],this.phoneNumber={countryDialCodeValue:h.p,phoneNumberValue:null},this.loading=!1,this.signUpAttributes={username:"",password:"",attributes:{}}}return e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":return function(e){return t.signUpAttributes.username=e.target.value};case"password":return function(e){return t.signUpAttributes.password=e.target.value};case"email":return function(e){return t.signUpAttributes.attributes.email=e.target.value};case"phone_number":return function(e){return Object(c.g)(e,t.phoneNumber)};default:return function(n){return t.signUpAttributes.attributes[e]=n.target.value}}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.authSignUp=function(e){return p(this,void 0,void 0,(function(){var t;return f(this,(function(n){switch(n.label){case 0:return[4,u.a.signUp(e)];case 1:if(!(t=n.sent()))throw new Error(l.a.SIGN_UP_FAILED);return[2,t]}}))}))},e.prototype.assignPhoneNumberToSignUpAttributes=function(){if(this.phoneNumber.phoneNumberValue)try{this.signUpAttributes.attributes.phone_number=Object(c.b)(this.phoneNumber)}catch(e){Object(c.a)(e)}},e.prototype.assignUserNameAliasToSignUpAttributes=function(){switch(this.usernameAlias){case"email":case"phone_number":this.signUpAttributes.username=this.signUpAttributes.attributes[this.usernameAlias]}},e.prototype.assignFormInputToSignUpAttributes=function(){this.assignPhoneNumberToSignUpAttributes(),this.assignUserNameAliasToSignUpAttributes()},e.prototype.validateSignUpAttributes=function(){if(!this.signUpAttributes.username)throw this.usernameAlias===o.d.email?new Error(l.a.EMPTY_EMAIL):this.usernameAlias===o.d.phone_number?new Error(l.a.EMPTY_PHONE):new Error(l.a.EMPTY_USERNAME);if(this.signUpAttributes.username.indexOf(" ")>=0)throw new Error(l.a.USERNAME_REMOVE_WHITESPACE);if(this.signUpAttributes.password!==this.signUpAttributes.password.trim())throw new Error(l.a.PASSWORD_REMOVE_WHITESPACE)},e.prototype.signUp=function(e){return p(this,void 0,void 0,(function(){var t,n,r;return f(this,(function(i){switch(i.label){case 0:if(e&&e.preventDefault(),!u.a||"function"!==typeof u.a.signUp)throw new Error(h.d);this.loading=!0,this.assignFormInputToSignUpAttributes(),i.label=1;case 1:return i.trys.push([1,6,7,8]),this.validateSignUpAttributes(),[4,this.handleSignUp(this.signUpAttributes)];case 2:return(t=i.sent()).userConfirmed?[4,Object(d.b)(this.signUpAttributes.username,this.signUpAttributes.password,this.handleAuthStateChange)]:[3,4];case 3:return i.sent(),[3,5];case 4:n=Object.assign({},this.signUpAttributes),this.handleAuthStateChange(o.a.ConfirmSignUp,Object.assign(Object.assign({},t.user),{signUpAttrs:n})),i.label=5;case 5:return[3,8];case 6:return r=i.sent(),Object(c.a)(r),[3,8];case 7:return this.loading=!1,[7];case 8:return[2]}}))}))},e.prototype.buildDefaultFormFields=function(){switch(this.usernameAlias){case"email":this.newFormFields=[{type:"email",placeholder:i.a.get(l.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input",autocomplete:"username"}},{type:"password",placeholder:i.a.get(l.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input",autocomplete:"new-password"}},{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input",autocomplete:"tel-national"}}];break;case"phone_number":this.newFormFields=[{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input",autocomplete:"username"}},{type:"password",placeholder:i.a.get(l.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input",autocomplete:"new-password"}},{type:"email",placeholder:i.a.get(l.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input",autocomplete:"email"}}];break;case"username":default:this.newFormFields=[{type:"username",placeholder:i.a.get(l.a.SIGN_UP_USERNAME_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"sign-up-username-input",autocomplete:"username"}},{type:"password",placeholder:i.a.get(l.a.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input",autocomplete:"new-password"}},{type:"email",placeholder:i.a.get(l.a.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}},{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}}]}},e.prototype.buildFormFields=function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var r=Object.assign({},n);r.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},e.setFieldValue(n,e.signUpAttributes),t.push(r)})),this.newFormFields=t}},e.prototype.setFieldValue=function(e,t){switch(e.type){case"username":void 0===e.value?t.username="":t.username=e.value;break;case"password":void 0===e.value?t.password="":t.password=e.value;break;case"email":t.attributes.email=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;default:t.attributes[e.type]=e.value}},e.prototype.componentWillLoad=function(){Object(c.c)(this.usernameAlias),this.buildFormFields()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{headerText:i.a.get(this.headerText),handleSubmit:this.handleSubmit,testDataPrefix:"sign-up"},Object(r.i)("div",{slot:"subtitle"},Object(r.i)("slot",{name:"header-subtitle"})),Object(r.i)("amplify-auth-fields",{formFields:this.newFormFields}),Object(r.i)("div",{class:"sign-up-form-footer",slot:"amplify-form-section-footer"},Object(r.i)("slot",{name:"footer"},Object(r.i)("slot",{name:"secondary-footer-content"},Object(r.i)("span",null,i.a.get(this.haveAccountText)," ",Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.SignIn)},"data-test":"sign-up-sign-in-link"},i.a.get(this.signInText)))),Object(r.i)("slot",{name:"primary-footer-content"},Object(r.i)("amplify-button",{type:"submit","data-test":"sign-up-create-account-button",disabled:this.loading},this.loading?Object(r.i)("amplify-loading-spinner",null):Object(r.i)("span",null,i.a.get(this.submitButtonText))))))))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"]}},enumerable:!1,configurable:!0}),e}();O.style="amplify-sign-up{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";var _=new a.a("AmplifyVerifyContact"),I=function(){function e(e){Object(r.k)(this,e),this.handleAuthStateChange=c.d,this.loading=!1}return e.prototype.handleSubmit=function(e){e.preventDefault(),this.verifyAttr?this.submit(this.code):this.verify(this.contact)},e.prototype.submit=function(e){return p(this,void 0,void 0,(function(){var t,n,r;return f(this,(function(i){switch(i.label){case 0:if(t=this.verifyAttr,!u.a||"function"!==typeof u.a.verifyCurrentUserAttributeSubmit)throw new Error(h.d);this.loading=!0,i.label=1;case 1:return i.trys.push([1,3,4,5]),[4,u.a.verifyCurrentUserAttributeSubmit(t,e)];case 2:return n=i.sent(),_.debug(n),this.handleAuthStateChange(o.a.SignedIn,this.user),this.verifyAttr=null,[3,5];case 3:return r=i.sent(),Object(c.a)(r),_.error(r),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.verify=function(e){return p(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:if(!e)return _.error("Neither Email nor Phone Number selected"),[2];if(!u.a||"function"!==typeof u.a.verifyCurrentUserAttribute)throw new Error(h.d);this.loading=!0,r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,u.a.verifyCurrentUserAttribute(e)];case 2:return t=r.sent(),_.debug(t),this.verifyAttr=e,[3,5];case 3:return n=r.sent(),Object(c.a)(n),_.error(n),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.handleInputChange=function(e){var t=e.target.name;"code"===t?this.code=e.target.value:"contact"===t&&(this.contact=e.target.value)},e.prototype.renderSubmit=function(){var e=this;return Object(r.i)("div",null,Object(r.i)("amplify-input",{inputProps:{autocomplete:"off","data-test":"verify-contact-code-input"},name:"code",placeholder:i.a.get(l.a.CODE_PLACEHOLDER),handleInputChange:function(t){return e.handleInputChange(t)}}))},e.prototype.renderVerify=function(){var e=this,t=this.user;if(!t)return _.debug("No user to verify"),null;var n=t.unverified;if(!n)return _.debug("Unverified variable does not exist on user"),null;var a=n.email,s=n.phone_number;return Object(r.i)("div",null,a&&Object(r.i)("amplify-radio-button",{label:i.a.get(l.a.VERIFY_CONTACT_EMAIL_LABEL),key:"email",name:"contact",value:"email",handleInputChange:function(t){return e.handleInputChange(t)},inputProps:{"data-test":"verify-contact-email-radio"}}),s&&Object(r.i)("amplify-radio-button",{label:i.a.get(l.a.VERIFY_CONTACT_PHONE_LABEL),key:"phone_number",name:"contact",value:"phone_number",handleInputChange:function(t){return e.handleInputChange(t)},inputProps:{"data-test":"verify-contact-phone-number-radio"}}))},e.prototype.render=function(){var e=this;return Object(r.i)(r.b,null,Object(r.i)("amplify-form-section",{handleSubmit:function(t){return e.handleSubmit(t)},headerText:i.a.get(l.a.VERIFY_CONTACT_HEADER_TEXT),loading:this.loading,secondaryFooterContent:Object(r.i)("span",null,Object(r.i)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.a.SignedIn,e.user)},"data-test":"verify-contact-skip-link"},"Skip")),submitButtonText:this.verifyAttr?i.a.get(l.a.VERIFY_CONTACT_SUBMIT_LABEL):i.a.get(l.a.VERIFY_CONTACT_VERIFY_LABEL)},this.verifyAttr?this.renderSubmit():this.renderVerify()))},e}()},474:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(43),i=n(30),a=n(35),s=n(82),o=n(20),u=n(11),l=n(24),h=n(145),c=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{u(r.next(e))}catch(t){a(t)}}function o(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}u((r=r.apply(e,t||[])).next())}))},d=function(e,t){var n,r,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(o){a=[6,o],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},p=new r.a("auth-helpers");function f(e,t){return c(this,void 0,void 0,(function(){var n,r,o;return d(this,(function(u){switch(u.label){case 0:if(!s.a||"function"!==typeof s.a.verifiedContact)throw new Error(l.d);if(!b(e))return t(a.a.SignedIn,e),[2];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,s.a.verifiedContact(e)];case 2:return n=u.sent(),!Object(i.d)(n.verified)||Object(i.d)(n.unverified)?t(a.a.SignedIn,e):(r=Object.assign(e,n),t(a.a.VerifyContact,r)),[3,4];case 3:return o=u.sent(),Object(h.a)(o),[3,4];case 4:return[2]}}))}))}var m=function(e,t,n,r){return c(void 0,void 0,void 0,(function(){var i,o;return d(this,(function(c){switch(c.label){case 0:if(!s.a||"function"!==typeof s.a.signIn)throw new Error(l.d);c.label=1;case 1:return c.trys.push([1,9,,10]),[4,s.a.signIn(e,t)];case 2:return i=c.sent(),p.debug(i),i.challengeName!==a.b.SMSMFA&&i.challengeName!==a.b.SoftwareTokenMFA?[3,3]:(p.debug("confirm user with "+i.challengeName),n(a.a.ConfirmSignIn,i),[3,8]);case 3:return i.challengeName!==a.b.NewPasswordRequired?[3,4]:(p.debug("require new password",i.challengeParam),n(a.a.ResetPassword,i),[3,8]);case 4:return i.challengeName!==a.b.MFASetup?[3,5]:(p.debug("TOTP setup",i.challengeParam),n(a.a.TOTPSetup,i),[3,8]);case 5:return i.challengeName===a.b.CustomChallenge&&i.challengeParam&&"true"===i.challengeParam.trigger?(p.debug("custom challenge",i.challengeParam),n(a.a.CustomConfirmSignIn,i),[3,8]):[3,6];case 6:return[4,f(i,n)];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:return"UserNotConfirmedException"===(o=c.sent()).code?(p.debug("the user is not confirmed"),n(a.a.ConfirmSignUp,{username:e})):"PasswordResetRequiredException"===o.code?(p.debug("the user requires a new password"),n(a.a.ForgotPassword,{username:e})):"InvalidParameterException"===o.code&&""===t?(p.debug("Password cannot be empty"),o.message=u.a.EMPTY_PASSWORD):o.message===u.a.EMPTY_USERNAME&&(r===a.d.email&&(o.message=u.a.EMPTY_EMAIL),r===a.d.phone_number&&(o.message=u.a.EMPTY_PHONE)),Object(h.a)(o),[3,10];case 10:return[2]}}))}))},b=function(e){return e instanceof o.e}}}]);
//# sourceMappingURL=6.8630a3e0.chunk.js.map