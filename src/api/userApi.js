import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

export function getUsers(){
    return get('users');
}

function get(url){
    return fetch(baseUrl + url).then(onSuccess, onError);
}

export function deleteUser(){
    return del(`users/${id}`);
}

function onSuccess(response){
    return response.json();
}

function onError(error){
    console.log(error); //eslit-disable-line no-console
}