import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage =  async ()=>{
  const currentUser = await getCurrentUser();
  
  if(!currentUser){
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorizes"
          subtitle="Please login"
        />
      </ClientOnly>
    )
  }

  const reservacions = await getReservations({userId:currentUser.id})

  if(reservacions.length===0){
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found"
          subtitle="Look like you havent reserved any trips"
        />
      </ClientOnly>
    )
  }
  
  return (
    <ClientOnly>
      <TripsClient
        reservations={reservacions}
        currentUser = {currentUser}
      />
    </ClientOnly>
  )

}
export default TripsPage;

