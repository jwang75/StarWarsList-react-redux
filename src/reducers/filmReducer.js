export default function(state={film:[], people:[], show:'film'}, action) {
	switch(action.type){
		case 'FETCH_FILM':
		 
			//return {film:[...state, ...action.payload.data]};
			return {film:action.payload, show:'film', people:[]}
			break;
		case 'FETCH_CHARACTERS':
            return {...state, people:action.payload, show:'character'}
            break;
	}

	return state;
}