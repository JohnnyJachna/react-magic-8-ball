import {useState} from "react";

function Form ({onSubmit}) {
  const [isButtonDisabled, setIsButtonDsiabled] = useState(true);
  
  //Prevent empty input
  function handleChange (event) {
    event.target.value.length > 0 ? setIsButtonDsiabled(false) : setIsButtonDsiabled(true);
  }

  return (
    <form className="questionForm" onSubmit={onSubmit}>
      <input 
        type="text" 
        id="text"
        placeholder="Question..."
        onChange={handleChange}
      />
      <button 
        type="submit" 
        className="shakeButton" 
        title="Type question to enable"
        disabled={isButtonDisabled}>
        Shake
      </button>    
    </form>
  )
}

export default Form