import './index.css'

const Card = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details
  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="para">{description}</p>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}
export default Card
