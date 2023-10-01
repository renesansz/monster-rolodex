import { Component } from "react"
import { CardsListProps } from "./CardsList.types"

import styles from "./CardsList.module.css"
import Card from "../Card"

class CardsList extends Component<CardsListProps> {
  render() {
    const monsterCards = this.props.monsters.map((monster) => (
      <Card>
        <img
          alt={`monster ${monster.name}`}
          src={`https://robohash.org/${monster.id}/set=set2&size=140x140`}
        />
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
      </Card>
    ))

    return (
      <div className={styles.cardsList}>
        {monsterCards}
      </div>
    )
  }
}

export default CardsList
