
console.log("#BookMarkCreate.ts");
//
const BookMarkCreate = {
    /**
     *
     * @param
     *
     * @return
     */  
    addItem : async function()
    {
        try{
            let ret = false;
            let titleValue = "";
            const title = document.querySelector("#title") as HTMLInputElement;
            if(title) {
                titleValue = title.value;
            }
            let urlValue = "";
            const url = document.querySelector("#url") as HTMLInputElement;
            if(url) {
                urlValue = url.value;
            }              
            const item = {
                title: titleValue,
                url: urlValue,
                bmCategoryId: 0,
                userId: 0,
            }
console.log("title=", titleValue);
console.log(item);
            const body = JSON.stringify(item);		
            const res = await fetch("/api/bookmark/create", {
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
            if (json.ret !==  "OK") {
                console.error("Error, json.ret <> OK");
                return ret;
            }
            ret = true;
            return ret;
        } catch (e) {
            console.error("Error, addItem");
            console.error(e);
            throw new Error('Error , addItem');
        }
    },     
    /**/
    initProc: function() {
        //console.log("init");
        //btn
        const button = document.querySelector('#save');
        button?.addEventListener('click', async () => {
            const result = await this.addItem();
console.log("result=", result);
            if(result === true) {
                location.reload();
            }
        }); 
    },
}
BookMarkCreate.initProc();
