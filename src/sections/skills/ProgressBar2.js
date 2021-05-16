const ProgressBar2 = (props) => {
    const { bgcolor, completed,label } = props;
  
    const containerStyles = {
      height: 22,
      width: '80%',
      backgroundColor: "#ccb494",
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
      padding: 12,
      color: 'white', 
      
    }


    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
        <h6>{label}</h6>
      </div>
    );
  };
  
  export default ProgressBar2;