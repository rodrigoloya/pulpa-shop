import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as N,a as h,u as C,c as S,t as $}from"./cartStore.DQm8CpS2.js";import{D as b}from"./js.cookie.C0BS3qSL.js";import{c as I}from"./utils.Dmkrq8gB.js";import{u as j}from"./index.DUGvRnrv.js";import{r as i}from"./index.2yJIXLcc.js";import{G as F}from"./iconBase.Blz05Vck.js";import{b as g,c as D,d as E}from"./index.DRwKiUZ5.js";import{b as O}from"./index.BlACm4Ui.js";function A(t){return F({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(t)}const m="mx-[1px] inline-block h-1 w-1 animate-blink rounded-md",p=({className:t})=>e.jsxs("span",{className:"inline-flex items-center",children:[e.jsx("span",{className:`${m} ${t}`}),e.jsx("span",{className:`${m} animation-delay-[200ms] ${t}`}),e.jsx("span",{className:`${m} animation-delay-[400ms] ${t}`})]}),x=({amount:t,className:a="",currencyCode:s="USD",currencyCodeClassName:o=""})=>{const l=new Intl.NumberFormat(void 0,{style:"currency",currency:s,currencyDisplay:"narrowSymbol"}).format(parseFloat(t)),n=`${a} ${o?"ml-1 inline":""}`.trim();return e.jsxs("p",{className:a,children:[l,e.jsx("span",{className:n,children:s})]})};function P({className:t}){return e.jsx("div",{className:"relative text-black transition-colors dark:border-neutral-700 dark:text-white",children:e.jsx(g,{className:`h-6 transition-all ease-in-out hover:scale-110 ${t||""}`})})}const q=({onClick:t,pending:a})=>e.jsx("button",{type:"submit",onClick:t,"aria-label":"Remove cart item","aria-disabled":a,className:`ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200 cursor-pointer ${a?"cursor-not-allowed px-0":""}`,children:a?e.jsx(p,{className:"bg-white"}):e.jsx(g,{className:"hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black"})}),z=({item:t})=>{const[a,s]=i.useState(!1),[o,l]=i.useState(""),n=async u=>{u.preventDefault(),s(!0);try{await N(t.id),await h(),l("Item removed")}catch(c){console.error("Error removing item:",c),l("Error removing item")}finally{s(!1)}};return e.jsxs("form",{onSubmit:n,children:[e.jsx(q,{onClick:()=>!a,pending:a}),e.jsx("p",{"aria-live":"polite",className:"sr-only",role:"status",children:o})]})},y=({item:t,type:a})=>{const[s,o]=i.useState(!1),[l,n]=i.useState(null),u=async c=>{c.preventDefault();const r=a==="plus"?t.quantity+1:t.quantity-1;if(!(r<1)){o(!0);try{await C({lineId:t.id,variantId:t.merchandise.id,quantity:r}),await h(),n("Quantity updated")}catch(d){console.error("Error updating item quantity:",d),n("Failed to update quantity")}finally{o(!1)}}};return e.jsxs("form",{onSubmit:u,children:[e.jsx("button",{type:"submit","aria-label":a==="plus"?"Increase item quantity":"Reduce item quantity","aria-disabled":s,disabled:s,className:`ease flex h-full min-w-[36px] max-w-[36px] items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ${a==="minus"?"ml-auto":""} ${s?"cursor-not-allowed opacity-50":""}`,children:s?e.jsx(p,{className:"bg-black dark:bg-white"}):a==="plus"?e.jsx(D,{className:"h-4 w-4 dark:text-neutral-500"}):e.jsx(E,{className:"h-4 w-4 dark:text-neutral-500"})}),e.jsx("p",{"aria-live":"polite",className:"sr-only",role:"status",children:l})]})},w=({className:t="",quantity:a})=>e.jsxs("div",{className:"relative text-xl text-text-dark hover:text-primary dark:border-darkmode-border dark:text-white",children:[e.jsx(O,{className:`dark:hover:text-darkmode-primary ${t}`}),a?e.jsx("div",{className:"bg-black text-white dark:bg-white dark:text-black text-xs rounded-full p-1 absolute -top-1 md:-top-2 -right-3 md:-right-4 w-5 h-5 flex items-center justify-center",children:a}):null]}),Y=()=>{const t=j(S),a=j($),[s,o]=i.useState(!0),[l,n]=i.useState(!1);i.useEffect(()=>{async function r(){try{await h()}catch(d){console.error("Failed to refresh cart:",d)}finally{o(!1)}}r()},[]);const u=()=>{n(!0),document.body.style.overflow="hidden"},c=()=>{n(!1),document.body.style.overflow=""};return s?e.jsx(p,{className:"bg-black dark:bg-white"}):t?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"cursor-pointer","aria-label":"Open cart",onClick:u,children:e.jsx(w,{quantity:a})}),e.jsx("div",{id:"cartOverlay",className:`fixed inset-0 bg-black opacity-50 z-40 transition-opacity ${l?"block":"hidden"}`,onClick:c}),e.jsx("div",{id:"cartDialog",className:`fixed inset-y-0 right-0 z-50 w-full md:w-[390px] transform transition-transform duration-300 ease-in-out ${l?"translate-x-0":"translate-x-full"}`,children:e.jsxs("div",{className:"h-fit flex flex-col border-l border-b drop-shadow-lg rounded-bl-md border-neutral-200 bg-body p-6 text-black dark:border-neutral-700 dark:bg-darkmode-body dark:text-white",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-lg font-semibold",children:"Your Cart"}),e.jsx("button",{"aria-label":"Close cart",onClick:c,children:e.jsx(P,{})})]}),e.jsx("div",{className:"w-full h-px absolute bg-dark dark:bg-light left-0 top-16"}),t.lines.length===0?e.jsxs("div",{className:"flex flex-col justify-center items-center space-y-6 my-auto",children:[e.jsx("div",{className:"md:mt-16",children:e.jsx(A,{size:76})}),e.jsx("p",{children:"Oops. Your Bag Is Empty."}),e.jsx("a",{href:"/products",className:"btn btn-primary w-full",children:"Don't Miss Out: Add Product"})]}):e.jsxs("div",{className:"flex h-full flex-col justify-between overflow-hidden p-1",children:[e.jsx("ul",{className:"flex-grow overflow-auto py-4",children:t.lines.map(r=>{const d={};r.merchandise.selectedOptions.forEach(({name:v,value:f})=>{f!==b&&(d[v.toLowerCase()]=f)});const k=I(`/products/${r.merchandise.product.handle}`,new URLSearchParams(d));return e.jsx("li",{className:"flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700",children:e.jsxs("div",{className:"relative flex w-full flex-row justify-between px-1 py-4",children:[e.jsx("div",{className:"absolute z-40 -mt-2 ml-[55px]",children:e.jsx(z,{item:r})}),e.jsxs("a",{href:k.toString(),className:"z-30 flex flex-row space-x-4",children:[e.jsx("div",{className:"relative h-16 w-16 overflow-hidden rounded-md border border-neutral-300 bg-neutral-300",children:e.jsx("img",{className:"h-full w-full object-cover",src:r.merchandise.product.featuredImage?.url||"/images/product_image404.jpg",alt:r.merchandise.product.featuredImage?.altText||r.merchandise.product.title,width:64,height:64})}),e.jsxs("div",{className:"flex flex-1 flex-col text-base",children:[e.jsx("span",{children:r.merchandise.product.title}),r.merchandise.title!==b&&e.jsx("p",{className:"text-sm text-neutral-500",children:r.merchandise.title})]})]}),e.jsxs("div",{className:"flex h-16 flex-col justify-between",children:[e.jsx(x,{amount:r.cost.totalAmount.amount,currencyCode:r.cost.totalAmount.currencyCode}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(y,{item:r,type:"minus"}),e.jsx("p",{children:r.quantity}),e.jsx(y,{item:r,type:"plus"})]})]})]})},r.id)})}),e.jsxs("div",{className:"py-4 text-sm text-neutral-500 dark:text-neutral-400",children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700",children:[e.jsx("p",{children:"Taxes"}),e.jsx(x,{className:"text-right text-base text-black dark:text-white",amount:t.cost.totalTaxAmount.amount,currencyCode:t.cost.totalTaxAmount.currencyCode})]}),e.jsxs("div",{className:"mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700",children:[e.jsx("p",{children:"Shipping"}),e.jsx("p",{className:"text-right",children:"Calculated at checkout"})]}),e.jsxs("div",{className:"mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700",children:[e.jsx("p",{children:"Total"}),e.jsx(x,{className:"text-right text-base text-black dark:text-white",amount:t.cost.totalAmount.amount,currencyCode:t.cost.totalAmount.currencyCode})]})]}),e.jsx("a",{href:t.checkoutUrl,className:"block w-full rounded-md bg-dark dark:bg-light p-3 text-center text-sm font-medium text-white dark:text-text-dark opacity-100 hover:opacity-90",children:"Proceed to Checkout"})]})]})})]}):e.jsx(w,{quantity:a})};export{Y as default};
