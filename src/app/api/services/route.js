import { NextResponse } from "next/server";
import services from '@/data/services.json'
export const GET = async(request) => {
    try{
        return NextResponse.json(services)
    } catch(e){
        console.log(e.message);
        NextResponse.json({ error: e.message });
    }
}