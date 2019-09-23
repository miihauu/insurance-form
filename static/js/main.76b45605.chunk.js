(window["webpackJsonpinsurance-form"]=window["webpackJsonpinsurance-form"]||[]).push([[0],{56:function(e,a,r){e.exports=r(68)},68:function(e,a,r){"use strict";r.r(a);var n=r(0),t=r.n(n),c=r(7),l=r.n(c),o=r(41),d=r(28),u=r(17),i=r(43),s=r(96),p=r(98),f=r(102),m=Object(f.a)((function(e){return{header:{flexGrow:1,height:"230px",padding:0,backgroundColor:"#f5f5f5",borderRadius:"0 0 50% 50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"#0a2c48"}}})),g=function(){var e=m();return t.a.createElement(t.a.Fragment,null,t.a.createElement(s.a,{className:e.header},t.a.createElement(p.a,{variant:"h6"},"Zadanie rekrutacyjne")))},E=r(10),y=r(48),b=(r(69),r(101)),C=r(103),F=Object(f.a)((function(){return{textfield:{width:"100%"},input:{backgroundColor:"#eeeeee","&.Mui-disabled":{backgroundColor:"#fafafa"}}}})),h=function(e){var a=e.handleChangeBrand,r=e.carBrands,n=e.selectedCarBrand,c=(e.isLoading,F());return t.a.createElement(t.a.Fragment,null,t.a.createElement(b.a,{select:!0,label:"Marka",margin:"normal",variant:"filled",className:c.textfield,onChange:a("carBrand"),value:n,InputProps:{className:c.input}},r.map((function(e){return t.a.createElement(C.a,{key:e.make_name,value:e.make_name,className:c.menuItem},e.make_name)}))))},T=Object(f.a)((function(){return{textfield:{width:"100%"},input:{backgroundColor:"#eeeeee","&.Mui-disabled":{backgroundColor:"#fafafa"}}}})),B=function(e){var a=e.handleChangeModel,r=e.carModels,n=e.selectedCarModel,c=e.isOpen,l=(e.isLoading,T());return t.a.createElement(t.a.Fragment,null,t.a.createElement(b.a,{select:!0,disabled:!c,label:"Model",margin:"normal",variant:"filled",className:l.textfield,onChange:a("carModel"),value:n,InputProps:{className:l.input}},r&&r.map((function(e){return t.a.createElement(C.a,{key:e.model_name,value:e.model_name,className:l.menuItem},e.model_name)}))))},O=Object(f.a)((function(){return{textfield:{width:"100%"},input:{backgroundColor:"#eeeeee","&.Mui-disabled":{backgroundColor:"#fafafa"}}}})),M=function(e){var a=e.handleChangeFuelType,r=e.fuelTypes,n=e.selectedFuelType,c=e.isOpen,l=(e.isLoading,O());return t.a.createElement(t.a.Fragment,null,t.a.createElement(b.a,{select:!0,disabled:!c,label:"Typ paliwa",margin:"normal",variant:"filled",onChange:a("fuelType"),value:n,className:l.textfield,InputProps:{className:l.input}},r&&r.map((function(e){return t.a.createElement(C.a,{key:e.fuel_name,value:e.fuel_name,className:l.menuItem},e.fuel_name)}))))},_=r(100),j=r(47),v=r.n(j),w=Object(f.a)((function(){return{button:{margin:"20px 0",backgroundColor:"#ffcc00",width:"100%",borderRadius:"20px",display:"flex",justifyContent:"space-between",paddingLeft:"1.5rem",paddingRight:"1.5rem","&:hover":{backgroundColor:"#f9a825",borderColor:"#f9a825"}}}})),x=function(e){var a=e.isOpen,r=e.carBrand,n=e.carModel,c=e.buttonText,l=w();return t.a.createElement(t.a.Fragment,null,t.a.createElement(_.a,{variant:"contained",className:l.button,disabled:!a,href:"https://www.mfind.pl/ubezpieczenie-oc-ac/kalkulator-oc-ac?make_name=".concat(r,"&model_name=").concat(n)},c,t.a.createElement(v.a,null)))},D=r(99),S=Object(f.a)((function(e){return{summaryForm:{flexGrow:1,padding:10,margin:"20px 0",backgroundColor:"#ffecb3",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",color:"#0a2c48"}}})),k=function(e){var a=e.carBrand,r=e.carModel,n=e.fuelType,c=e.isOpen,l=S();return t.a.createElement(t.a.Fragment,null,c&&t.a.createElement(D.a,{className:l.summaryForm},t.a.createElement(p.a,{variant:"subtitle2"},"Wybrana marka: ",a),t.a.createElement(p.a,{variant:"subtitle2"},"Wybrany model: ",r),t.a.createElement(p.a,{variant:"subtitle2"},"Typ paliwa: ",n)))};function I(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}var P=Object(f.a)((function(){return{content:{flexGrow:1,height:"60%",width:"100%",marginTop:"20px"}}})),L=Object(d.b)((function(e){return{carBrands:e.cars.carBrands,carModels:e.cars.carModels,fuelTypes:e.cars.carFuelType,textFieldCarModelsOpen:e.cars.carModelsTextFieldEnabled,textFieldFuelTypeOpen:e.cars.carFuelTypeTextFieldEnabled,loadingBrands:e.cars.loadingBrands,loadingModels:e.cars.loadingModels,loadingCarFuelType:e.cars.loadingCarFuelType}}),(function(e){return{getCarBrandsBegin:function(){e({type:"FETCH_BRANDS_BEGIN"})},getCarBrandsSucceed:function(a){e(function(e){return{type:"FETCH_BRANDS_SUCCEED",payload:{carBrands:e}}}(a))},getCarBrandsFailed:function(a){e(function(e){return{type:"FETCH_BRANDS_FAILED",payload:{err:e}}}(a))},getCarModelsBegin:function(){e({type:"FETCH_MODELS_BEGIN"})},getCarModelsSucceed:function(a){e({type:"FETCH_MODELS_SUCCEED",payload:{carModels:a}})},getCarModelsFailed:function(a){e(function(e){return{type:"FETCH_MODELS_FAILED",payload:{err:e}}}(a))},getCarFuelTypeBegin:function(){e({type:"FETCH_FUEL_TYPE_BEGIN"})},getCarFuelTypeSucceed:function(a){e(function(e){return{type:"FETCH_FUEL_TYPE_SUCCEED",payload:{fuelType:e}}}(a))},getCarFuelTypeFailed:function(a){e(function(e){return{type:"FETCH_FUEL_TYPE_FAILED",payload:{err:e}}}(a))}}}))((function(e){var a=e.getCarBrandsBegin,r=e.getCarBrandsSucceed,c=e.getCarBrandsFailed,l=e.getCarModelsBegin,o=e.getCarModelsSucceed,d=e.getCarModelsFailed,u=e.getCarFuelTypeBegin,i=e.getCarFuelTypeSucceed,p=e.getCarFuelTypeFailed,f=e.carBrands,m=e.carModels,g=e.fuelTypes,b=e.textFieldCarModelsOpen,C=e.textFieldFuelTypeOpen,F=e.loadingBrands,T=e.loadingModels,O=e.loadingCarFuelType,_=e.API_KEY,j=e.API_URL,v=P();Object(n.useEffect)((function(){a(),fetch("https://cors-anywhere.herokuapp.com/".concat(j),{method:"GET",headers:new Headers({Authorization:"Basic ".concat(_)})}).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){c(e)}))}),[]);var w=Object(n.useState)({carBrand:null,carModel:null,fuelType:null}),D=Object(y.a)(w,2),S=D[0],L=D[1];Object(n.useEffect)((function(){var e;S.carBrand&&(e=S.carBrand,l(),fetch("https://cors-anywhere.herokuapp.com/".concat(j,"/").concat(e,"/models"),{method:"GET",headers:new Headers({Authorization:"Basic ".concat(_)})}).then((function(e){return e.json()})).then((function(e){o(e)})).catch((function(e){d(e)})))}),[S.carBrand]),Object(n.useEffect)((function(){var e,a;S.carBrand&&S.carModel&&(e=S.carBrand,a=S.carModel,u(),fetch("https://cors-anywhere.herokuapp.com/".concat(j,"/").concat(e,"/models/").concat(a,"/fuels/"),{method:"GET",headers:new Headers({Authorization:"Basic ".concat(_)})}).then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){p(e)})))}),[S.carModel]),Object(n.useEffect)((function(){S.carBrand&&S.carModel&&(localStorage.setItem("carBrand",S.carBrand),localStorage.setItem("carModel",S.carModel))}),[S.carBrand,S.carModel]),Object(n.useEffect)((function(){localStorage&&L({carBrand:localStorage.getItem("carBrand"),carModel:localStorage.getItem("carModel")})}),[]);var N=function(e){return function(a){L(function(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?I(r,!0).forEach((function(a){Object(E.a)(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(r).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}({},S,Object(E.a)({},e,a.target.value)))}};return t.a.createElement(t.a.Fragment,null,t.a.createElement(s.a,{className:v.content},t.a.createElement(h,{handleChangeBrand:N,carBrands:f,selectedCarBrand:S.carBrand,isLoading:F}),t.a.createElement(B,{handleChangeModel:N,carModels:m,selectedCarModel:S.carModel,isOpen:b,isLoading:T}),t.a.createElement(M,{handleChangeFuelType:N,fuelTypes:g,selectedFuelType:S.fuelType,isOpen:C,isLoading:O}),t.a.createElement(k,{carBrand:S.carBrand,carModel:S.carModel,fuelType:S.fuelType,isOpen:S.carBrand&&S.carModel&&S.fuelType}),t.a.createElement(x,{isOpen:S.carModel&&S.fuelType,carBrand:S.carBrand,carModel:S.carModel,buttonText:"OBLICZ SK\u0141ADK\u0118"})))})),N=r(104),H="YXV0a2FfYXBpOmF1dGthX2FwaV8yMDE5",A="https://api-dev.mfind.pl/cars",G=Object(f.a)((function(){return{root:{backgroundColor:"#fff",height:"auto",border:"1px solid #eeeeee",padding:0,paddingBottom:"20px",maxWidth:370,fontFamily:"Roboto"},content:{flexGrow:1,height:"60%",width:"100%",marginTop:"20px"}}}));var U=function(){var e=G();return t.a.createElement(t.a.Fragment,null,t.a.createElement(N.a,null),t.a.createElement(s.a,{container:!0,className:e.root},t.a.createElement(g,{headerStyle:e.header}),t.a.createElement(L,{API_URL:A,API_KEY:H})))};function R(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?R(r,!0).forEach((function(a){Object(E.a)(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(r).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}var z={carBrands:[],loadingBrands:!1,carModels:[],loadingModels:!1,carModelsTextFieldEnabled:!1,carFuelType:[],loadingCarFuelType:!1,carFuelTypeTextFieldEnabled:!1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_BRANDS_BEGIN":return Y({},e,{loadingBrands:!0,error:null});case"FETCH_BRANDS_SUCCEED":return Y({},e,{loadingBrands:!1,carBrands:a.payload.carBrands});case"FETCH_BRANDS_FAILED":return Y({},e,{loadingBrands:!1,error:a.payload.error,carBrands:[]});case"FETCH_MODELS_BEGIN":return Y({},e,{loadingModels:!0,error:null});case"FETCH_MODELS_SUCCEED":return Y({},e,{loadingModels:!1,carModelsTextFieldEnabled:!0,carModels:a.payload.carModels});case"FETCH_MODELS_FAILED":return Y({},e,{loadingModels:!1,error:a.payload.error,carModels:[]});case"FETCH_FUEL_TYPE_BEGIN":return Y({},e,{loadingCarFuelType:!0,error:null});case"FETCH_FUEL_TYPE_SUCCEED":return Y({},e,{loadingCarFuelType:!1,carFuelTypeTextFieldEnabled:!0,carFuelType:a.payload.fuelType});case"FETCH_FUEL_TYPE_FAILED":return Y({},e,{loadingCarFuelType:!1,error:a.payload.error,carFuelType:[]});default:return e}},W=Object(u.combineReducers)({cars:K}),X=Object(u.createStore)(W,Object(i.composeWithDevTools)(Object(u.applyMiddleware)(o.a)));l.a.render(t.a.createElement(d.a,{store:X},t.a.createElement(U,null)),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.76b45605.chunk.js.map