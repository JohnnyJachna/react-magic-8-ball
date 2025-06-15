function AgainButton ({onClick}) {
  
  return (
    <button 
      type="button" 
      className="againButton" 
      onClick={onClick}>
      Ask Again?
    </button> 
  )
}

export default AgainButton