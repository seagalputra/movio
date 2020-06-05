import React from 'react'

import styles from 'assets/styles/components/MovieList.module.scss'

const MovieList: React.FC<{ title: string }> = (props) => {
  const { children, title } = props

  return (
    <div className={styles.root}>
      <h1>{title}</h1>
      <div className={styles.listContainer} {...props}>
        {children}
      </div>
    </div>
  )
}

export default MovieList
