import React from 'react';
import ReactDOM from 'react-dom/client';

class MySterling extends React.Component {
  render () {
    const headStyle = {
      color: "orange",
      backgroundColor: "blue",
      fontFamily: "Arial",
      padding: "5px",

    };
    const myStyle = {
      color: "green",
      backgroundColor: "pink",
      fontFamily: "Times New Roman",
      padding: "20px"
    };
    return (
      <div> 
        <h1 style ={headStyle}> Hi </h1>
        <p style={myStyle}> How are you </p>

      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MySterling/>);