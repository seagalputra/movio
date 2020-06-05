import React from 'react'

import {
  MovieCard,
  CardContent,
  CardImage,
  CardTitle,
  CardText,
} from 'components/MovieCard'

import styles from 'assets/styles/scenes/HomePage.module.scss'

const HomePage: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <MovieCard>
          <CardImage
            src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg"
            alt="Movie Thumbnail"
          />
          <CardContent>
            <CardTitle>Extraction (2020)</CardTitle>
            <CardText style={{ marginBottom: 6 }}>04/24/2020</CardText>
            <CardText>Drama, Action, Thriller</CardText>
          </CardContent>
        </MovieCard>
      </div>

      <div className={styles.item}>
        <MovieCard>
          <CardImage
            src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg"
            alt="Movie Thumbnail"
          />
          <CardContent>
            <CardTitle>Extraction (2020)</CardTitle>
            <CardText style={{ marginBottom: 6 }}>04/24/2020</CardText>
            <CardText>Drama, Action, Thriller</CardText>
          </CardContent>
        </MovieCard>
      </div>

      <div className={styles.item}>
        <MovieCard>
          <CardImage
            src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg"
            alt="Movie Thumbnail"
          />
          <CardContent>
            <CardTitle>Extraction (2020)</CardTitle>
            <CardText style={{ marginBottom: 6 }}>04/24/2020</CardText>
            <CardText>Drama, Action, Thriller</CardText>
          </CardContent>
        </MovieCard>
      </div>

      <div className={styles.item}>
        <MovieCard>
          <CardImage
            src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg"
            alt="Movie Thumbnail"
          />
          <CardContent>
            <CardTitle>Extraction (2020)</CardTitle>
            <CardText style={{ marginBottom: 6 }}>04/24/2020</CardText>
            <CardText>Drama, Action, Thriller</CardText>
          </CardContent>
        </MovieCard>
      </div>

      <div className={styles.item}>
        <MovieCard>
          <CardImage
            src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg"
            alt="Movie Thumbnail"
          />
          <CardContent>
            <CardTitle>Extraction (2020)</CardTitle>
            <CardText style={{ marginBottom: 6 }}>04/24/2020</CardText>
            <CardText>Drama, Action, Thriller</CardText>
          </CardContent>
        </MovieCard>
      </div>

      <div className={styles.item}>
        <MovieCard>
          <CardImage
            src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg"
            alt="Movie Thumbnail"
          />
          <CardContent>
            <CardTitle>Extraction (2020)</CardTitle>
            <CardText style={{ marginBottom: 6 }}>04/24/2020</CardText>
            <CardText>Drama, Action, Thriller</CardText>
          </CardContent>
        </MovieCard>
      </div>
    </div>
  )
}

export default HomePage
