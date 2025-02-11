import AnimatedText from "./AnimateedText"
import Cards from "./Cards/Cards"


const Journey = () => {
  return (
    <section id="journey">
      <div className=" container mx-auto">
        <AnimatedText 
        text="My Professional Joourney" 
        textStyles="h2 mb-[30px] text-center" 
        />
        <Cards />
      </div>
    </section>
  )
}

export default Journey