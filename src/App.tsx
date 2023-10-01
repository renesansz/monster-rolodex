import { ChangeEvent, Component } from 'react'

import { fetchUsers } from './api/users'
import { AppState } from './types/app'

import { CardsList } from "./components/CardsList"
import { SearchBox } from './components/SearchBox'

class App extends Component<object, AppState> {
  constructor() {
    super()

    this.state = {
      monsters: [],
      filteredMonsters: [],
      searchFilter: ''
    }
  }

  async componentDidMount(): void {
    const users = await fetchUsers()
    this.setState({
      monsters: users,
      filteredMonsters: users,
    })
  }

  updateFilteredMonsters = () => {
    this.setState({
      filteredMonsters: this.state.monsters.filter(
        (monster) => monster.name.toLowerCase().includes(this.state.searchFilter.toLowerCase())
      )
    })
  }

  onSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchFilter: evt.target.value
    }, this.updateFilteredMonsters)
  }

  render() {
    return (
      <div className="App">
        <SearchBox
          onChange={this.onSearch}
          value={this.state.searchFilter}
        />
        <CardsList monsters={this.state.filteredMonsters} />
      </div>
    )
  }
}

export default App
