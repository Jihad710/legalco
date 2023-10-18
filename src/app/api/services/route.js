import { NextResponse } from "next/server";
import services from '@/data/services.json'
import DbConnect from "@/Services/DbConnect";
export const GET = async(request) => {
    try{
        const db = await DbConnect();
        const servicesCollection = db.collection('services');
        const result = await servicesCollection.find().toArray();
        return NextResponse.json(result);
    }catch (error){
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
    }
}