import DbConnect from "@/Services/DbConnect";
import { NextResponse } from "next/server";

export const GET = async(request) => {
    try{
        const db = await DbConnect();
        const reviewsCollection = db.collection('reviews');
        const result = await reviewsCollection.find().toArray();
        return NextResponse.json(result);
    }catch (error){
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
    }
}