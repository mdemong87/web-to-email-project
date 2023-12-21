// import Swiper core and required modules
import { A11y, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SingleBanner from './SingleBanner';

export default function Banner() {
    return (
        <div className="h-screen">

            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    stopOnLastSlide: false,
                }}
                navigation
            >
                <SwiperSlide>
                    <SingleBanner sl="1" />
                </SwiperSlide>
                <SwiperSlide>
                    <SingleBanner sl="2" />
                </SwiperSlide>
                <SwiperSlide>
                    <SingleBanner sl="3" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}