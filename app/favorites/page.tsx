import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoritesListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async ()=>{

  const listings = await getFavoritesListings();
  const currentUser = await getCurrentUser();

  if(listings.length===0){
    return(
    <ClientOnly>
      <EmptyState
        title="No favorites found"
        subtitle="Looks like yoy have no favorite listings"
      />
    </ClientOnly>
  )}
  return (
    <ClientOnly>
      <FavoritesClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  )

  
}
export default ListingPage; 