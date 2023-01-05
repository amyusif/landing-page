

const Card = ({name, email, id}) => {
  return (
    <div className='card-container'>
        <div className="image-container">
      <img src={`https://robohash.org/${id}`} alt="robot" />
        </div>
        
        
      <div className="name">
        <h3>{name}</h3>
        </div>
        <div className="email">
            <h4>{email}</h4>
        </div>
      </div>
  )
}

export default Card
