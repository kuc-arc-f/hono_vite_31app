import React from 'react';
//import { marked } from 'marked';
import Layout from '../layout';
//
export default function Page(items: any[]) {
console.log(items);
    //
    return (
    <Layout>
      <div>
          <h1 className="text-4xl font-bold">Test4-AA</h1>
          <hr className="my-2" />
          <label>Title:</label>
          <input type="text" id="title" 
          className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"/>
          <br /><button id="save" className="btn-purple ms-2 my-2">Save</button>
          <hr className="my-2" />
          <div id="root"></div>
          <ul>
          {items.map((item) => {
            return (
            <li key={item.id}>
              <a href={`/test/${item.id}`}><h3 className="text-3xl font-bold">{item.title}</h3>
              </a>
              <p>id={item.id}</p>
              <hr className="my-2" />
            </li>
            );
          })}
          </ul>        
          <hr className="my-2" />
          {/* JS */}
          {import.meta.env.PROD ? (
              <script  type="module" src="/static/Page4.js"></script>
          ) : (
              <script type="module" src="/src/client/Page4.ts"></script>
          )}
      </div>
    </Layout>
    )
}