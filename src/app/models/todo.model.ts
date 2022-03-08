export class Todo{
    // id:number=Math.floor(Math.random() * 100);
    id:number=0;
    user_id:number=0;
    user:string="demo";
    title:string="";
    due_on:Date = new Date;
    status:string="pending";
}