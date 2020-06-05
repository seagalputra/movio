import React from 'react'
import classNames from 'classnames'

import styles from 'assets/styles/components/MovieCard.module.scss'

const CardContent: React.FC<{ className?: string | undefined }> = (props) => {
  const { children, className } = props

  return (
    <div className={classNames(styles.cardContent, className)} {...props}>
      {children}
    </div>
  )
}

const CardImage: React.FC<{
  src: string | undefined
  alt: string | undefined
  className?: string | undefined
  style?: React.CSSProperties | undefined
}> = (props) => {
  const { src, alt, className, style } = props

  return (
    <img
      {...props}
      className={classNames(styles.thumbnail, className)}
      src={src}
      alt={alt}
      style={style}
    />
  )
}

const CardTitle: React.FC<{
  className?: string | undefined
  style?: React.CSSProperties | undefined
}> = (props) => {
  const { children, className, style } = props

  return (
    <p className={classNames(styles.title, className)} style={style} {...props}>
      {children}
    </p>
  )
}

const CardText: React.FC<{
  className?: string | undefined
  style?: React.CSSProperties | undefined
}> = (props) => {
  const { children, className, style } = props

  return (
    <p
      className={classNames(styles.textSmall, className)}
      style={style}
      {...props}
    >
      {children}
    </p>
  )
}

const MovieCard: React.FC<{ className?: string | undefined }> = (props) => {
  const { className, children } = props

  return (
    <div className={classNames(styles.cardContainer, className)}>
      {children}
    </div>
  )
}

export { MovieCard, CardImage, CardContent, CardTitle, CardText }
