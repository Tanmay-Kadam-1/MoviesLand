import React from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import { useState } from "react";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const Movie1 = {
	Title: "The Avengers",
	Year: "2012",
	imdbID: "tt0848228",
	Type: "movie",
	Poster:
		"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
};

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setsearchTerm] = useState("");

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		console.log(data.Search);
		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies("avengers");
	}, []);

	return (
		<div className="app">
			<h1>MoviesLand</h1>
			<div className="search">
				<input
					type="text"
					placeholder="Search for Movies"
					value={searchTerm}
					onChange={(e) => setsearchTerm(e.target.value)}
				/>

				<img
					src={SearchIcon}
					alt="Search icon"
					onClick={() => {
						searchMovies(searchTerm);
					}}
				/>
			</div>

			{movies?.length > 0 ? (
				<div className="container">
					{movies.map((m) => (
						<MovieCard Movie1={m} />
					))}
				</div>
			) : (
				<div className="empty">
					<h2>No Movies Found</h2>
				</div>
			)}
		</div>
	);
};

export default App;
