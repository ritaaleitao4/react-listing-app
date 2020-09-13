import * as React from 'react'
import { ListingItemInterface } from './../interfaces'

// ListingItem component
const ListingItem = (props: ListingItemInterface) => {
  const value = new Intl.NumberFormat('pt-PT', {style: 'currency',currency: 'GBP',}).format(props.listing.priceInGBP)

  return (
    <li>
      <div>
        <h4>
          {props.listing.name} - {value}
        </h4>
        <p>{props.listing.description}</p>
      </div>

      <span onClick={() => props.handleListingRemove(props.listing.id)}>
        &#x02A2F;
      </span>
    </li>
  )
}

export default ListingItem