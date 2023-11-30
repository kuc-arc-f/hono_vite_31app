
import Layout from '../layout';
import React from 'react';
import Gantt from './Gantt';
//
let nextPage = 1;
let beforePage = 1;
//
const test1 = `gantt
    title XXXX開発プロジェクト Gantt Diagram
    dateFormat YYYY-MM-DD
    section task
        テスト PH-2 :2023-07-22, 2023-08-31
    section task
        テスト PH-1 :2023-07-20, 2023-07-31
    section task
        製造 :2023-07-10, 2023-07-20
    section task
        設計 :2023-07-07, 2023-07-22
    section task
        技術スタック選定 :2023-07-03, 2023-07-22
    section task
        企画 :2023-07-01, 2023-07-14
`;
//
export default function Page(props: any) {
//  console.log(props.id);
console.log("id=", props.id);
console.log(props.project);
  if(props.page){
    nextPage = Number(props.page) + 1;
    beforePage = Number(props.page) - 1;
    if(beforePage <= 1) { beforePage = 1;}
  }
  const taskString = Gantt.getTaskString(props.items);
//console.log(taskString);
  const ganttText = `
  gantt
      title ${props.project.name} Gantt Diagram
      dateFormat YYYY-MM-DD
  ${taskString}
  `;

  // 
  return (
  <Layout>
    <div>
        <h1 className="text-4xl font-bold">Gantt</h1>
        <hr className="my-2" />
        {/* gannt  */}
        <pre className="mermaid">{ganttText}</pre>
        <hr className="my-8" />
        {/* JS */}
        {import.meta.env.PROD ? (
            <script type="module" src="/static/MermaidImport.js"></script>
        ) : (
            <script type="module" src="/src/client/MermaidImport.ts"></script>
        )}        
    </div>
  </Layout>
  )
}

/*
> ＞ <
>Before<
*/