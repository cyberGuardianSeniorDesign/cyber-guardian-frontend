import React from 'react'
import './carousel.css' //will be added later

const Carousel = (props) => {
    const {children, show} = props
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [length, setLength] = React.useState(children.length)
    const [touchPosition, setTouchPosition] = React.useState(null)

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            next()
        }
    
        if (diff < -5) {
            prev()
        }
    
        setTouchPosition(null)
    }
    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    // Set the length to match current children from props
    React.useEffect(() => {
        setLength(children.length)
    }, [children])

    return (
        <div className="carousel-container">
            {console.log(show)}
            <div className="carousel-wrapper">
                {/* You can alwas change the content of the button to other things */}
                {
                    currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                }
                <div className="carousel-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div  className={`carousel-content show-${show}`}
                    style={{ transform: `translateX(-${currentIndex * (100 / show)}%)`,  }}>
                        <div
                            className="carousel-content"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
                {
                    currentIndex < (length - show) &&
                    <button onClick={next} className="right-arrow">
                        &gt;
                    </button>
                }
            </div>
        </div>
    )
}

export default Carousel