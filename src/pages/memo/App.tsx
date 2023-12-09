
import Layout from '../layout';
import React from 'react';
let itemId = 100;
let nextPage = 1;
let beforePage = 1;
//
export default function Page(props: any) {
  console.log(props);
  if(props.page){
    nextPage = Number(props.page) + 1;
    beforePage = Number(props.page) - 1;
    if(beforePage <= 1) { beforePage = 1;}
  }
//
  return (
  <Layout>
    <div>
        <h1 className="text-4xl font-bold">mdMemo-index</h1>
        <hr className="my-2" />
        {/*
        <label className="text-2xl block text-gray-700 font-bold mb-2">Title:</label>
        <input type="text" id="title" 
        className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"/>
        <br />
        <div className="mb-2">
          <label  className="text-2xl block text-gray-700 font-bold mb-2">Content</label>
          <textarea id="content" name="content"
          className="border border-gray-400 rounded-md px-3 py-2 w-full h-16 resize-none focus:outline-none focus:border-blue-500"
           required
          ></textarea>
        </div>
        <button id="save" className="btn-purple ms-2 my-2">Save</button>
        */}
        <a href="/memo/create" className="btn-purple ms-2 my-2">Create</a>
        <hr className="my-2" />
        <ul>
        {props.items.map((item: any) => {
          return (
          <li key={item.id}>
            <a href={`/memo/${item.id}`}><h3 className="text-3xl font-bold"
            >{item.title}</h3></a>
            <p>ID: {item.id}, {item.createdAt}</p>
            <a href={`/memo/${item.id}`}>
                <button  className="btn-outline-purple ms-2 my-2">Show</button>
            </a>
            <a href={`/memo_edit/${item.id}`}>
                <button  className="btn-outline-purple ms-2 my-2">Edit</button>
            </a>              
            <hr />
          </li>
          );
        })}
        </ul>
        {/* paginate */}
        <div className="paginate_wrap py-2">
          <a href={`/memo?page=${beforePage}`}><button className="btn-outline-purple"> ＜ </button>
          </a>
          <a href={`/memo?page=${nextPage}`}><button className="btn-outline-purple"> ＞ </button>
          </a>
        </div>
        <hr className="my-8" />
        {/* JS */}
        {import.meta.env.PROD ? (
            <script type="module" src="/static/MemoIndex.js"></script>
        ) : (
            <script type="module" src="/src/client/MemoIndex.ts"></script>
        )}        
    </div>
  </Layout>
  )
}

/*
> ＞ <
>Before<
*/