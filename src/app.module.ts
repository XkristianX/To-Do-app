import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import {TasksModule} from './task/tasks.module'; // <-- Importa el módulo de tareas


@Module({
  imports: [

    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    TasksModule, // <-- Esto es obligatorio

  
  ],

})
export class AppModule {}



