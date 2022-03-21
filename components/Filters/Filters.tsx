import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import cx from "classnames";
import Slider from "react-slick";

import { FiltersProps } from "./IFilters";

const Filters: FunctionComponent<FiltersProps> = ({
  activeSection,
  setActiveSection,
  categories,
}) => {
  const navigate = useNavigate();

  const initialSlide =
    categories.findIndex(
      (category) => category.title === activeSection.title
    ) ?? 0;

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    initialSlide,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          dots: true,
        },
      },
      {
        breakpoint: 892,
        settings: {
          slidesToShow: 4,
          dots: true,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  useEffect(() => {
    console.log(sliderRef.current);
    sliderRef.current?.slickGoTo(initialSlide);
  }, [initialSlide]);

  return (
    <div className="w-full">
      <Slider {...sliderSettings} ref={(ref) => (sliderRef.current = ref)}>
        {categories.map((category) => {
          const isActive = category.title === activeSection.title;

          return (
            <div
              className="button leading-3 flex items-center justify-center border-2 rounded-md border-primary ml-3 text-white heading p-[2px] cursor-pointer h-[45px] w-[120px!important] text-[16px] mx-auto"
              key={category.title}
            >
              <div
                className={cx(
                  "button-inner p-3 w-full h-full flex items-center justify-center rounded-sm",
                  {
                    "bg-gradient-to-l from-primary to-secondary": isActive,
                  }
                )}
                onClick={() => {
                  setActiveSection(category);
                  navigate(`/${category.title.toLowerCase()}`);
                }}
              >
                {category.title}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Filters;
