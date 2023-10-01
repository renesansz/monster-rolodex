import { Component } from "react"

import styles from "./Card.module.css"
import { CardProps } from "./Card.types"

class Card extends Component<CardProps> {
  render() {
    const { children, className, ...forwardedProps } = this.props
    const componentClassname = className ? `${className} ${styles.cardContainer}` : styles.cardContainer

    return (
      <div className={componentClassname} {...forwardedProps}>
        {children}
      </div>
    )
  }
}

export default Card
