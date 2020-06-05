import React from 'react'

import styles from 'assets/styles/components/Header.module.scss'

const Header: React.FC<{}> = () => {
  return (
    <div className={styles.background}>
      <h1 className={styles.title}>Selamat Datang di Movio.</h1>
      <div className={styles.box}>
        <p className={styles.subtitle}>
          Tempat anda mencari film dengan mudah.
        </p>
      </div>
    </div>
  )
}

export default Header
