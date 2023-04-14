import countries from 'world-countries'

const formattedCounter = countries.map((country)=>(
  {
    value:country.cca2,
    label:country.name.common,
    flag:country.flag,
    latlng:country.latlng,
    region:country.region
  }
))

const useCountries = ()=>{
  const getAll = ()=>formattedCounter;
  const getByValue = (value:string)=>{
    return formattedCounter.find((item) => item.value === value)
  }

  return {
    getAll,getByValue
  }
}

export default useCountries;