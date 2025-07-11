import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';


@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

    @Get()
    async findAll() {
        return this.tasksService.findAll();
    }
    @Post()
    async createTask(@Body('text') text: string) {
        return this.tasksService.createTask(text);
    }
    @Patch(':id')
    async updateTask(@Param('id') id: string, @Body('completed') completed: boolean) {
        return this.tasksService.updateTask(id, completed);
    }
    @Delete(':id')
    async deleteTask(@Param('id') id: string) {
        return this.tasksService.deleteTask(id);
    }
}
        