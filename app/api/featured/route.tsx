import data from "@utils/mock";
 


export async function GET(req:Request) {

    return Response.json({ success: true, data: data });

   
  }

