const ProgressBar = (props) => {
  const { bgcolor, completed,label } = props;

  const containerStyles = {
    height: 20,
    width: '80%',
    backgroundColor: "#666666",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    
  }

  return (
    <div style={containerStyles}>
    
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
      <h4>{label}</h4>
    </div>
  );
};

export default ProgressBar;