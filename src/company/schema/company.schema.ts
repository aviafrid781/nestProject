import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/user/schema/user.schema';
export type CompanyDocument = Company & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Company {
    @Prop({
        type: Number,
    })
    id: number;

    @Prop({
        type: String,
    })
    name: string;

    @Prop({
        type: String,
    })
    adminUser: string;

    @Prop({
        type: String,
    })
    email: string;

    @Prop({
        type: Number,
    })
    phone: number;

    @Prop({
        type: String,
    })
    address: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    userId: User
}

export const CompanySchema = SchemaFactory.createForClass(Company);
