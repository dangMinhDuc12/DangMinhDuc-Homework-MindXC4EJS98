class ListPosts extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        // this.getDB()
        //     .then(post => {
        //         this.shadowDom.innerHTML = `
        //             <div>
                    
        //                 ${post}
                    
        //             </div>

                
        //         `
        //     })
        //     .catch(err => {
        //         alert(err)
        //     })

        
        db.collection('posts').onSnapshot(res => {
            let postItem = res.docs.map(doc => {
            return `
        
                <post-item data-id='${doc.id}' content = '${doc.data().content}'></post-item>
        
        
        `
            });

            this.shadowDom.innerHTML = `
                <div>
                    ${postItem.join('')}
                </div>
            
            `

        })
        
    }




    getDB() {
        // let res = await db.collection('posts').get();
        // let postItem = res.docs.map(doc => {
        //     return `
            
        //         <post-item data-id='${doc.id}' content = '${doc.data().content}'></post-item>
            
            
        //     `
        // });
        // return postItem.join('');
        
        
            


                
            
            



        



        
        
    }
}



window.customElements.define('list-posts', ListPosts);