import { Component } from "react";
import { SearchBoxProps } from "./SearchBox.types";

import styles from "./Searchbox.module.css"

class SearchBox extends Component<SearchBoxProps> {
  render() {
    return (
      <input
        className={styles.searchBox}
        type="search"
        placeholder="Search..."
        onChange={this.props.onChange}
        value={this.props.value}
      />
    )
  }
}

export default SearchBox
