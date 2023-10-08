import DbConnect from "@/Services/DbConnect";
import { NextResponse } from "next/server";

export const POST = async(request) => {
    try{
        const body = await request.json();
        const db = await DbConnect();
        const reviewsCollection = db.collection('appointments');
        const result = await reviewsCollection.insertOne({...body});
        return NextResponse.json(result);
    }catch (error){
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
    }
}