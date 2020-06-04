import React, { ReactNode } from 'react'

import styles from 'assets/styles/components/NavigationBar.module.scss'

const NavigationBar: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <div className={styles.navigationMenu} {...props}>
      <div className={styles.logo}>Movio</div>
      {props.children}
    </div>
  )
}

export default React.memo(NavigationBar)
