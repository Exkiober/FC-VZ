
import Typewriter from '../components/animation/TypeWriter';

const Test_TypeWriter = () => {

    const textArray = [
        "A normal person but is just really industrious and passionate in Tech.",
        "When something is important enough, i will do it even though it is not in my favour"
    ];
    
  return (
    <div>
      <Typewriter toRotate={textArray} period={500} stopTime={2000} typingSpeed={100} />
    </div>
  )
}

export default Test_TypeWriter;