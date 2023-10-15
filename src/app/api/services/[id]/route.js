import { NextResponse } from "next/server";
import services from '@/data/services.json'
import { ObjectId } from "mongodb";
import DbConnect from "@/Services/DbConnect";
export const GET = async(request,{params}) => {
    try{
        const id = params?.id
        const db = await DbConnect();
        const servicesCollection = db.collection('services');
        const query = {_id: new ObjectId(id)}
        const result = await servicesCollection.findOne(query);
        return NextResponse.json(result);
    } catch(e){
        NextResponse.json({ error: e.message });
    }
}