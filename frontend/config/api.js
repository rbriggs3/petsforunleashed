export var BASE_API_URL = 'http://localhost' // Local
//export var BASE_API_URL = 'https://10.197.170.165' // Dev
//export var BASE_API_URL = 'https://10.197.172.160' // Prod

export const Config = {
  API_URL: BASE_API_URL + ':5000/api/', // Local/Dev
  API_PAGE_SIZE: 10,
}

export const Endpoints = {
    About: Config.API_URL + 'Home',
    Adopt: Config.API_URL + 'Adopt',
    Blog: Config.API_URL + 'Blog',
    Contact: Config.API_URL + 'Contact',
    Donate: Config.API_URL + 'Donate',
    Home: Config.API_URL + 'Home',
}

export const apiGet = (url, page, query, pageSize) => {
  pageSize = pageSize || Config.API_PAGE_SIZE
  page = page? '&page=' + page : '&page=0'
  query = query? '&' + query : ''
  // console.log(url + '?limit=' + pageSize + page + query)
  return fetch(url + '?limit=' + pageSize + page + query, {
    method: 'GET',
    headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
  })
}

export const apiPost = (url, body) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(res => res.json().then(data => ({body: data})))
}

export const apiPut = (url, body) => {
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
}

export const apiDelete = (url) => {
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
}
