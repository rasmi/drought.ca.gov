class e extends window.HTMLElement{constructor(){if(super(),document.querySelector("api-viewer")){let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","./src/css/index.css"),document.querySelector("api-viewer").shadowRoot.appendChild(e)}}connectedCallback(){if(this.classList.add("prog-enhanced"),this.expandTarget=this.querySelector(".accordion-card-container"),this.expandButton=this.querySelector(".accordion-card-header"),this.expandButton&&this.expandButton.addEventListener("click",this.listen.bind(this)),this.activateButton=this.querySelector(".accordion-card-header"),this.eventType=this.dataset.eventType?this.dataset.eventType:"click","true"===this.activateButton.getAttribute("aria-expanded")){this.triggerAccordionClick();let t=this.querySelectorAll(".accordion-card-container a"),n=this.querySelectorAll(".accordion-card-container button");for(var e=0;e<t.length;e++)t[e].removeAttribute("tabindex");for(e=0;e<n.length;e++)n[e].removeAttribute("tabindex")}else{let t=this.querySelectorAll(".accordion-card-container a"),n=this.querySelectorAll(".accordion-card-container button");for(e=0;e<t.length;e++)t[e].setAttribute("tabindex","-1");for(e=0;e<n.length;e++)n[e].setAttribute("tabindex","-1")}}listen(){this.cardBodyHeight||(this.cardBodyHeight=this.querySelector(".card-body").clientHeight+24),this.expandTarget.clientHeight>0?this.closeAccordion():this.expandAccordion()}triggerAccordionClick(){const e=new MouseEvent(this.eventType,{view:window,bubbles:!0,cancelable:!0});this.expandButton.dispatchEvent(e)}closeAccordion(){this.expandTarget.style.height="0px",this.expandTarget.setAttribute("aria-hidden","true"),this.querySelector(".accordion-card-header").classList.remove("accordion-alpha-open"),this.activateButton.setAttribute("aria-expanded","false");let e=this.querySelectorAll(".accordion-card-container a"),t=this.querySelectorAll(".accordion-card-container button");for(var n=0;n<e.length;n++)e[n].setAttribute("tabindex","-1");for(n=0;n<t.length;n++)t[n].setAttribute("tabindex","-1")}expandAccordion(){this.expandTarget.style.height=this.cardBodyHeight+"px",this.expandTarget.setAttribute("aria-hidden","false"),this.querySelector(".accordion-card-header").classList.add("accordion-alpha-open"),this.querySelector(".accordion-card-container").classList.remove("collapsed"),this.activateButton.setAttribute("aria-expanded","true");let e=this.querySelectorAll(".accordion-card-container a"),t=this.querySelectorAll(".accordion-card-container button");for(var n=0;n<e.length;n++)e[n].removeAttribute("tabindex");for(n=0;n<t.length;n++)t[n].removeAttribute("tabindex")}}window.customElements.define("cagov-accordion",e);const t=document.createElement("style");t.textContent="/* accordion component specific classes */\ncagov-accordion .cagov-accordion-card {\n  border-radius: .3rem !important;\n  margin-bottom: 0;\n  min-height: 3rem;\n  margin-top: .5rem;\n  border: solid 1px #ededef !important;\n}\n\ncagov-accordion .accordion-card-container {\n  display: block;\n  overflow: hidden;\n}\n\ncagov-accordion button.accordion-card-header {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  padding: 0 0 0 1rem;\n  background-clip: border-box;\n  background-color: #EDEDEF;\n  border: none;\n  position: relative;\n  width: 100%;\n  line-height: 3rem;\n}\n\ncagov-accordion.prog-enhanced button.accordion-card-header {\n  cursor:pointer;\n}\n\ncagov-accordion .accordion-title {\n  text-align: left;\n  margin-bottom: 0;\n  color: var(--primary-color, #064E66);\n  margin-right: auto;\n  width: 90%;\n  padding: 0 0.5rem 0 0 !important;\n  font-size: 1.125rem;\n  font-weight: bold;\n}\n\ncagov-accordion.prog-enhanced .accordion-card-container {\n  height: 0px;\n  transition: height 0.3s ease;\n}\ncagov-accordion.prog-enhanced .accordion-card-container .card-body {\n  padding-left: 1rem;\n  margin-top: 8px;\n}\n\ncagov-accordion.prog-enhanced .accordion-card-container .card-body ul {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\ncagov-accordion .collapsed {\n  display: block;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.accordion-title h4,\n.accordion-title h3,\n.accordion-title h2 {\n  padding: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  font-size: 1.2rem !important;\n  font-weight: 700;\n  color: var(--primary-color, #064E66);\n  text-align: left !important;\n}\n\nbutton.accordion-card-header:hover {\n  background-color: var(--hover-color, #F9F9FA);\n}\nbutton.accordion-card-header:hover .accordion-title {\n  text-decoration: underline;\n}\nbutton.accordion-card-header:hover .accordion-title:hover {\n  text-decoration: underline;\n}\n\nbutton.accordion-card-header:focus {\n  outline-offset: -2px;\n}\n\n.accordion-icon svg line {\n  stroke-width: 4px;  \n}\n\ncagov-accordion.prog-enhanced .accordion-alpha .plus-minus {\n  width: 2.125rem;\n  height: 2.125rem;\n  border: none;\n  overflow: hidden;\n  margin-left: 1rem;\n  color: var(--primary-color, #064E66);\n  align-self: flex-start;\n  margin-top: 8px;\n}\n\n.prog-enhanced .accordion-alpha .plus-minus svg {\n  fill: var(--primary-color, #064E66);\n  width: 25px;\n  height: 25px;\n}\n\n.prog-enhanced .accordion-alpha-open cagov-plus .accordion-icon {\n  display: none !important;\n}\n.prog-enhanced .accordion-alpha-open cagov-minus .accordion-icon {\n  display: block !important;\n}\n\n@media only screen and (max-width: 767px) {\n  .accordion-alpha-open + .accordion-card-container {\n    height: 100% !important;\n  }\n}\n\n/*# sourceMappingURL=index.css.map */\n",document.querySelector("head").appendChild(t);class n extends window.HTMLElement{static get observedAttributes(){return["data-hide-after","data-label"]}constructor(){super();this.options=Object.assign({},{parentSelector:"cagov-back-to-top",onLoadSelector:"body",scrollBottomThreshold:10,scrollAfterHeight:400},{label:this.dataset.label||"Back to top",hideAfter:Number(this.dataset.hideAfter)||7e3}),this.state={lastScrollTop:0,timer:null}}connectedCallback(){document.querySelector(this.options.onLoadSelector).onload=this.addGoToTopButton(this.options),window.addEventListener("scroll",this.debounce((()=>this.scrollToTopHandler(this.options,this.state)),200),!1),window.onscroll=this.debounce((e=>this.checkScrolledToBottom(e,this.state)),200)}checkScrolledToBottom(e,t){let{timer:n}=t;var o=document.querySelector(".back-to-top");window.innerHeight+window.scrollY>=document.body.offsetHeight&&(o.classList.add("is-visible"),o.removeAttribute("aria-hidden"),o.removeAttribute("tabindex"),clearTimeout(n))}debounce(e,t,n){var o;return function(){var a=this,i=arguments,r=function(){o=null,n||e.apply(a,i)},c=n&&!o;clearTimeout(o),o=setTimeout(r,t),c&&e.apply(a,i)}}attributeChangedCallback(e,t,n){"data-hide-after"===e&&(this.options.hideAfter=Number(n)),"data-label"===e&&(this.options.label=n,null!==document.querySelector(".back-to-top")&&(document.querySelector(".back-to-top").innerHTML=this.options.label))}scrollToTopHandler(e,t){let n=document.querySelector(this.options.parentSelector),{lastScrollTop:o,timer:a}=t;var i=document.querySelector(".back-to-top"),r=window.pageYOffset||document.documentElement.scrollTop;r>o?(i.classList.remove("is-visible"),i.setAttribute("aria-hidden","true"),i.setAttribute("tabindex","-1")):n.scrollTop>=e.scrollAfterHeight||document.documentElement.scrollTop>=e.scrollAfterHeight?(null!==a&&clearTimeout(a),i.classList.add("is-visible"),i.removeAttribute("aria-hidden"),i.removeAttribute("tabindex"),a=setTimeout((function(){i.classList.remove("is-visible"),i.setAttribute("aria-hidden","true"),i.setAttribute("tabindex","-1")}),e.hideAfter)):(i.classList.remove("is-visible"),i.setAttribute("aria-hidden","true"),i.setAttribute("tabindex","-1")),t.lastScrollTop=r<=0?0:r}addStyle(e){const t=document.createElement("span");t.setAttribute("aria-hidden","true"),t.innerHTML='\n      <svg version="1.1" x="0px" y="0px" width="21px" height="16px" viewBox="0 0 21 16" style="enable-background:new 0 0 21 16;" xml:space="preserve"><path d="M5.2,10.8l5.3-5.3l5.3,5.3c0.4,0.4,0.9,0.4,1.3,0c0.4-0.4,0.4-0.9,0-1.3l-5.9-5.9c-0.2-0.2-0.4-0.3-0.6-0.3S10,3.5,9.8,3.6 L3.9,9.5c-0.4,0.4-0.4,0.9,0,1.3C4.3,11.2,4.8,11.2,5.2,10.8z"/></svg> \n      ',e.insertBefore(t,e.firstChild)}addGoToTopButton(e){let t=document.querySelector(e.parentSelector);const n=document.createElement("button");n.classList.add("back-to-top"),n.setAttribute("aria-hidden","true"),n.setAttribute("tabindex","-1");const o=document.createTextNode(e.label);n.appendChild(o),this.addStyle(n),t.append(n),n.addEventListener("click",(e=>this.goToTopFunction(e)))}goToTopFunction(e){document.querySelector(this.options.onLoadSelector).scrollTop=0,window.scroll({top:0,behavior:"smooth"})}}window.customElements.define("cagov-back-to-top",n);class o extends window.HTMLElement{connectedCallback(){this.type="wordpress",function(){function e(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,o=e.HTMLElement||e.Element,a=468,i={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||s,scrollIntoView:o.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,c=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):i.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?i.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var e=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var n=function(e){for(;e!==t.body&&!1===(o=d(n=e,"Y")&&u(n,"Y"),a=d(n,"X")&&u(n,"X"),o||a);)e=e.parentNode||e.host;var n,o,a;return e}(this),o=n.getBoundingClientRect(),a=this.getBoundingClientRect();n!==t.body?(p.call(this,n,n.scrollLeft+a.left-o.left,n.scrollTop+a.top-o.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function d(e,t){return"Y"===t?e.clientHeight+c<e.scrollHeight:"X"===t?e.clientWidth+c<e.scrollWidth:void 0}function u(t,n){var o=e.getComputedStyle(t,null)["overflow"+n];return"auto"===o||"scroll"===o}function h(t){var n,o,i,c,s=(r()-t.startTime)/a;c=s=s>1?1:s,n=.5*(1-Math.cos(Math.PI*c)),o=t.startX+(t.x-t.startX)*n,i=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,o,i),o===t.x&&i===t.y||e.requestAnimationFrame(h.bind(e,t))}function p(n,o,a){var c,l,d,u,p=r();n===t.body?(c=e,l=e.scrollX||e.pageXOffset,d=e.scrollY||e.pageYOffset,u=i.scroll):(c=n,l=n.scrollLeft,d=n.scrollTop,u=s),h({scrollable:c,method:u,startTime:p,startX:l,startY:d,x:o,y:a})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:e}:e()}(),"wordpress"===this.type&&document.addEventListener("DOMContentLoaded",(()=>this.buildContentNavigation()))}buildContentNavigation(){let e=this.getHeaderTags(),t=null;null!==e&&(t=this.dataset.label||"On this page");let n=null;null!==e&&(n=`<div class="label">${t}</div> ${e}`),this.template({content:n},"wordpress")}template(e,t){return null!=e&&null!==e.content&&"wordpress"===t&&(this.innerHTML=`${e.content}`),document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(t){let n=decodeURI(e.getAttribute("href"));try{let e=document.querySelector(n);if(null!==e){let t=e.getBoundingClientRect();window.matchMedia("(prefers-reduced-motion)").matches||window.scrollTo({behavior:"smooth",left:t.left,top:t.top-200}),history.pushState(null,null,n)}}catch(e){console.error(e)}t.preventDefault()}))})),null}renderNoContent(){this.innerHTML=""}getHeaderTags(){let e=this.dataset.selector;this.dataset.editor,this.dataset.label,this.dataset.callback;for(var t=["h2"],n=0;n<t.length;n++)if(null!=e){let t=document.querySelector(e);if(null!==t){return this.outliner(t)}}return null}outliner(e){let t=e.querySelectorAll("h2"),n="";return null!=t&&t.length>0?(t.forEach((e=>{let t=e.getAttribute("id"),o=e.innerHTML,a=e.innerHTML.toLowerCase().trim().replace(/ /g,"-").replace(/\(|\)|\!|\"|\#|\$|\%|\&|\'|\*|\+|\,|\.|\/|\:|\;|\<|\=|\>|\?|\@|\[|\]|\\|\^|\`|\{|\||\|\}|\~/g,"").replace(/a-zA-ZÃ€-Ã–Ã™-Ã¶Ã¹-Ã¿Ä€-Å¾á¸€-á»¿0-9\u00A0-\u017F/g,"");null!=t&&(a=t),n+=`<li><a href="#${encodeURI(a)}">${o}</a></li>`,null==t&&(t=a,e.setAttribute("id",t))})),`<ul>${n}</ul>`):null}}void 0===customElements.get("cagov-content-navigation")&&window.customElements.define("cagov-content-navigation",o);class a extends window.HTMLElement{connectedCallback(){document.querySelector(".cagov-nav.open-menu").addEventListener("click",this.toggleMainMenu.bind(this));const e=document.querySelector(".cagov-nav.mobile-search .search-btn");e&&e.addEventListener("click",(()=>{document.querySelector(".search-container--small").classList.toggle("hidden-search"),document.querySelector(".search-container--small .site-search input").focus()})),this.expansionListeners(),document.addEventListener("keydown",this.escapeMainMenu.bind(this)),document.body.addEventListener("click",this.bodyClick.bind(this)),this.highlightCurrentPage()}toggleMainMenu(){document.querySelector(".cagov-nav.hamburger").classList.contains("is-active")?this.closeMainMenu():this.openMainMenu()}highlightCurrentPage(){this.querySelectorAll("a.expanded-menu-dropdown-link").forEach((e=>{e.href===window.location.href&&e.classList.add("current-page-highlight")}))}openMainMenu(){document.querySelector(".mobile-icons").classList.add("display-menu"),this.classList.add("display-menu"),document.querySelector(".cagov-nav.hamburger").classList.add("is-active"),document.querySelector(".cagov-nav.menu-trigger").classList.add("is-fixed"),document.querySelector(".cagov-nav.menu-trigger").setAttribute("aria-expanded","true");const e=document.querySelector(".cagov-nav.menu-trigger-label");e.innerHTML=e.getAttribute("data-closelabel")}closeMainMenu(){document.querySelector(".mobile-icons").classList.remove("display-menu"),this.classList.remove("display-menu"),document.querySelector(".cagov-nav.hamburger").classList.remove("is-active"),document.querySelector(".cagov-nav.menu-trigger").classList.remove("is-fixed"),document.querySelector(".cagov-nav.menu-trigger").setAttribute("aria-expanded","false");const e=document.querySelector(".cagov-nav.menu-trigger-label");e.innerHTML=e.getAttribute("data-openlabel")}escapeMainMenu(e){27===e.keyCode&&this.closeAllMenus()}bodyClick(e){e.target.closest("cagov-navoverlay")||this.closeAllMenus()}closeAllMenus(){this.querySelectorAll(".js-cagov-navoverlay-expandable").forEach((e=>{e.querySelector(".expanded-menu-section").classList.remove("expanded"),e.setAttribute("aria-expanded","false");const t=e.querySelector(".expanded-menu-dropdown");if(t){t.setAttribute("aria-hidden","true");t.querySelectorAll("a").forEach((e=>{e.setAttribute("tabindex","-1")}))}}))}expansionListeners(){this.querySelectorAll(".js-cagov-navoverlay-expandable").forEach((e=>{const t=e.querySelector(".expanded-menu-section");if(t){const n=t.querySelector(".expanded-menu-dropdown");n&&(n.setAttribute("aria-hidden","true"),e.setAttribute("aria-expanded","false"))}const n=this;e.addEventListener("click",(function(t){"A"!==t.target.nodeName&&t.preventDefault();const o=this.querySelector(".expanded-menu-section");if(o)if(o.classList.contains("expanded"))n.closeAllMenus();else{n.closeAllMenus(),o.classList.add("expanded"),e.setAttribute("aria-expanded","true");const t=this.querySelector(".expanded-menu-dropdown");if(t){t.setAttribute("aria-hidden","false");t.querySelectorAll("a").forEach((e=>{e.removeAttribute("tabindex")}))}}}))}))}}window.customElements.define("cagov-navoverlay",a);class i extends window.HTMLElement{constructor(){if(super(),document.querySelector("api-viewer")){let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","./src/css/index.css"),document.querySelector("api-viewer").shadowRoot.appendChild(e)}}connectedCallback(){let e=this.dataset.question?this.dataset.question:"Did you find what you were looking for?",t=this.dataset.yes?this.dataset.yes:"Yes",n=this.dataset.no?this.dataset.no:"No",o=this.dataset.commentPrompt?this.dataset.commentPrompt:"What was the problem?";this.positiveCommentPrompt=this.dataset.positiveCommentPrompt?this.dataset.positiveCommentPrompt:"Great! What were you looking for today?";let a=this.dataset.thanksFeedback?this.dataset.thanksFeedback:"Thank you for your feedback!",i=this.dataset.thanksComments?this.dataset.thanksComments:"Thank you for your comments!",r=this.dataset.submit?this.dataset.submit:"Submit";!this.dataset.characterLimit||this.dataset.characterLimit,!this.dataset.anythingToAdd||this.dataset.anythingToAdd,!this.dataset.anyOtherFeedback||this.dataset.anyOtherFeedback,this.endpointUrl=this.dataset.endpointUrl;let c=function(e,t,n,o,a,i,r){return`\n  <section aria-label="feedback">\n  <div class="feedback-form cagov-stack">\n    <div class="js-feedback-form feedback-form-question">\n      <h2 class="feedback-form-label" id="feedback-rating">${e}</h2>\n      <button class="feedback-form-button js-feedback-yes feedback-yes" id="feedback-yes">${t}</button>\n      <button class="feedback-form-button js-feedback-no" id="feedback-no">${n}</button>\n    </div>\n          \n    <div class="feedback-form-thanks js-feedback-thanks" role="alert">${a}</div>\n          \n    <div class="feedback-form-add">\n      <label class="feedback-form-label js-feedback-field-label" for="add-feedback">${o}</label>\n      <div class="feedback-form-add-grid">\n        <textarea name="add-feedback" class="js-add-feedback feedback-form-textarea" id="add-feedback" rows="1"></textarea>\n        <button class="feedback-form-button js-feedback-submit" type="submit" id="feedback-submit">${r}</button>\n      </div>\n    </div>\n\n    <div class="feedback-form-thanks feedback-thanks-add" role="alert">${i}</div>\n  </div>\n  </section>`}(e,t,n,o,a,i,r);this.innerHTML=c,this.applyListeners()}applyListeners(){this.wasHelpful="",this.querySelector(".js-add-feedback").addEventListener("focus",(e=>{this.querySelector(".js-feedback-submit").style.display="block"}));let e=this.querySelector(".js-add-feedback");e.addEventListener("keyup",(function(t){e.value.length>15?e.setAttribute("rows","3"):e.setAttribute("rows","1")})),e.addEventListener("blur",(t=>{0!==e.value.length&&(this.querySelector(".js-feedback-submit").style.display="block")})),this.querySelector(".js-feedback-yes").addEventListener("click",(e=>{this.querySelector(".js-feedback-field-label").innerHTML=this.positiveCommentPrompt,this.querySelector(".js-feedback-form").style.display="none",this.querySelector(".feedback-form-add").style.display="block",this.wasHelpful="yes",this.dispatchEvent(new CustomEvent("ratedPage",{detail:this.wasHelpful}))})),this.querySelector(".js-feedback-no").addEventListener("click",(e=>{this.querySelector(".js-feedback-form").style.display="none",this.querySelector(".feedback-form-add").style.display="block",this.wasHelpful="no",this.dispatchEvent(new CustomEvent("ratedPage",{detail:this.wasHelpful}))})),this.querySelector(".js-feedback-submit").addEventListener("click",(t=>{this.querySelector(".feedback-form-add").style.display="none",this.querySelector(".feedback-thanks-add").style.display="block";let n={};n.url=window.location.href,n.helpful=this.wasHelpful,n.comments=e.value,n.userAgent=navigator.userAgent,fetch(this.endpointUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>e.json())).then((e=>console.log(e)))}))}}window.customElements.define("cagov-feedback",i);const r=document.createElement("style");r.textContent='cagov-feedback {\n  width: 100%;\n}\ncagov-feedback .feedback-form {\n  background: var(--primary-dark-color, #003484);\n  padding: 1rem;\n  border-radius: 0.3125rem;\n  max-width: var(--w-lg, 1176px);\n  margin: 0 auto;\n}\ncagov-feedback .feedback-form-question {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\ncagov-feedback .feedback-form-label {\n  color: #fff;\n  background-color: var(--primary-dark-color, #003484);\n  font-size: 1.125rem;\n  display: block;\n  margin-right: 1rem;\n  transition: 0.3s color cubic-bezier(0.57, 0.2, 0.21, 0.89);\n  line-height: 3rem;\n  width: auto;\n}\n@media (max-width: 768px) {\n  cagov-feedback .feedback-form-label {\n    line-height: unset;\n    margin-bottom: 1rem;\n  }\n}\ncagov-feedback .feedback-form-button {\n  padding: 1rem;\n  color: var(--primary-dark-color, #003484);\n  border: none;\n  border-radius: 0.3rem;\n  transition: 0.3s background cubic-bezier(0.57, 0.2, 0.21, 0.89);\n  cursor: pointer;\n  margin: 0 0.5rem 0 0;\n  display: inline !important;\n  /* defensive overrides */\n  position: relative;\n  text-transform: none;\n  top: auto;\n  right: auto;\n  background: #fff;\n}\ncagov-feedback .feedback-form-button:hover {\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);\n  text-decoration: underline;\n}\ncagov-feedback .feedback-form-button:focus {\n  box-shadow: 0 0 0 2px #fff;\n}\ncagov-feedback .feedback-form-button .feedback-yes {\n  margin-right: 1rem;\n}\ncagov-feedback .feedback-form-add {\n  padding-top: 0;\n  display: none;\n}\n@media (max-width: 768px) {\n  cagov-feedback .feedback-form-add {\n    text-align: left;\n    padding-top: 0;\n  }\n}\ncagov-feedback .feedback-form-add-grid {\n  position: relative;\n  margin-top: 1rem;\n  display: inline-flex;\n  flex-flow: column;\n  align-items: flex-start;\n}\n@media (max-width: 768px) {\n  cagov-feedback .feedback-form-add-grid {\n    display: block;\n  }\n}\ncagov-feedback .feedback-form-textarea {\n  width: 100%;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  font-family: "Roboto", sans-serif;\n  color: var(--primary-dark-color, #003484);\n  max-width: 90%;\n  height: 127px;\n  width: 600px;\n}\ncagov-feedback .feedback-form-thanks {\n  display: none;\n  color: #fff;\n}\ncagov-feedback .feedback-form-error {\n  position: relative;\n  top: 100%;\n  left: 0;\n  display: none;\n  font-weight: 300;\n  text-align: left;\n}\n\n/*# sourceMappingURL=index.css.map */\n',document.querySelector("head").appendChild(r);class c extends window.HTMLElement{connectedCallback(){this.innerHTML='<div class="accordion-icon" aria-hidden="true">\n        <svg viewbox="0 0 25 25">\n            <title>Minus</title>\n            <line x1="6" y1="12.5" x2="19" y2="12.5"  fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />\n        </svg>\n      </div>'}}function s(e,t){return`<li class="cagov-pagination__item">\n    <a\n      href="javascript:void(0);"\n      class="cagov-pagination__button"\n      aria-label="${e} ${t}"\n      data-page-num="${t}"\n    >\n      ${t}\n    </a>\n  </li>`}window.customElements.define("cagov-minus",c);class l extends window.HTMLElement{constructor(){if(super(),document.querySelector("api-viewer")){let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","./src/css/index.css"),document.querySelector("api-viewer").shadowRoot.appendChild(e)}}connectedCallback(){this.currentPage=parseInt(this.dataset.currentPage?this.dataset.currentPage:"1"),this.render()}render(){let e=this.dataset.previous?this.dataset.previous:"&#60;",t=this.dataset.next?this.dataset.next:"&#62;",n=this.dataset.page?this.dataset.page:"Page";this.totalPages=this.dataset.totalPages?this.dataset.totalPages:"1";let o=function(e,t,n,o,a){return`<nav aria-label="Pagination" class="cagov-pagination">\n    <ul class="cagov-pagination__list">\n      <li class="cagov-pagination__item">\n        <a\n          href="javascript:void(0);"\n          class="cagov-pagination__link cagov-pagination__previous-page"\n          aria-label="${t} ${n}"\n        >\n          <span class="cagov-pagination__link-text ${o>2?"":"cagov-pagination__link-inactive"}"> ${t} </span>\n        </a>\n      </li>\n      ${o>2?s(n,1):""}\n\n      ${o>3?'<li\n    class="cagov-pagination__item cagov-pagination__overflow"\n    role="presentation"\n  >\n    <span> … </span>\n  </li>':""}\n\n      ${o>1?s(n,o-1):""}\n\n      <li class="cagov-pagination__item cagov-pagination-current">\n        <a\n          href="javascript:void(0);"\n          class="cagov-pagination__button"\n          aria-label="Page ${o}"\n          aria-current="page"\n          data-page-num="${o}"\n        >\n          ${o}\n        </a>\n      </li>\n\n      ${o<a?s(n,o+1):""}\n\n      ${o<a-3?'<li\n    class="cagov-pagination__item cagov-pagination__overflow"\n    role="presentation"\n  >\n    <span> … </span>\n  </li>':""}\n\n      ${o<a-1?s(n,a):""}\n\n      <li class="cagov-pagination__item">\n        <a\n          href="javascript:void(0);"\n          class="cagov-pagination__link cagov-pagination__next-page"\n          aria-label="${e} ${n}"\n        >\n          <span class="cagov-pagination__link-text ${o>a-1?"cagov-pagination__link-inactive":""}"> ${e} </span>\n        </a>\n      </li>\n    </ul>\n  </nav>`}(t,e,n,this.currentPage,this.totalPages);this.innerHTML=o,this.applyListeners()}static get observedAttributes(){return["data-current-page","data-total-pages"]}attributeChangedCallback(e,t,n){"data-current-page"===e&&(this.currentPage=parseInt(n),this.render())}applyListeners(){this.querySelectorAll(".cagov-pagination__button").forEach(function(e){e.addEventListener("click",(e=>{this.currentPage=parseInt(e.target.dataset.pageNum),this.dispatchEvent(new CustomEvent("paginationClick",{detail:this.currentPage})),this.dataset.currentPage=this.currentPage}))}.bind(this)),this.querySelector(".cagov-pagination__previous-page").addEventListener("click",(e=>{e.target.classList.contains("cagov-pagination__link-inactive")||(this.currentPage--,this.currentPage<1&&(this.currentPage=1),this.dispatchEvent(new CustomEvent("paginationClick",{detail:this.currentPage})),this.dataset.currentPage=this.currentPage)})),this.querySelector(".cagov-pagination__next-page").addEventListener("click",(e=>{e.target.classList.contains("cagov-pagination__link-inactive")||(this.currentPage++,this.currentPage>this.totalPages&&(this.currentPage=this.totalPages),this.dispatchEvent(new CustomEvent("paginationClick",{detail:this.currentPage})),this.dataset.currentPage=this.currentPage)}))}}window.customElements.define("cagov-pagination",l);const d=document.createElement("style");d.textContent="cagov-pagination .cagov-pagination__list {\n  list-style: none;\n  margin: 0;\n  padding: 0 !important;\n  display: flex;\n}\ncagov-pagination .cagov-pagination__item {\n  border: 1px solid #EDEDEF;\n  border-radius: 0.3rem;\n  margin: 0.25rem;\n}\ncagov-pagination .cagov-pagination__item a {\n  padding: 0.75rem 0.875rem;\n  display: inline-block;\n  color: var(--primary-color, #064E66);\n  text-decoration: none;\n}\ncagov-pagination .cagov-pagination__item:hover {\n  background: #F9F9FA;\n}\ncagov-pagination .cagov-pagination__item:hover a {\n  text-decoration: underline;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current {\n  background-color: #064E66;\n  background-color: var(--primary-color, #064E66);\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination-current a {\n  color: #fff;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination__overflow {\n  border: none;\n  padding: 0.875rem 0;\n}\ncagov-pagination .cagov-pagination__item.cagov-pagination__overflow:hover {\n  background: inherit;\n}\ncagov-pagination .cagov-pagination__link-inactive {\n  color: grey;\n  border-color: grey;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=index.css.map */\n",document.querySelector("head").appendChild(d),function(){const e='<span class="pdf-link-icon" aria-hidden="true"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="25.1px" height="13.6px" viewBox="0 0 25.1 13.6" style="enable-background:new 0 0 25.1 13.6;" xml:space="preserve"><path d="M11.7,9.9h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1h-1.5c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C11.4,9.9,11.6,9.9,11.7,9.9L11.7,9.9z M12.3,5h0.9c1,0,1.8,0.8,1.8,1.8s-0.8,1.8-1.8,1.8h-0.9V5z"/><path d="M17.8,9.9c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4V7.5h1.2c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6h-1.2V5h2.1c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6h-2.8c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C17.5,9.9,17.7,9.9,17.8,9.9L17.8,9.9z"/><path d="M6.2,9.9c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4V8.1H8c1.2,0,2.1-1,2.1-2.1c0-1.2-1-2.1-2.1-2.1H6.2c-0.3,0-0.6,0.3-0.6,0.6v4.9c0,0.2,0.1,0.3,0.2,0.4C5.9,9.9,6,9.9,6.2,9.9L6.2,9.9z M9,6c0,0.3-0.1,0.5-0.2,0.7C8.5,6.8,8.3,6.9,8,6.9H6.8V5H8c0.2,0,0.5,0.1,0.7,0.2C8.9,5.5,9,5.7,9,6L9,6z"/></svg></span><span class="sr-only"> (this is a pdf file)</span>',t=document.querySelectorAll("a[href*='.pdf']");for(let n=0;n<t.length;n+=1)t[n].innerHTML+=e,-1!==t[n].innerHTML.indexOf("*PDF (this is a pdf file)*")&&(t[n].innerHTML+=e.replace(/PDF (this is a pdf file)]/g,""))}(),document.querySelectorAll("main a, .agency-footer a, footer a").forEach((e=>{const t=e.href.indexOf("#")>-1,n=e.href.indexOf("localhost")>-1,o=e.href.indexOf("@")>-1,a=e;!1!==function(e){return window.location.host.indexOf(e.host)>-1}(a)||t||o||n||(a.innerHTML+='<span class="external-link-icon" aria-hidden="true"><svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><path d="M1.4,13.3c0-1.9,0-3.8,0-5.7c0-2.3,1.3-3.6,3.7-3.7c2,0,3.9,0,5.9,0c0.9,0,1.4,0.4,1.4,1.1c0,0.7-0.5,1.1-1.5,1.1 c-2,0-3.9,0-5.9,0c-1.1,0-1.4,0.3-1.4,1.5c0,3.8,0,7.6,0,11.3c0,1.1,0.4,1.5,1.5,1.5c3.8,0,7.6,0,11.3,0c1.1,0,1.4-0.3,1.4-1.5 c0-1.9,0-3.9,0-5.8c0-1,0.4-1.5,1.1-1.5c0.7,0,1.1,0.5,1.1,1.5c0,2,0,4,0,6.1c0,2-1.4,3.4-3.4,3.4c-4,0-7.9,0-11.9,0 c-2.1,0-3.4-1.4-3.4-3.4C1.4,17.2,1.4,15.2,1.4,13.3L1.4,13.3z"/><path d="M19.6,2.8c-1.3,0-2.5,0-3.6,0c-0.9,0-1.4-0.4-1.4-1.1c0.1-0.8,0.6-1.1,1.3-1.1c2.1,0,4.2,0,6.2,0c0.8,0,1.2,0.5,1.2,1.3 c0,2,0,4.1,0,6.2c0,0.9-0.4,1.4-1.1,1.4c-0.7,0-1.1-0.5-1.1-1.4c0-1.1,0-2.3,0-3.6c-0.3,0.3-0.6,0.5-0.8,0.7c-3,3-6,6-8.9,8.9 c-0.2,0.2-0.3,0.3-0.5,0.5c-0.5,0.5-1.1,0.5-1.6,0c-0.5-0.5-0.4-1,0-1.5c0.1-0.2,0.3-0.3,0.5-0.5c3-3,6-6,8.9-8.9 C19,3.4,19.2,3.2,19.6,2.8L19.6,2.8z"/></svg></span>')}));class u extends window.HTMLElement{connectedCallback(){this.innerHTML='<div class="accordion-icon" aria-hidden="true">\n        <svg viewbox="0 0 25 25">\n            <title>Plus</title>\n            <line x1="6" y1="12.5" x2="19" y2="12.5" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />\n            <line y1="6" x1="12.5" y2="19" x2="12.5" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />\n        </svg>\n      </div>'}}window.customElements.define("cagov-plus",u);class h extends window.HTMLElement{connectedCallback(){this.type="wordpress",this.message=this.dataset.message||"",this.icon=this.dataset.icon||"","wordpress"===this.type&&document.addEventListener("DOMContentLoaded",(()=>{this.template({message:this.message,icon:this.icon},"wordpress"),document.querySelector("cagov-page-alert .close-button").addEventListener("click",(e=>{document.querySelector("cagov-page-alert").style.display="none"}))}))}template(e,t){return null!=e&&null!==e.content&&"wordpress"===t&&(this.innerHTML=`<div class="cagov-page-alert cagov-stack"><div class="icon"><span class="${this.icon}"></span></div>\n        <div class="body">${this.message}</div>\n        <div class="close-button"><span class="ca-gov-icon-close-line"></span></div></div>`),null}}void 0===customElements.get("cagov-page-alert")&&window.customElements.define("cagov-page-alert",h);var p="September 23, 2021",g="/assets/img/usdm-assets/20210921_usdm_excerpt.png";class m extends window.HTMLElement{connectedCallback(){console.log("Loading Drought Map"),this.type="wordpress","wordpress"===this.type&&document.addEventListener("DOMContentLoaded",(()=>{this.template({},"wordpress")}))}template(e,t){return null!=e&&null!==e.content&&"wordpress"===t&&(this.innerHTML=`<div class="cagov-drought-map">\n                <div class="map-label"><h2>Map released: ${p}</h2></div>\n                <div class="drought-map-container">\n                  <div class="drought-map-image"><a href="https://droughtmonitor.unl.edu/"><img src="${g}" /></a></div>\n                  <div class="legend-label"><h3>Intensity</h3></div>\n                  <div class="drought-map-legend">\n                      <div class="col-1">\n                          <div class="legend"><span class="intensity intensity-ldnone"> </span>None</div>\n                          <div class="legend"><span class="intensity intensity-ld0"> </span>D0 (Abnormally dry)</div>\n                          <div class="legend"><span class="intensity intensity-ld1"> </span>D1 (Moderate drought)</div>\n                      </div>\n                      <div class="col-2">\n                          <div class="legend"><span class="intensity intensity-ld2"> </span>D2 (Severe drought)</div>\n                          <div class="legend"><span class="intensity intensity-ld3"> </span>D3 (Extreme drought)</div>\n                          <div class="legend"><span class="intensity intensity-ld4"> </span>D4 (Exceptional drought)</div>\n                      </div>\n                      <div class="col-3">\n                          <div class="legend"><span class="intensity intensity-ldnodata"> </span>No data</div>\n                      </div>\n                  </div>\n                  <div class="map-link"><a href="https://droughtmonitor.unl.edu/">View details on US Drought Monitor</a></div>\n                </div>\n            </div>`),null}}function v(e,t,n="click"){"undefined"!=typeof ga?(ga("send","event",n,e,t),ga("tracker2.send","event",n,e,t)):setTimeout((function(){v(e,t,n)}),500)}void 0===customElements.get("cagov-drought-map")&&window.customElements.define("cagov-drought-map",m),window.onload=e=>{console.log("Setting up analytics"),document.querySelectorAll("cagov-accordion").forEach((e=>{e.addEventListener("click",(function(){this.querySelector(".accordion-title")&&v("accordion",this.querySelector(".accordion-title").textContent.trim())}))})),document.querySelectorAll("a").forEach((e=>{e.href.indexOf(window.location.hostname)>-1||e.href.indexOf("drought.ca.gov")>-1?e.href.indexOf(".pdf")>-1&&e.addEventListener("click",(function(){v("pdf",this.href.split(window.location.hostname)[1])})):e.addEventListener("click",(function(){v("offsite",this.href)}))}))};
