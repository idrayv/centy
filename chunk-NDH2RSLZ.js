import{c as S}from"./chunk-BO5S2MU7.js";import{a as d,g as a,h as b,i as l}from"./chunk-ZHP57JWI.js";import{$ as u,C as m,T as g,W as o,aa as h,o as s,ra as y,yb as C}from"./chunk-4DWN4KFE.js";var j=(()=>{let e=class e{};e.type="[Currencies] Get Currencies";let r=e;return r})(),p=(()=>{let e=class e{constructor(i){this.payload=i}};e.type="[Currencies] Get Currencies Success";let r=e;return r})(),f=(()=>{let e=class e{};e.type="[Currencies] Get Currencies Error";let r=e;return r})();var I=(()=>{let e=class e{constructor(i){this.http=i,this.symbolsUrl=S.baseApiUrl+"currencies/symbols"}getCurrencies(){return this.http.get(this.symbolsUrl)}};e.\u0275fac=function(L){return new(L||e)(u(C))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var t,c=(t=class{constructor(e){this.currenciesService=e,this.destroyRef=h(y)}static getCurrencies(e){return e.currencies}static getIsLoading(e){return e.isLoading}getCurrencies({dispatch:e,patchState:n}){n({isLoading:!0}),this.currenciesService.getCurrencies().pipe(d(this.destroyRef),g(i=>e(new p({currencies:i}))),m(i=>e(new f))).subscribe()}getCurrenciesSuccess({patchState:e},{payload:n}){e({isLoading:!1,currencies:n.currencies})}getCurrenciesError({patchState:e}){e({isLoading:!1})}},t.\u0275fac=function(n){return new(n||t)(u(I))},t.\u0275prov=o({token:t,factory:t.\u0275fac}),t);s([a(j)],c.prototype,"getCurrencies",null);s([a(p)],c.prototype,"getCurrenciesSuccess",null);s([a(f)],c.prototype,"getCurrenciesError",null);s([l()],c,"getCurrencies",null);s([l()],c,"getIsLoading",null);c=s([b({name:"currenciesState",defaults:{currencies:[],isLoading:!1}})],c);export{j as a,c as b};
