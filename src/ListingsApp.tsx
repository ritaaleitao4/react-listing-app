// Import dependencies
import * as React from 'react'

// Import components
import CreateListingForm from './components/createListingForm'
import Listing from './components/listing'

// Import interfaces
import { ListingInterface } from './interfaces'

// ListingListApp component
const ListingsApp = () => {
  const [listing, setListings] = React.useState<ListingInterface[]>([])

  // Creating new item
  const handleListingCreate = (item: ListingInterface) => {
    // Prepare new listing state
    const newListingsState: ListingInterface[] = [...listing]
    // Update new listing state
    newListingsState.push(item)
    // Update listing state
    setListings(newListingsState)
  }

  // Remove existing todo item
  const handleListingRemove = (id: string) => {
    // Prepare new listing state
    const newListingsState: ListingInterface[] = listing.filter((item: ListingInterface) => item.id !== id)
    // Update listing state
    setListings(newListingsState)
  }

  return (
    <>
      <CreateListingForm
        listing={listing}
        handleListingCreate={handleListingCreate}
      />

      <Listing
        listing={listing}
        handleListingRemove={handleListingRemove}
      />
    </>
  )
}

export default ListingsApp