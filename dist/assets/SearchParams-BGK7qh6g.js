var b=Object.defineProperty;var v=(t,s,a)=>s in t?b(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a;var x=(t,s,a)=>(v(t,typeof s!="symbol"?s+"":s,a),a);import{j as e,c as f,r as m,A as S,L as $}from"./index-7CK7RqAi.js";import{u as j}from"./useQuery-YwY03q2M.js";const L=async({queryKey:t})=>{const[,s]=t;return s?(await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${s}`)).json():[]},N=t=>j(["breeds",t],L),P=t=>{const{name:s,animal:a,breed:i,images:o,location:n,id:l}=t;let c="http://pets-images.dev-apis.com/pets/none.jpg";return o.length&&(c=o[0]),e.jsxs(f,{to:`/details/${l}`,className:"pet",children:[e.jsx("div",{className:"image-container",children:e.jsx("img",{src:c,alt:s})}),e.jsxs("div",{className:"info",children:[e.jsx("h1",{children:s}),e.jsx("h2",{children:`${a} — ${i} — ${n}`})]})]})},E=({pets:t})=>e.jsxs("div",{className:"search",children:[!t.length&&e.jsx("h1",{children:"No Pets Found"}),t&&t.map(s=>e.jsx(P,{animal:s.animal,name:s.name,breed:s.breed,images:s.images,location:`${s.city}, ${s.state}`,id:s.id},s.id))]}),F=async({queryKey:t})=>{const[,{animal:s,location:a,breed:i}]=t;return(await fetch(`http://pets-v2.dev-apis.com/pets?animal=${s}&location=${a}&breed=${i}`)).json()},w=t=>j(["search-pets",t],F);class A extends m.Component{constructor(){super(...arguments);x(this,"state",{hasError:!1,error:null,errorInfo:null})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(a,i){this.setState({error:a,errorInfo:i})}render(){return this.state.hasError?e.jsxs("div",{children:[e.jsx("h2",{children:"Something went wrong!"}),e.jsx("p",{children:this.state.error&&this.state.error.toString()})]}):this.props.children}}const C=["bird","cat","dog","rabbit","reptile"],I=()=>{var c,h;const[t,s]=m.useState({location:"",animal:"",breed:""}),a=N(t.animal);let i=((c=a==null?void 0:a.data)==null?void 0:c.breeds)??[];const[o]=m.useContext(S),n=w(t),l=((h=n==null?void 0:n.data)==null?void 0:h.pets)??[];return e.jsxs("div",{className:"search-params",children:[e.jsxs("form",{onSubmit:r=>{r.preventDefault();const d=new FormData(r.target);console.log(r.target);const p=d.get("animal"),u=d.get("location"),g=d.get("breed");s({animal:p,location:u,breed:g})},children:[o&&e.jsx("div",{className:"pet image-container",children:e.jsx("img",{src:o.images[0],alt:o.name})}),e.jsxs("label",{htmlFor:"location",children:["Location",e.jsx("input",{id:"location",placeholder:"Location",name:"location"})]}),e.jsxs("label",{htmlFor:"animal",children:["Animal",e.jsxs("select",{id:"animal",name:"animal",onChange:r=>{s({...t,animal:r.target.value,breed:""})},children:[e.jsx("option",{}),C.map(r=>e.jsx("option",{value:r,children:r},r))]})]}),e.jsxs("label",{htmlFor:"breed",children:["Breed",e.jsxs("select",{disabled:!i.length,id:"breed",name:"breed",children:[e.jsx("option",{}),i.map(r=>e.jsx("option",{value:r,children:r},r))]})]}),e.jsx("button",{children:"Submit"})]}),n.isLoading&&e.jsx("div",{className:"search loader-container",children:e.jsx($,{})}),n.isError&&e.jsx("span",{children:n.error}),n.data&&e.jsx(A,{children:e.jsx(E,{pets:l})})]})};export{I as default};