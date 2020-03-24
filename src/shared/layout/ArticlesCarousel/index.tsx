import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import css from './ArticlesCarousel.module.css';

const ArticlesCarousel = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <header className={css.splashSection}>
            <Carousel
                className={css.carousel}
                activeIndex={index}
                direction={direction}
                onSelect={handleSelect}
            >
                <Carousel.Item
                    className={css.carouselItem}
                    style={{
                        backgroundImage:
                            'url(https://37fje61jitko1u4w2m10q26t-wpengine.netdna-ssl.com/wp-content/uploads/revslider/main/velocity-billboard-background.jpg)',
                    }}
                >
                    <Carousel.Caption className={css.carouselCaption}>
                        <h3 className={css.h3}>Fast Page Speed</h3>
                        <p>The pages load quick!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item
                    className={css.carouselItem}
                    style={{
                        backgroundImage:
                            'url(https://pixabay.com/get/55e4dc434850af14f6da8c7dda2a3478143bdff85254794c75287dd49e4b_1280.jpg)',
                    }}
                >
                    <Carousel.Caption className={css.carouselCaption}>
                        <h3 className={css.h3}>Crawlable Pages with React</h3>
                        <p>React with SSR Out of the box by @Brdjx.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item
                    className={css.carouselItem}
                    style={{
                        backgroundImage:
                            'url(https://pixabay.com/get/52e6d24a4c54af14f6da8c7dda2a3478143bdff85254794c75287dd6944b_1280.jpg)',
                    }}
                >
                    <Carousel.Caption className={css.carouselCaption}>
                        <h3>This is a Sample</h3>
                        <p>Just a sample application.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </header>
    );
};

export default ArticlesCarousel;
