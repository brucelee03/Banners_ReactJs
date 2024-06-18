import './index.css'

const BannerCardDetails = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <div>
          <button>Show More</button>
        </div>
      </div>
    </li>
  )
}

export default BannerCardDetails
