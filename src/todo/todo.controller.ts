import { Logger } from "@nestjs/common";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { ParseIntPipe } from "@nestjs/common/pipes/parse-int.pipe";
import { Todo } from "./todo.interface";
import { TodoService } from "./todo.service";

@Controller('todo')
export class TodoController{
    private readonly logger = new Logger(TodoController.name);
    constructor(private readonly todoService:TodoService){}

    @Get()
    findAll():Todo[]{
        this.logger.log('Handling findAll() request');
        return this.todoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:any):Todo{
        this.logger.log('Handling findone() request');
        return this.todoService.findOne(id);
    }

    @Post()
    create(@Body() todo:Todo):void{
        this.logger.log('Handling create() request');
        this.todoService.create(todo);
    }

    @Put(':id')
    update(@Body() todo:Todo,@Param('id',ParseIntPipe) id:number):void{
        this.logger.log('Handling update() request with id=' + id + '...');
        return this.todoService.update(id,todo);
    }

    @Delete(':id')
    remove(@Param('id',ParseIntPipe) id:number):void{
        return this.todoService.remove(id);
    }
}