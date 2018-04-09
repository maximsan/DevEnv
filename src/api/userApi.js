import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

export function getUsers(){
    return get('users');
}

function get(url){
    return fetch(getBaseUrl() + url).then(onSuccess, onError);
}

export function deleteUser(id){
    return del(`users/${id}`);
}

// Can't call func delete since reserved word.
function del(url) {
    const request = new Request(baseUrl + url, {
      method: 'DELETE'
    });
  
    return fetch(request).then(onSuccess, onError);
  }

function onSuccess(response){
    return response.json();
}

function onError(error){
    console.log(error); //eslit-disable-line no-console
}