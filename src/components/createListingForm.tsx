import React, { useState, useEffect} from "react"
import shortid from 'shortid'
import InputRow from "./input"
import { ListingInterface, ListingFormInterface, CURRENCY } from './../interfaces'

// Listing form component
export const CreateListingForm: React.FC<ListingFormInterface> = (ListingFormInterface) => {
  const options = [] as  any;
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [price, setPrice] = useState<string>("0")
  const [currency, setCurrency] = useState<CURRENCY>(CURRENCY.AUD)
  const [isInvalidInputs, setIsInvalidInputs] = useState<boolean>(false)
  const [rates, setRates] = useState<any>(null)

  useEffect(() => {
    setIsInvalidInputs(false)
  }, [name, description, price, currency])

  for (let option in CURRENCY) {
    options.push(option)
  }

  const resetForm = () => {
    setName("")
    setDescription("")
    setPrice("0")
    setCurrency(CURRENCY.AUD)
  }

  if(!rates) {
    //Exchange rates (free version) only works at localhost. Demo url only supports https requests, so at this url it doesn't convert
    fetch('http://data.fixer.io/api/latest?access_key=528c49244f1d248766e3d8726f985c95')
    .then(data => data.json())
    .then(data => {
      setRates(data.rates)
    })
    .catch(err => console.log(err));
  }
  
  const getProductPriceinGBP = (price: number, currency: string) => {
    //exchange rates (free version) only works at localhost. Demo url only supports https requests, so at this url it doesn't convertt
    if(rates) return Math.round(price / rates[currency] * 100) / 100
    else return price
  }

  const handleInputEnter = () => {
    const validInputs = !!name && !!description && !!price && !!currency

    if (validInputs) {
      const newListing: ListingInterface = {
        id: shortid.generate(),
        name,
        description,
        price: Number(price),
        currency,
        priceInGBP: getProductPriceinGBP(Number(price), currency)
      }
      ListingFormInterface.handleListingCreate(newListing)
      resetForm()
    } else {
      setIsInvalidInputs(true)
    }
  }

  return (
    <section className="create-listing">
      <h3>Create a new listing</h3>

      <form>
        <InputRow label="Name *">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputRow>

        <InputRow label="Description *">
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputRow>

        <InputRow label="Price *">
          <input
            value={price}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </InputRow>

        <InputRow label="Currency *">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as CURRENCY)}
          >
            {options.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </InputRow>
      </form>
      
      {isInvalidInputs && (
        <div className="input-box--text-error">
          Cannot add a product with empty fields
        </div>
      )}

      <button onClick={handleInputEnter}>
        Add to listing
      </button>
    </section>
  )
}

export default CreateListingForm