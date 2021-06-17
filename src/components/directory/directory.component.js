import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import section from "./directory.data";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: section
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem
            key={section.div}
            title={section.title}
            imgUrl={section.imageUrl}
            size={section.size}
            linkUrl={section.linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
