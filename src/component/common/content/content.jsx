import React from 'react';
const content = {
  padding: '16px'
}

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={content}>
        {
          this.props.children
        }
      </div>
    );
  }
}

export default Content;
