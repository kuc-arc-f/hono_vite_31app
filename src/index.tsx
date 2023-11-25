import { Hono } from 'hono'
import type { Database } from '@cloudflare/d1'
import { renderToString } from 'react-dom/server';
//
interface Env {
  DB: Database
}
//
const app = new Hono()
//routes
import testRouter from './routes/test';
import taskRouter from './routes/tasks';
import todosRouter from './routes/todo';
import erChartRouter from './routes/ErChart';
//pages
import Top from './pages/Top';
import Test1 from './pages/test/App';
import Test2 from './pages/test2/App';
import Test3 from './pages/test3/App';
import Test4 from './pages/test4/App';
import Test5 from './pages/test5/App';
/* tasks */
import TaskIndex from './pages/tasks/App';
import TaskShow from './pages/tasks/show/App';
import TaskEdit from './pages/tasks/edit/App';
/* er_chart */
import ErCartIndex from './pages/er_chart/App';
import ErCartCreate from './pages/er_chart/create/App';
import ErCartShow from './pages/er_chart/show/App';
//
app.get('/', (c) => {
  return c.html(renderToString(Top([])))
})
app.get('/test1', async (c) => {
  const sql = `
  INSERT INTO Task ( title, content)
    VALUES('t1', 'b2');
    `;
  const result = await c.env.DB.prepare(`SELECT * FROM todos ORDER BY id DESC`).all();
console.log(result.results);
  return c.html(
    renderToString(
    <div>
      <h1>Hello!</h1>
      {JSON.stringify(result.results)}
    </div>
    )
  )
})
app.get('/test2', async (c) => { 
  return c.html(renderToString(Test2([])));
});
app.get('/test3', async (c) => { 
  return c.html(renderToString(Test3([])));
});
app.get('/test4', async (c) => { 
  const items = await testRouter.get_list(c, c.env.DB);
//console.log(items);
  return c.html(renderToString(Test4(items)));
});
app.get('/test5', async (c) => { 
  return c.html(renderToString(Test5([])));
});
/* tasks */
app.get('/tasks', async (c) => { 
  let page = c.req.query('page');
  if(!page) { page = '1';}
console.log("page=", page);
  const items = await testRouter.get_list_page(c, c.env.DB, page);
  return c.html(renderToString(<TaskIndex items={items} page={page} />));
});
app.get('/tasks/:id', async (c) => { 
  const {id} = c.req.param();
console.log("id=", id);
  const item = await testRouter.get(c, c.env.DB, id);
console.log(item);
  return c.html(renderToString(<TaskShow item={item} id={Number(id)} />));
});
app.get('/tasks_edit/:id', async (c) => { 
  const {id} = c.req.param();
console.log("id=", id);
  const item = await testRouter.get(c, c.env.DB, id);
console.log(item);
  return c.html(renderToString(<TaskEdit item={item} id={Number(id)} />));
});
/* er_chart */
app.get('/er_chart', async (c) => { 
  let page = c.req.query('page');
  if(!page) { page = '1';}
console.log("page=", page);
  const items = await erChartRouter.get_list(c, c.env.DB, page);
  return c.html(renderToString(<ErCartIndex items={items} page={page} />));
});
app.get('/er_chart/create', async (c) => { 
  let page = c.req.query('page');
  if(!page) { page = '1';}
console.log("page=", page);
  return c.html(renderToString(<ErCartCreate items={[]} page={page} />));
});
app.get('/er_chart/:id', async (c) => { 
  const {id} = c.req.param();
//console.log("id=", id);
  const item = await erChartRouter.get(c, c.env.DB, id);
  return c.html(renderToString(<ErCartShow item={item} id={Number(id)} />));
});

/******
API
******/
app.post('/api/test/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await testRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/test/delete', async (c) => { 
  const body = await c.req.json();
  const resulte = await testRouter.delete(body, c.env.DB);
  return c.json(resulte);
});
app.get('/api/test1', async (c) => {
  const result = await  c.env.DB.prepare(`SELECT * FROM Task ORDER BY id DESC`).all();
  console.log(result.results); 
  return Response.json({ret: "OK", data: result.results});
});
/* tasks */
app.post('/api/tasks/get_list', async (c) => { 
  const resulte = await taskRouter.get_list(c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/tasks/get', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.get(body, c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/tasks/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/tasks/update', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.update(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/tasks/delete', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.delete(body, c.env.DB);
  return c.json(resulte);
});
/* todos */
app.post('/api/todos/get_list', async (c) => { 
  const resulte = await todosRouter.test1(c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/todos/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await todosRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/todos/get', async (c) => { 
  const body = await c.req.json();
  const resulte = await todosRouter.get(body, c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
/* erChart */
app.post('/api/er_chart/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await erChartRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/er_chart/get_list', async (c) => { 
  const resulte = await erChartRouter.get_list(c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
/*
app.post('/api/er_chart/get', async (c) => { 
  const body = await c.req.json();
  const resulte = await erChartRouter.get(body, c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
*/
app.post('/api/er_chart/delete', async (c) => { 
  const body = await c.req.json();
  const resulte = await erChartRouter.delete(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/er_chart/update', async (c) => { 
  const body = await c.req.json();
  const resulte = await erChartRouter.update(body, c.env.DB);
  return c.json(resulte);
});

export default app
