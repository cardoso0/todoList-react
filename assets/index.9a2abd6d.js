import{s as c,j as p,r as d,R as h,a as m}from"./vendor.87a6392d.js";const f=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};f();const x=c.main`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 10px 4rem;

  h1 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    font-weight: 600;
    font-size: 6em;
    text-align: center;
    color: #ECECEC;
  }
`,g=c.form`
  border-radius: 50px;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 38%);
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  width: 100%;
  margin: 0 auto;

  .input-text, .input-submit {
    border: none;
    height: 45px;
    outline: none;
  }

  input {
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 400;
    padding-left: 10px;
    padding-right: 5px;
    width: 85%;
  }

  button {
    background: transparent;
    color: #5b5b5b;
    cursor: pointer;
    font-weight: 600;
    margin-right: 10px;
    text-transform: capitalize;
  }

`,r=p.exports.jsx,u=p.exports.jsxs,b=({onAddItem:e,itemsList:i})=>{const[s,a]=d.exports.useState("");return u(g,{children:[r("input",{type:"text",name:"text",id:"text",className:"input-text",placeholder:"Digite uma tarefa...",autoFocus:!0,autoComplete:"off",onChange:n=>{let l=n.target.value;a(l)},value:s}),r("button",{type:"submit",onClick:n=>{if(n.preventDefault(),s){const l={id:i.length+1,value:s,done:!1};e(l),a("")}},className:"input-submit",children:"Enviar"})]})},y=c.ul`
  display: block;
  margin-block-start: 1em;

  li {
    border-bottom: 1px solid #eaeaea;
    font-size: 1.2rem;
    padding: 17px 0;

    #checkBox {
      margin-right: 15px;
    }
    button {
      background: #f1f3f4;
      border: none;
      border-radius: 100px;
      cursor: pointer;
      float: right;
      font-size: 13px;
      height: 50px;
      margin: -10px 0 0 10px;
      outline: none;
      width: 50px;
    }
  }
`,k=c.span`
  font-style: ${e=>e.estilo?"italic":"none"};
  color: ${e=>e.estilo?"rgb(89, 89, 89)":"none"};
  opacity: ${e=>e.estilo?"0.5":"none"};
  text-decoration: ${e=>e.estilo?"line-through":"none"};
`,C=({itemsList:e,setItemsList:i})=>{const[s,a]=d.exports.useState(),t=n=>{let l=n.target.checked;a(l),console.log(s)},o=n=>{let l=[...e];l.splice(e.indexOf(n),1),i(l)};return r(y,{children:e.map(n=>u("li",{children:[r("input",{type:"checkbox",id:"checkBox",onChange:t}),r(k,{estilo:s,children:n.value}),r("button",{type:"button",onClick:()=>o(n),children:"Delete"})]},n.id))})};function v(){const[e,i]=d.exports.useState([]);return u(x,{children:[r("h1",{children:"todos"}),r(b,{onAddItem:a=>{i([...e,a])},itemsList:e}),r(C,{itemsList:e,setItemsList:i})," "]})}h.render(r(m.StrictMode,{children:r(v,{})}),document.getElementById("root"));
