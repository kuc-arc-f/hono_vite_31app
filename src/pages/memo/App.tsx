
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
        <h1 className="text-4xl font-bold">mdMemo-index</h1>
        <hr className="my-2" />
        <a href="/memo/create" className="btn-purple ms-2 my-2">Create</a>
        <hr className="my-2" />
        <div className="col-md-6 text-end">
            <span className="search_key_wrap">
            <input type="text" 
            className="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" 
            name="searchKey" id="searchKey"
            placeholder="Title search" />
            </span>                
            <button className="ms-2 btn-outline-purple" id="btn_search"
            >Search</button>
        </div>
        <hr className="my-2" />
        <div id="root"></div>
        {/* paginate */}
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
        <div className="paginate_wrap py-2">
          <a href={`/memo?page=${beforePage}`}><button className="btn-outline-purple"> ＜ </button>
          </a>
          <a href={`/memo?page=${nextPage}`}><button className="btn-outline-purple"> ＞ </button>
          </a>
        </div>
*/