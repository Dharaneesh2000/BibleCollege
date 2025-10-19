// import BannerImage from '../../assets/images/BannerImage.png'

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Banner Image */}
      <div className="w-full">
        <img 
          src="/images/BannerImage.png" 
          alt="Word Bible College Banner" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}

export default HeroSection
