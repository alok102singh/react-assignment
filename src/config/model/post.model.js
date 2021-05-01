export class Post {
    constructor(data={}){
        this.id = data.id || '';
        this.postId = data.postId || '';
        this.email = data.email || '';
        this.body = data.body || '';
        this.name = data.name || '';
        
    }
}