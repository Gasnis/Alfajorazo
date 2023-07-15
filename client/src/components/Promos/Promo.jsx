import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const items = [
  {
    src: 'https://cdn.shopify.com/s/files/1/0584/3887/7381/collections/Product-Banner_Alfajores-scaled_1200x1200.jpg?v=1625775435',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://5f35505073.cbaul-cdnwnd.com/b3f1ac6acb8ff55c60af4d07bf114f0d/200000100-c8841c97b6/banner2-1.jpg?ph=5f35505073',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://dolcentina.com/storage/slider_images/Dolcentina/SKctZ7cHuNe1fv1LwhqmsW1bjHCChI8Z2vee2TO4.png',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

function Promo(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="d-block w-100 h-50" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Promo;