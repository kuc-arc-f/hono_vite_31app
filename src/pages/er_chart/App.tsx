
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
        <h1 className="text-4xl font-bold">ErChart-index</h1>
        <hr className="my-2" />
        <a href="/er_chart/create" className="btn-purple ms-2 my-2">Create</a>
        <hr className="my-4" />
        <ul>
        {props.items.map((item: any) => {
          return (
          <li key={item.id}>
            <a href={`/er_chart/${item.id}`}><h3 className="text-3xl font-bold"
            >{item.title}</h3></a>
            <p>ID: {item.id}, {item.createdAt}</p>
            <a href={`/er_chart/${item.id}`}>
                <button  className="btn-outline-purple ms-2 my-2">Show</button>
            </a>
            <a href={`/er_chart/${item.id}`}>
                <button  className="btn-outline-purple ms-2 my-2">Edit</button>
            </a>              
            <hr />
          </li>
          );
        })}
        </ul>
        {/* paginate */}
        <div className="paginate_wrap py-2">
          <a href={`/tasks?page=${beforePage}`}><button className="btn-outline-purple"> ＜ </button>
          </a>
          <a href={`/tasks?page=${nextPage}`}><button className="btn-outline-purple"> ＞ </button>
          </a>
        </div>
        <hr className="my-8" />
        {/* JS */}
        {import.meta.env.PROD ? (
            <script type="module" src="/static/TaskIndex.js"></script>
        ) : (
            <script type="module" src="/src/client/TaskIndex.ts"></script>
        )}        
    </div>
  </Layout>
  )
}

/*
> ＞ <
>Before<
*/