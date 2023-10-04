import DbConnect from "@/Services/DbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async(request,{params}) => {
    try{
        console.log(params);
        const db = await DbConnect();
        const lawyerCollection = db.collection('lawyer');
        const query = {_id: new ObjectId(params?.id)}
        const result = await lawyerCollection.findOne(query);
        return NextResponse.json(result);
    }catch (error){
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
    }
}