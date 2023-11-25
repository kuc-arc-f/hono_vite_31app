import type { Database } from '@cloudflare/d1'
//
interface Env {
    DB: Database
}
const retObj = {ret: "NG", data: [], message: "Error, Internal Server Error"};

const Router = {
    /**
     * route
     * @param
     *
     * @return
     */ 
    test1: async function(c, DB)
    {
        try{    
            const result = await DB.prepare(`SELECT * FROM todos ORDER BY id DESC`).all();
    console.log(result.results);
            if(result.results.length < 1) {
              console.error("Error, results.length < 1");
              return [];
            }
            return result.results;
        } catch (e) {
            console.error(e);
            return Response.json(retObj);
        } 
    },
    /**
     * 
     * @param
     *
     * @return
     */    
      create: async function(body, DB)
      {
          try{    
  console.log(body);
              if (body) {
                  const sql = `
                  INSERT INTO todos ( title, content)
                  VALUES('${body.title}', '${body.content}');
                  `;
                  //console.log(sql);
                  await DB.prepare(sql).run();
              }
              return {ret: "OK", data: body};
          } catch (e) {
              console.error(e);
              return [];
          } 
      },
      /**
       *
       * @param
       *
       * @return
       */    
      get: async function(body, c, DB)
      {
          //console.log("#get");
          try{    
              const sql = `SELECT * FROM todos WHERE id = ${body.id}`;            
              const result = await DB.prepare(sql).all();
              //console.log(result.results);
              if(result.results.length < 1) {
                  console.error("Error, results.length < 1");
                  return {};
              }
              return result.results[0];
          } catch (e) {
              console.error(e);
              return {};
          } 
      },    
}
export default Router;