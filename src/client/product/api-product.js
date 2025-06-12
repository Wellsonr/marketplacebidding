import queryString from 'query-string'
const ip = process.env.REACT_APP_API_URL;

const create = async (params, credentials, product) => {
  try {
    let response = await fetch(`${ip}/api/products/by/` + params.shopId, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: product
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

const read = async (params, signal) => {
  try {
    let response = await fetch(`${ip}/api/products/` + params.productId, {
      method: 'GET',
      signal: signal
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

const update = async (params, credentials, product) => {
  try {
    let response = await fetch(`${ip}/api/product/` + params.shopId + '/' + params.productId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: product
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

const remove = async (params, credentials) => {
  try {
    let response = await fetch(`${ip}/api/product/` + params.shopId + '/' + params.productId, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

const listByShop = async (params, signal) => {
  try {
    let response = await fetch(`${ip}/api/products/by/` + params.shopId, {
      method: 'GET',
      signal: signal
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

const listLatest = async (signal) => {
  try {
    let response = await fetch(`${ip}/api/products/latest`, {
      method: 'GET',
      signal: signal
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

const listRelated = async (params, signal) => {
  try {
    let response = await fetch(`${ip}/api/products/related/` + params.productId, {
      method: 'GET',
      signal: signal
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

const listCategories = async (signal) => {
  try {
    let response = await fetch(`${ip}/api/products/categories`, {
      method: 'GET',
      signal: signal
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

const list = async (params, signal) => {
  const query = queryString.stringify(params)
  try {
    let response = await fetch(`${ip}/api/products?` + query, {
      method: 'GET',
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  create,
  read,
  update,
  remove,
  listByShop,
  listLatest,
  listRelated,
  listCategories,
  list
}
