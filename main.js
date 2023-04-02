(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._isMyCard=e.owner._id===r,this._likesCount=e.likes.length,this._isMyLike=e.likes.some((function(t){return t._id===r})),this._userId=r,this.cardId=e._id,this._getTemplate(n),this._handleCardClick=o,this._handleToggleLike=i,this._handleDeleteCard=u}var n,r;return n=t,r=[{key:"_getTemplate",value:function(t){this._template=document.querySelector(t)}},{key:"_getCardTemplate",value:function(){this.card=this._template.content.cloneNode(!0),this._likeButton=this.card.querySelector(".location__like-button"),this._deleteButton=this.card.querySelector(".location__delete-button"),this._likesCountSpan=this.card.querySelector(".location__like-count")}},{key:"toggleLike",value:function(t){var e=this;this._likeButton.classList.toggle("location__like-button_active"),this._likesCount=t.length,this._isMyLike=t.some((function(t){return t._id===e._userId})),this._likesCountSpan.textContent=this._likesCount}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._handleToggleLike(t,t.cardId,t._isMyLike)})),this._image.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)})),this._isMyCard&&this._deleteButton.addEventListener("click",(function(e){t.card=e.target.closest(".location__card"),t._handleDeleteCard(t)}))}},{key:"_setLikeInfo",value:function(){this._likesCountSpan.textContent=this._likesCount,this._isMyLike&&this._likeButton.classList.add("location__like-button_active")}},{key:"getCard",value:function(){return this._getCardTemplate(),this._image=this.card.querySelector(".location__image"),this.card.querySelector(".location__title").textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._isMyCard||this._deleteButton.classList.add("location__delete-button_hidden"),this._setEventListeners(),this._setLikeInfo(),this.card}}],r&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=n,this._formElement=e,this._getInputFromForm(),this._getSaveButtonFromForm()}var e,n;return e=t,(n=[{key:"_getInputFromForm",value:function(){this._inputList=Array.from(this._formElement.querySelectorAll(this._config.popupInputSelector))}},{key:"_getSaveButtonFromForm",value:function(){this._saveButton=this._formElement.querySelector("#".concat(this._formElement.id,"-button"))}},{key:"_showInputError",value:function(t,e){t.classList.add(this._config.inputErrorClass),this._errorElement=this._formElement.querySelector("#".concat(t.id,"-error")),this._errorElement.textContent=e}},{key:"_hideInputError",value:function(t){t.classList.remove(this._config.inputErrorClass),this._errorElement=this._formElement.querySelector("#".concat(t.id,"-error")),this._errorElement.textContent=""}},{key:"_checkValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._saveButton.classList.add(this._config.saveButtonInactiveClass),this._saveButton.disabled=!0):(this._saveButton.classList.remove(this._config.saveButtonInactiveClass),this._saveButton.disabled=!1)}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkValidity(e),t._toggleButtonState()}))}))}},{key:"_setResetListeners",value:function(){var t=this;this._formElement.addEventListener("reset",(function(){setTimeout((function(){t._inputList.forEach((function(e){t._hideInputError(e)})),t._toggleButtonState()}),100)}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._setResetListeners()}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e){var n=e.nameProfileSelector,r=e.infoProfileSelector,o=e.avatarProfileSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameProfile=document.querySelector(n),this._infoProfile=document.querySelector(r),this._avatarProfile=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameProfile.textContent,info:this._infoProfile.textContent,avatar:this._avatarProfile.src}}},{key:"setUserInfo",value:function(t,e,n){this._nameProfile.textContent=t,this._infoProfile.textContent=e,this._avatarProfile.src=n}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function f(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var y=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_closePopupOnOverlayClick",(function(t){t.target.classList.contains("popup_opened")&&n.close()})),f(this,"_closePopupOnEscapeClick",(function(t){"Escape"===t.key&&n.close()})),this._popupId=e,this._getPopup()}var e,n;return e=t,(n=[{key:"_getPopup",value:function(){this._popup=document.querySelector(this._popupId),this._closeButton=this._popup.querySelector(".close-popup"),this._submitButton=this._popup.querySelector(".popup__confirm-button"),this._submitButton&&(this._defaultText=this._submitButton.textContent)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("mousedown",this._closePopupOnOverlayClick),document.removeEventListener("keydown",this._closePopupOnEscapeClick)}},{key:"_setCloseListeners",value:function(){document.addEventListener("mousedown",this._closePopupOnOverlayClick),document.addEventListener("keydown",this._closePopupOnEscapeClick)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),this._setCloseListeners()}},{key:"setEventListener",value:function(){var t=this;this._closeButton.addEventListener("click",(function(){t.close()}))}},{key:"renderLoading",value:function(t,e){this._submitButton&&(this._submitButton.textContent=t?e:this._defaultText)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},h.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(o){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._saveFormFunction=e,n._form=n._popup.getElementsByTagName("form")[0],n._saveButton=n._form.querySelector(".popup__confirm-button"),n._inputList=n._form.querySelectorAll("input"),n._inputValues={},n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList.forEach((function(e){var n=e.getAttribute("name");t._inputValues[n]=e.value})),this._inputValues}},{key:"setEventListener",value:function(){var t=this;h(b(u.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._saveFormFunction(t._getInputValues()),t.close()}))}},{key:"fillInFields",value:function(t){this._inputList.forEach((function(e){e.value=t[e.getAttribute("name")]}))}},{key:"close",value:function(){h(b(u.prototype),"close",this).call(this),this._form.reset()}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__zoom-image"),e._comment=e._popup.querySelector(".popup__comment"),e}return e=u,(n=[{key:"open",value:function(t,e){k(P(u.prototype),"open",this).call(this),this._image.src=e,this._comment.textContent=t,this._image.alt=t}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var L=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.reverse(),t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var T=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e,this._token=n}var e,n;return e=t,(n=[{key:"_sendRequest",value:function(t,e){return e.headers={authorization:this._token,"Content-Type":"application/json"},fetch(t,e).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getUserInfo",value:function(){return this._sendRequest(this._baseUrl+"/users/me",{})}},{key:"getInitialCards",value:function(){return this._sendRequest(this._baseUrl+"/cards",{})}},{key:"editProfile",value:function(t,e){return this._sendRequest(this._baseUrl+"/users/me",{method:"PATCH",body:JSON.stringify({name:t,about:e})})}},{key:"updateAvatar",value:function(t){return this._sendRequest(this._baseUrl+"/users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:t})})}},{key:"addCard",value:function(t,e){return this._sendRequest(this._baseUrl+"/cards",{method:"POST",body:JSON.stringify({name:t,link:e})})}},{key:"toggleLike",value:function(t,e){return e?this._sendRequest(this._baseUrl+"/cards/".concat(t,"/likes"),{method:"DELETE"}):this._sendRequest(this._baseUrl+"/cards/".concat(t,"/likes"),{method:"PUT"})}},{key:"deleteCard",value:function(t){return this._sendRequest(this._baseUrl+"/cards/".concat(t),{method:"DELETE"})}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(r);if(o){var n=U(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._cofirmFormFunction=e,n._form=n._popup.getElementsByTagName("form")[0],n._confirmButton=n._form.querySelector(".popup__confirmation"),n}return e=u,(n=[{key:"setEventListener",value:function(){var t=this;q(U(u.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._cofirmFormFunction(t._objectToDelete),t.close()}))}},{key:"open",value:function(t){q(U(u.prototype),"open",this).call(this),this._objectToDelete=t}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var D,M=document.querySelector(".profile__edit-button"),V=document.querySelector(".profile__add-button"),N=".place-template",z=document.querySelector(".profile__avatar"),J=new T("https://mesto.nomoreparties.co/v1/cohort-62","1c01ae86-354c-49a1-92cb-37fce79fdf70"),H=new c({nameProfileSelector:".profile__name",infoProfileSelector:".profile__description",avatarProfileSelector:".profile__avatar-image"}),$=J.getUserInfo();function G(t,e,n){J.toggleLike(e,n).then((function(e){t.toggleLike(e.likes)})).catch((function(t){console.log(t)}))}var K=new F("#popup-confirmation",(function(t){K.renderLoading(!0,"Удаление..."),J.deleteCard(t.cardId).then((function(){t.card.remove()})).catch((function(t){console.log(t)})).finally((function(){K.renderLoading(!1)}))}));function Q(t){K.open(t)}function W(t){return new n(t,N,D,ot,G,Q).getCard()}K.setEventListener();var X=new L((function(t){var e=W(t);X.addItem(e)}),".location__list"),Y=J.getInitialCards();Promise.all([$,Y]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];D=o._id,H.setUserInfo(o.name,o.about,o.avatar),X.renderItems(i)})).catch((function(t){console.log(t)}));var Z=new _("#popup-place",(function(t){Z.renderLoading(!0,"Создание..."),J.addCard(t["place-name"],t["place-link"]).then((function(t){var e=W(t);X.addItem(e)})).catch((function(t){console.log(t.message)})).finally((function(){Z.renderLoading(!1)}))}));V.addEventListener("click",(function(){Z.open()})),Z.setEventListener();var tt=new _("#popup-profile",(function(t){tt.renderLoading(!0,"Сохранение..."),J.editProfile(t["name-profile"],t["description-profile"]).then((function(){var e=H.getUserInfo();H.setUserInfo(t["name-profile"],t["description-profile"],e.avatar)})).catch((function(t){console.log(t.message)})).finally((function(){tt.renderLoading(!1)}))}));M.addEventListener("click",(function(){tt.open();var t=H.getUserInfo(),e={"name-profile":t.name,"description-profile":t.info};tt.fillInFields(e)})),tt.setEventListener();var et=new _("#popup-avatar",(function(t){et.renderLoading(!0,"Сохранение..."),J.updateAvatar(t["avatar-link"]).then((function(t){H.setUserInfo(t.name,t.about,t.avatar)})).catch((function(t){console.log(t.message)})).finally((function(){et.renderLoading(!1)}))}));et.setEventListener(),z.addEventListener("click",(function(){var t={"avatar-link":H.getUserInfo().avatar};et.fillInFields(t),et.open()}));var nt,rt=new E("#popup-zoom");function ot(t,e){rt.open(t,e)}rt.setEventListener(),nt={inputErrorClass:"popup__input_type_error",saveButtonInactiveClass:"popup__confirm-button_inactive",popupInputSelector:".popup__input"},Array.from(document.forms).filter((function(t){return t.id.includes("save")})).forEach((function(t){new i(t,nt).enableValidation()}))})();