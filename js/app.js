function Car(props) {
    return <h2>I am a {props.color} Car!</h2>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('demo'));
  root.render(<Car color="red"/>);