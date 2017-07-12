import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchFilm, fetchCharacters} from '../actions/filmAction';

class Film extends React.Component {
	componentDidMount(){
		this.props.fetchFilm();
	}

	showCharacter(characters){
		this.props.fetchCharacters(characters);
	}

	showFilms(){
		this.props.fetchFilm();
	}

	renderFilm() {
		var inthis = this;
		const sortedFilms = this.props.film.sort(function(a,b){
			return a.episode_id - b.episode_id
		})
		const filmList = sortedFilms.map(function(filmArr){
			return(
				<li className="list-group-item" key={filmArr.episode_id} onClick={inthis.showCharacter.bind(inthis, filmArr.characters)}>{filmArr.episode_id}. {filmArr.title}</li>
			)
		})
		return(	
				<ul className="list-group">
					{filmList}
				</ul>			
		)
	}

	renderPeople() {
		var inthis = this;
		const characterList = this.props.people.map(function(characterArr){
			return <tr key={characterArr.name}><td>{characterArr.name}</td><td>{characterArr.gender}</td><td>{characterArr.birth_year}</td></tr>
		})
		return (
			<div>				
				<button type="buttono" className="btn btn-primary" onClick={inthis.showFilms.bind(inthis)}>Return To FilmList</button>
				<table className="table table-striped table-bordered"> 
			      <tbody>
			        <tr>
			          <th>{"Name"}</th>
			          <th>{"Gender"}</th>
			          <th>{"Birth_Year"}</th>
			        </tr>
			        {characterList}
			      </tbody>  
			    </table>				
			</div>
		)
	}

	render(){
		if(this.props.show==='film'){
			return this.renderFilm();
		}else {
			if(this.props.people.length>0){

				return this.renderPeople();
			}else{
				return(<div></div>)
			}
		}
	}
}

function mapStateToProps(state){
	return {
		film: state.film.film,     // [obj,obj,obj]
		people: state.film.people,
		show: state.film.show
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		fetchFilm:fetchFilm,
		fetchCharacters:fetchCharacters
	},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Film);