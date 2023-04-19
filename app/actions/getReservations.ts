import prisma from "@/app/libs/primadb"

interface IParams{
  listingId?:string
  userId?:string
  authorId?:string
}

export default async function getReservations(
  params:IParams
){
  try{
    const {listingId,userId,authorId} = params;
    const query :any={}

    if(listingId){
      query.listingId = listingId
    }

    if(userId){
      query.userId = userId
    }

    if(authorId){
      query.listing={userId:authorId}
    }

    const reservations = await prisma.reservation.findMany({
      where:query,
      include:{
        listing:true
      },
      orderBy:{
        createdAt:'desc'
      }
    })

    const safeReservations = reservations.map((reservation) =>({
      ...reservation,
      createdAt:reservation.createdAt.toDateString(),
      startDate:reservation.startDate.toDateString(),
      endDate:reservation.endDate.toDateString(),
      listing:{
        ...reservation.listing,
        createdAt:reservation.createdAt.toDateString(),
      }
    }))
    return safeReservations
  }catch (error:any){
    throw new Error(error)
    
  }
}