"use strict"

import axios from 'axios';


export function fetchFilm(){
	const url = 'https://swapi.co/api/films/';
	return function(dispatch){
		axios.get(url).then(function(response){
			dispatch({
				type:'FETCH_FILM',
		        payload:response.data.results
		    })
		})
	}

}

export function fetchCharacters(characters){
	const characterPromise = characters.map(function(url){
		return axios.get(url);
	})
	return function(dispatch){
		axios.all(characterPromise).then(function(response){
		    var people = response.map(function(peopleArr){
				return peopleArr.data
			})
			dispatch({
				type:"FETCH_CHARACTERS",
				payload:people
			})
		})
	}
}