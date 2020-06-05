import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Header from 'components/Header'
import {
  MovieCard,
  CardContent,
  CardImage,
  CardTitle,
  CardText,
} from 'components/MovieCard'
import MovieList from 'components/MovieList'

import styles from 'assets/styles/scenes/HomePage.module.scss'

import movieData from 'data/movieData'
import getPosterUrl from 'apis/getPosterUrl'
import { RootState } from 'redux/rootReducer'
import Movie from 'types/Movie'

interface StateProps {
  popularMovies: Array<Movie>
}

interface DispatchProps {
  fetchPopularMovies: () => void
}

type Props = StateProps & DispatchProps

const HomePage: React.FC<Props> = (props) => {
  const { fetchPopularMovies, popularMovies } = props

  useEffect(() => {
    fetchPopularMovies()
  }, [fetchPopularMovies])

  return (
    <>
      <Header />
      <div className={styles.container}>
        <MovieList title="Paling Populer">
          {popularMovies?.map((movie: Movie) => {
            const { id, poster_path, original_title, release_date } = movie

            return (
              <MovieCard key={id}>
                <CardImage
                  src={getPosterUrl(poster_path)}
                  alt="Movie Thumbnail"
                />
                <CardContent>
                  <CardTitle>{original_title}</CardTitle>
                  <CardText>{release_date}</CardText>
                </CardContent>
              </MovieCard>
            )
          })}
        </MovieList>

        <MovieList title="Segera Tayang">
          {movieData?.map((movie, index) => {
            const { thumbnail, title, date, genre } = movie

            return (
              <MovieCard key={`${title}-${index}`}>
                <CardImage src={thumbnail} alt="Movie Thumbnail" />
                <CardContent>
                  <CardTitle>{title}</CardTitle>
                  <CardText>{date}</CardText>
                  <CardText>{genre}</CardText>
                </CardContent>
              </MovieCard>
            )
          })}
        </MovieList>
      </div>
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  popularMovies: state.movies.popularMovies,
})

const mapDispatchToProps = {
  fetchPopularMovies: () => ({ type: 'FETCH_POPULAR_MOVIES' }),
}

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
)
