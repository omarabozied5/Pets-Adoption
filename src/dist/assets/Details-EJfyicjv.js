var u=Object.defineProperty;var h=(a,e,t)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var l=(a,e,t)=>(h(a,typeof e!="symbol"?e+"":e,t),t);import{r as c,j as s,a as p,u as x,b as j,A as v,L as g}from"./index-7CK7RqAi.js";import{u as f}from"./useQuery-YwY03q2M.js";const C=async({queryKey:a})=>{const[,e]=a;return(await fetch(`http://pets-v2.dev-apis.com/pets?id=${e}`)).json()},b=a=>f(["pet",a],C);class m extends c.Component{constructor(){super(...arguments);l(this,"state",{active:0})}render(){const{active:t}=this.state,{images:n}=this.props;return s.jsxs("div",{className:"carousel",children:[s.jsx("img",{src:n[t],alt:"animal"}),s.jsx("div",{className:"carousel-smaller",children:n.map((i,r)=>s.jsx("img",{src:i,className:r===t?"active":"",alt:"animal thumbnail","data-index":r,onClick:o=>this.setState({active:+o.target.dataset.index})},i))})]})}}l(m,"defaultProps",{images:["http://pets-images.dev-apis.com/pets/none.jpg"]});const N=({children:a})=>{const e=c.useRef(null);return e.current||(e.current=document.createElement("div")),c.useEffect(()=>{const t=document.getElementById("modal");return t.appendChild(e.current),()=>t.removeChild(e.current)},[]),p.createPortal(a,e.current)},$=()=>{var d;const{id:a}=x(),e=b(a),t=j();let n=(d=e==null?void 0:e.data)==null?void 0:d.pets[0];const[i,r]=c.useState(!1),[,o]=c.useContext(v);return s.jsxs("div",{className:"details",children:[e.isLoading&&s.jsx("div",{className:"loader-container",children:s.jsx(g,{})}),e.isError&&s.jsx("span",{children:e.error.message}),e.data&&s.jsxs("div",{children:[s.jsx(m,{images:n.images}),s.jsx("h1",{children:n.name}),s.jsx("h2",{children:`${n.animal} — ${n.breed} — ${n.city}, ${n.state}`}),s.jsxs("button",{onClick:()=>r(!0),children:["Adopt ",n.name]}),s.jsx("p",{children:n.description}),s.jsx("button",{onClick:()=>{t("/")},children:"Back"}),i&&s.jsxs(N,{children:[s.jsxs("h1",{children:["Would you like to adopt me ",n.name]}),s.jsxs("div",{className:"buttons",children:[s.jsx("button",{onClick:()=>{o(n),t("/")},children:"Yes"}),s.jsx("button",{onClick:()=>{r(!1)},children:"No"})]})]})]})]})};export{$ as default};
