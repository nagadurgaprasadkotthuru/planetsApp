// Write your code here
import './index.css'

const PlanetItem = props => {
  const {slideDetails} = props
  const {name, imageUrl, description} = slideDetails
  return (
    <div className="slide">
      <img className="planet-image" alt={`planet ${name}`} src={imageUrl} />
      <h2 className="heading">{name}</h2>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
