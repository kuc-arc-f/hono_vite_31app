
import Layout from '../layout';
import React from 'react';
let itemId = 100;
let nextPage = 1;
let beforePage = 1;
//
export default function Page(props: any) {
//console.log(props);
  if(props.page){
    nextPage = Number(props.page) + 1;
    beforePage = Number(props.page) - 1;
    if(beforePage <= 1) { beforePage = 1;}
  }
//
  return (
  <Layout>
    <div>
      <h1 className="text-4xl font-bold">BookMark</h1>
        <hr className="my-2" />
        <div className="bg-blue-100 p-4">
          <label className="text-2xl block text-gray-700 font-bold mb-2">Title:</label>
          <input type="text" id="title" 
          className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
          <br />
          <div className="mb-2">
            <label  className="text-2xl block text-gray-700 font-bold mb-2">URL</label>
            <input type="text" id="url" 
            className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="ex: https://url-input-123456789.com"
            />
          </div>
          <button id="save" className="btn-purple ms-2 my-2">Save</button>

        </div>
        <hr className="my-2" />
        {/* searcy */}
        <div className="mb-2 search_key_wrap">
          {/*
          <button className="btn btn-sm btn-outline-primary" id="btn_clear">Clear</button>
          */}
          <span className="search_key_wrap">
              <input type="text" className="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
               name="searchKey" id="searchKey"
              placeholder="Title search Key" />        
          </span>
          <button className="btn-outline-purple"  id="btn_search"
          >Search</button>
        </div>
        <hr className="my-2" />
        {/*
        */}
        <div id="root"></div>
        {/* paginate */}
        {/*
        <div className="paginate_wrap py-2">
          <a href={`/bookmark?page=${beforePage}`}><button className="btn-outline-purple"> ＜ </button>
          </a>
          <a href={`/bookmark?page=${nextPage}`}><button className="btn-outline-purple"> ＞ </button>
          </a>
        </div>
        */}
        <hr className="my-8" />
        {/* JS */}
        {import.meta.env.PROD ? (
          <>
            <script type="module" src="/static/BookMarkCreate.js"></script>
            <script type="module" src="/static/BookMarkIndex.js"></script>
          </>
        ) : (
          <>
            <script type="module" src="/src/client/BookMarkCreate.ts"></script>
            <script type="module" src="/src/client/BookMarkIndex.ts"></script>
          </>
        )}        
    </div>
  </Layout>
  )
}

/*
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
    <a href={`/bookmark_edit/${item.id}`}>
        <button  className="btn-outline-purple ms-2 my-2">Edit</button>
    </a>              
    <hr className="my-2" />
  </li>
  );
})}
</ul>

*/