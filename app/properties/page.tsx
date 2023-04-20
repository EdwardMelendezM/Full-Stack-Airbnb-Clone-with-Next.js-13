import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import TripsClient from "./PropertiesClient";
import getListings from "../actions/getListing";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage =  async ()=>{
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

  const listings = await getListings({userId:currentUser.id})

  if(listings.length===0){
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Look like you havent reserved any properties"
        />
      </ClientOnly>
    )
  }
  
  return (
    <ClientOnly>
      <PropertiesClient
        listings={listings}
        currentUser = {currentUser}
      />
    </ClientOnly>
  )

}
export default PropertiesPage;

