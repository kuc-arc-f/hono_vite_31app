import { h, Component, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);
console.log("#BookMarkIndex.ts");
//
const BookMarkIndex = {
    /**
     *
     * @param
     *
     * @return
     */  
    getList : async function(): Promise<any>
    {
        try{
            let ret: any[] = [];
            const item = {
            }
            const body = JSON.stringify(item);		
            const res = await fetch("/api/bookmark/get_list", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json()
console.log(json);   
            if (res.status !== 200) {
                console.error("error, status <> 200");
                throw new Error(await res.text());
            }
            ret = json;
            return ret;
        } catch (e) {
            console.error(e);
            throw new Error('Error , getList');
        }
    },  
    /**
     *
     * @param
     *
     * @return
     */ 
    displayItems: function(items: any[])
    {
        try{      
            const li: any[] = [];  
            items.forEach((element) => {
                li.push(html`
                <div>
                    <a href="${element.url}" target="_blank"><h3 className="text-3xl font-bold"
                    >${element.title}</h3></a>
                    <p>id: ${element.id}, ${element.createdAt}</p>
                    <a href="/bookmark_edit/${element.id}">
                        <button  class="btn-outline-purple ms-2 my-2">Edit</button>
                    </a>
                    <hr class="my-2" />
                </div>
                `
                );
            });
            render(li, document.getElementById("root"));
    
        } catch (e) {
            console.error(e);
            throw new Error('Error , displayItems');
        }
    },    
    /**
     *
     * @param
     *
     * @return
     */  
    search : async function(): Promise<any>
    {
        try{
            let ret: any[] = [];
            const seachKey = (<HTMLInputElement>document.querySelector("#searchKey")).value;
            const item = {
              userId: 0,
              seachKey: seachKey,
            }
            const body = JSON.stringify(item);		
            const res = await fetch("/api/bookmark/search", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json()
console.log(json);   
            if (res.status !== 200) {
                console.error("error, status <> 200");
                throw new Error(await res.text());
            }
            ret = json;
            return ret;
        } catch (e) {
            console.error(e);
            throw new Error('Error , search');
        }
    },    
    /**
     *
     * @param
     *
     * @return
     */
    initProc: async function() {
        const res = await this.getList();
        const li = [];
console.log(res);
        this.displayItems(res);
        //console.log("init");
        const button = document.querySelector('#btn_search');
        button?.addEventListener('click', async () => {
            const res = await this.search();
            this.displayItems(res);
        }); 
        /*
        const button = document.querySelector('#save');
        button?.addEventListener('click', async () => {
            const result = await this.addItem();
console.log("result=", result);
            if(result === true) {
                location.reload();
            }
        }); 
        */
    },
}
BookMarkIndex.initProc();
