
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
        <h1 className="text-4xl font-bold">BookMark-index</h1>
        <hr className="my-2" />
        <label className="text-2xl block text-gray-700 font-bold mb-2">Title:</label>
        <input type="text" id="title" 
        className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
        <br />
        <div className="mb-2">
          <label  className="text-2xl block text-gray-700 font-bold mb-2">URL</label>
          <input type="text" id="url" 
          className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button id="save" className="btn-purple ms-2 my-2">Save</button>
        <hr className="my-2" />
        <ul>
        {props.items.map((item: any) => {
          return (
          <li key={item.id}>
            <a href={`${item.url}`} target="_blank"><h3 className="text-3xl font-bold"
            >{item.title}</h3></a>
            <div className="my-2">
              <a href={`${item.url}`} target="_blank">
                <span >{item.url}</span>
              </a>
            </div>
            <p>ID: {item.id}, {item.createdAt}</p>
            {/*
            <a href={`/bookmark_edit/${item.id}`}>
                <button  className="btn-outline-purple ms-2 my-2">Edit</button>
            </a>              
            */}
            <hr className="my-2" />
          </li>
          );
        })}
        </ul>
        {/* paginate */}
        <div className="paginate_wrap py-2">
          <a href={`/bookmark?page=${beforePage}`}><button className="btn-outline-purple"> ＜ </button>
          </a>
          <a href={`/bookmark?page=${nextPage}`}><button className="btn-outline-purple"> ＞ </button>
          </a>
        </div>
        <hr className="my-8" />
        {/* JS */}
        {import.meta.env.PROD ? (
            <script type="module" src="/static/BookMarkCreate.js"></script>
        ) : (
            <script type="module" src="/src/client/BookMarkCreate.ts"></script>
        )}        
    </div>
  </Layout>
  )
}

/*
  <button  className="btn-outline-purple ms-2 my-2">Show</button>
  <a href={`/bookmark/${item.id}`}>
      <button  className="btn-outline-purple ms-2 my-2">Show</button>
  </a>
*/