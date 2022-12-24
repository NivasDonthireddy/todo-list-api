import { Injectable } from "@nestjs/common";
import { Todo } from "./todo.interface";

@Injectable()
export class TodoService{
    private storage:Array<Todo> = [{
        id: 1,
        label: 'Buy Milk',
        complete: false
    }];
    findAll():Todo[]{
        return this.storage;
    }

    create(todo:Todo):void{
        const currentMaxId = Math.max(...this.storage.map(todo=>todo.id));
        todo.id = currentMaxId+1;
        this.storage.push(todo);
    }

    update(id:number,todo:Todo):void{
        const index = this.storage.findIndex(x=>x.id===id);
        this.storage[index] = todo;
    }

    findOne(id:number):Todo{
        return this.storage.find(x => x.id===id);
    }

    remove(id:number):void{
        const index = this.storage.findIndex(x=>x.id===id);
        this.storage.splice(index,1);
    }
}