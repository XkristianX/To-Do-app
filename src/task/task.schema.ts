import { Schema, SchemaFactory  } from "@nestjs/mongoose";
import { Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })  
export class Task extends Document {
  @Prop({ required: true })
   text: string;

  @Prop({ default: false })
  completed: boolean;   
}
export class TasksModule {}
export const TaskSchema = SchemaFactory.createForClass(Task);


