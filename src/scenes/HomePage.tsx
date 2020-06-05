import React from 'react'

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

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <MovieList title="Paling Populer">
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

export default HomePage
