export const load = ({ fetch, params}) => {
  console.log(params)

  const fetchProduct = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()
    return data
  }

  return {
    product: fetchProduct(params.productId)
  }

}