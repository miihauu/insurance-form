(window["webpackJsonpinsurance-form"]=window["webpackJsonpinsurance-form"]||[]).push([[0],{133:function(e,a,r){e.exports=r(236)},236:function(e,a,r){"use strict";r.r(a);var n=r(0),t=r.n(n),o=r(11),c=r.n(o),l=r(118),d=r(62),i=r(35),u=r(120),s=(r(237),r(142),r(264)),p=r(266),f=r(270),m=Object(f.a)((function(e){return{header:{flexGrow:1,height:"230px",padding:0,backgroundColor:"#f5f5f5",borderRadius:"0 0 50% 50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"#0a2c48"}}})),g=function(){var e=m();return t.a.createElement(t.a.Fragment,null,t.a.createElement(s.a,{className:e.header},t.a.createElement(p.a,{variant:"h6"},"Zadanie rekrutacyjne")))},E=r(15),y=r(125),b=r(269),C=r(273),F=Object(f.a)((function(){return{textfield:{width:"100%"},input:function(e){return{backgroundColor:e.mainColor,"&.Mui-disabled":{backgroundColor:e.disabledColor}}}}})),h=function(e){var a=e.handleChangeBrand,r=e.carBrands,n=e.selectedCarBrand,o=(e.isLoading,e.color),c=F(o);return t.a.createElement(t.a.Fragment,null,t.a.createElement(b.a,{select:!0,label:"Marka",margin:"normal",variant:"filled",className:"".concat(c.textfield," ").concat(o),onChange:a("carBrand"),value:n,InputProps:{className:c.input}},r.map((function(e){return t.a.createElement(C.a,{key:e.make_name,value:e.make_name,className:c.menuItem},e.make_name)}))))},T=Object(f.a)((function(){return{textfield:{width:"100%"},input:function(e){return{backgroundColor:e.mainColor,"&.Mui-disabled":{backgroundColor:e.disabledColor}}}}})),B=function(e){var a=e.handleChangeModel,r=e.carModels,n=e.selectedCarModel,o=e.isOpen,c=(e.isLoading,e.color),l=T(c);return t.a.createElement(t.a.Fragment,null,t.a.createElement(b.a,{select:!0,disabled:!o,label:"Model",margin:"normal",variant:"filled",className:l.textfield,onChange:a("carModel"),value:n,InputProps:{className:l.input}},r&&r.map((function(e){return t.a.createElement(C.a,{key:e.model_name,value:e.model_name,className:l.menuItem},e.model_name)}))))},O=Object(f.a)((function(){return{textfield:{width:"100%"},input:function(e){return{backgroundColor:e.mainColor,"&.Mui-disabled":{backgroundColor:e.disabledColor}}}}})),M=function(e){var a=e.handleChangeFuelType,r=e.fuelTypes,n=e.selectedFuelType,o=e.isOpen,c=(e.isLoading,e.color),l=O(c);return t.a.createElement(t.a.Fragment,null,t.a.createElement(b.a,{select:!0,disabled:!o,label:"Typ paliwa",margin:"normal",variant:"filled",onChange:a("fuelType"),value:n,className:l.textfield,InputProps:{className:l.input}},r&&r.map((function(e){return t.a.createElement(C.a,{key:e.fuel_name,value:e.fuel_name,className:l.menuItem},e.fuel_name)}))))},_=r(268),j=r(124),v=r.n(j),w=Object(f.a)((function(){return{button:{margin:"20px 0",backgroundColor:"#ffcc00",width:"100%",borderRadius:"20px",display:"flex",justifyContent:"space-between",paddingLeft:"1.5rem",paddingRight:"1.5rem","&:hover":{backgroundColor:"#f9a825",borderColor:"#f9a825"}}}})),x=function(e){var a=e.isOpen,r=e.carBrand,n=e.carModel,o=e.buttonText,c=e.URL,l=w();return t.a.createElement(t.a.Fragment,null,t.a.createElement(_.a,{variant:"contained",className:l.button,disabled:!a,href:"".concat(c,"?make_name=").concat(r,"&model_name=").concat(n)},o,t.a.createElement(v.a,null)))},D="YXV0a2FfYXBpOmF1dGthX2FwaV8yMDE5",S="https://api-dev.mfind.pl/cars",k=r(267),L=Object(f.a)((function(e){return{summaryForm:{flexGrow:1,padding:10,margin:"20px 0",backgroundColor:"#ffecb3",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",color:"#0a2c48"}}})),N=function(e){var a=e.carBrand,r=e.carModel,n=e.fuelType,o=e.isOpen,c=L();return t.a.createElement(t.a.Fragment,null,o&&t.a.createElement(k.a,{className:c.summaryForm},t.a.createElement(p.a,{variant:"subtitle2"},"Wybrana marka: ",a),t.a.createElement(p.a,{variant:"subtitle2"},"Wybrany model: ",r),t.a.createElement(p.a,{variant:"subtitle2"},"Typ paliwa: ",n)))};function P(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}var I=Object(f.a)((function(){return{content:{flexGrow:1,height:"60%",width:"100%",marginTop:"20px"}}})),H=Object(d.b)((function(e){return{carBrands:e.cars.carBrands,carModels:e.cars.carModels,fuelTypes:e.cars.carFuelType,textFieldCarModelsOpen:e.cars.carModelsTextFieldEnabled,textFieldFuelTypeOpen:e.cars.carFuelTypeTextFieldEnabled,loadingBrands:e.cars.loadingBrands,loadingModels:e.cars.loadingModels,loadingCarFuelType:e.cars.loadingCarFuelType}}),(function(e){return{getCarBrandsBegin:function(){e({type:"FETCH_BRANDS_BEGIN"})},getCarBrandsSucceed:function(a){e(function(e){return{type:"FETCH_BRANDS_SUCCEED",payload:{carBrands:e}}}(a))},getCarBrandsFailed:function(a){e(function(e){return{type:"FETCH_BRANDS_FAILED",payload:{err:e}}}(a))},getCarModelsBegin:function(){e({type:"FETCH_MODELS_BEGIN"})},getCarModelsSucceed:function(a){e({type:"FETCH_MODELS_SUCCEED",payload:{carModels:a}})},getCarModelsFailed:function(a){e(function(e){return{type:"FETCH_MODELS_FAILED",payload:{err:e}}}(a))},getCarFuelTypeBegin:function(){e({type:"FETCH_FUEL_TYPE_BEGIN"})},getCarFuelTypeSucceed:function(a){e(function(e){return{type:"FETCH_FUEL_TYPE_SUCCEED",payload:{fuelType:e}}}(a))},getCarFuelTypeFailed:function(a){e(function(e){return{type:"FETCH_FUEL_TYPE_FAILED",payload:{err:e}}}(a))}}}))((function(e){var a=e.getCarBrandsBegin,r=e.getCarBrandsSucceed,o=e.getCarBrandsFailed,c=e.getCarModelsBegin,l=e.getCarModelsSucceed,d=e.getCarModelsFailed,i=e.getCarFuelTypeBegin,u=e.getCarFuelTypeSucceed,p=e.getCarFuelTypeFailed,f=e.carBrands,m=e.carModels,g=e.fuelTypes,b=e.textFieldCarModelsOpen,C=e.textFieldFuelTypeOpen,F=e.loadingBrands,T=e.loadingModels,O=e.loadingCarFuelType,_=e.textFieldColor,j=I();Object(n.useEffect)((function(){a(),fetch("https://cors-anywhere.herokuapp.com/".concat(S),{method:"GET",headers:new Headers({Authorization:"Basic ".concat(D)})}).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){o(e)}))}),[]);var v=Object(n.useState)({carBrand:null,carModel:null,fuelType:null}),w=Object(y.a)(v,2),k=w[0],L=w[1];Object(n.useEffect)((function(){var e;k.carBrand&&(e=k.carBrand,c(),fetch("https://cors-anywhere.herokuapp.com/".concat(S,"/").concat(e,"/models"),{method:"GET",headers:new Headers({Authorization:"Basic ".concat(D)})}).then((function(e){return e.json()})).then((function(e){l(e)})).catch((function(e){d(e)})))}),[k.carBrand]),Object(n.useEffect)((function(){var e,a;k.carBrand&&k.carModel&&(e=k.carBrand,a=k.carModel,i(),fetch("https://cors-anywhere.herokuapp.com/".concat(S,"/").concat(e,"/models/").concat(a,"/fuels/"),{method:"GET",headers:new Headers({Authorization:"Basic ".concat(D)})}).then((function(e){return e.json()})).then((function(e){u(e)})).catch((function(e){p(e)})))}),[k.carModel]),Object(n.useEffect)((function(){k.carBrand&&localStorage.setItem("carBrand",k.carBrand)}),[k.carBrand]),Object(n.useEffect)((function(){localStorage&&L({carBrand:localStorage.getItem("carBrand")})}),[localStorage]);var H=function(e){return function(a){L(function(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?P(r,!0).forEach((function(a){Object(E.a)(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(r).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}({},k,Object(E.a)({},e,a.target.value)))}};return t.a.createElement(t.a.Fragment,null,t.a.createElement(s.a,{className:j.content},t.a.createElement(h,{handleChangeBrand:H,carBrands:f,selectedCarBrand:k.carBrand,isLoading:F,color:_}),t.a.createElement(B,{handleChangeModel:H,carModels:m,selectedCarModel:k.carModel,isOpen:b,isLoading:T,color:_}),t.a.createElement(M,{handleChangeFuelType:H,fuelTypes:g,selectedFuelType:k.fuelType,isOpen:C,isLoading:O,color:_}),t.a.createElement(N,{carBrand:k.carBrand,carModel:k.carModel,fuelType:k.fuelType,isOpen:k.carBrand&&k.carModel&&k.fuelType}),t.a.createElement(x,{isOpen:k.carModel&&k.fuelType,carBrand:k.carBrand,carModel:k.carModel,URL:"https://www.mfind.pl/ubezpieczenie-oc-ac/kalkulator-oc-ac",buttonText:"OBLICZ SK\u0141ADK\u0118"})))})),A=r(272),G=Object(f.a)((function(){return{root:{backgroundColor:"#fff",height:"auto",border:"1px solid #eeeeee",padding:0,paddingBottom:"20px",maxWidth:370,fontFamily:"Roboto"},content:{flexGrow:1,height:"60%",width:"100%",marginTop:"20px"}}}));var U=function(){var e=G();return t.a.createElement(t.a.Fragment,null,t.a.createElement(A.a,null),t.a.createElement(s.a,{container:!0,className:e.root},t.a.createElement(g,{headerStyle:e.header}),t.a.createElement(H,{textFieldColor:{mainColor:"#eeeeee",disabledColor:"#fafafa"}})))};function R(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?R(r,!0).forEach((function(a){Object(E.a)(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(r).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}var z={carBrands:[],loadingBrands:!1,carModels:[],loadingModels:!1,carModelsTextFieldEnabled:!1,carFuelType:[],loadingCarFuelType:!1,carFuelTypeTextFieldEnabled:!1},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_BRANDS_BEGIN":return Y({},e,{loadingBrands:!0,error:null});case"FETCH_BRANDS_SUCCEED":return Y({},e,{loadingBrands:!1,carBrands:a.payload.carBrands});case"FETCH_BRANDS_FAILED":return Y({},e,{loadingBrands:!1,error:a.payload.error,carBrands:[]});case"FETCH_MODELS_BEGIN":return Y({},e,{loadingModels:!0,error:null});case"FETCH_MODELS_SUCCEED":return Y({},e,{loadingModels:!1,carModelsTextFieldEnabled:!0,carModels:a.payload.carModels});case"FETCH_MODELS_FAILED":return Y({},e,{loadingModels:!1,error:a.payload.error,carModels:[]});case"FETCH_FUEL_TYPE_BEGIN":return Y({},e,{loadingCarFuelType:!0,error:null});case"FETCH_FUEL_TYPE_SUCCEED":return Y({},e,{loadingCarFuelType:!1,carFuelTypeTextFieldEnabled:!0,carFuelType:a.payload.fuelType});case"FETCH_FUEL_TYPE_FAILED":return Y({},e,{loadingCarFuelType:!1,error:a.payload.error,carFuelType:[]});default:return e}},X=Object(i.combineReducers)({cars:W}),J=Object(i.createStore)(X,Object(u.composeWithDevTools)(Object(i.applyMiddleware)(l.a)));c.a.render(t.a.createElement(d.a,{store:J},t.a.createElement(U,null)),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.bb2e2a0d.chunk.js.map