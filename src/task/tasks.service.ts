import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './task.schema';
import { Model } from 'mongoose';


@Injectable()
export class TasksService {
    constructor(
        @InjectModel(Task.name) private taskModel: Model<Task>,
    ) { }
    async findAll(): Promise<Task[]> {
        return this.taskModel.find().sort({ createdAt: -1 }).exec();
    }
    async createTask(text: string): Promise<Task> {
        const newTask = new this.taskModel({ text });
        return newTask.save();
    }
    async updateTask(id: string, completed: boolean): Promise<Task> {
        return this.taskModel.findByIdAndUpdate(
            id,
            { completed: true },
            { new: true },
        ) as Promise<Task>;
    }
    async deleteTask(id: string): Promise<Task> {
        return this.taskModel.findByIdAndDelete(id) as Promise<Task>;
    }
}