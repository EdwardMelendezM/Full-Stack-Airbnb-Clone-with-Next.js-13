import prisma from "@/app/libs/primadb"
export default async function getListings(){
  try {
    const listing = await prisma.listing.findMany({
      orderBy:{
        createdAt:'desc'
      }
    })
    return listing
  } catch (error:any) {
    throw new Error(error)
  }
}