import * as React from 'react'
import ListingItem from './listingItem'
import { ListingListInterface } from '../interfaces'

// ListingList component
const Listing = (props: ListingListInterface) => {
  return (
    <section className="listings">
      {!props.listing.length ? (
        <>
          <h3>Listings</h3>
          <div className="listings--empty">No listings created</div>
        </>
      ) : (
        <>
          <h3>Listings ({props.listing.length})</h3>    
          <ul>
            {props.listing.map((listing) => (
              <ListingItem
                key={listing.id}
                listing={listing}
                handleListingRemove={props.handleListingRemove}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  )
}

export default Listing