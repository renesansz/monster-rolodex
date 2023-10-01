import { User } from "../api/users"

export type Monster = User

export type AppState = {
  monsters: Monster[]
  filteredMonsters: Monster[]
  searchFilter: string
}
