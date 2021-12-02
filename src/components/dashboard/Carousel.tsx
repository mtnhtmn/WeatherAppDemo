import React from 'react';
import styled from "styled-components";
import Carousel, {SkipCallbackOptions, StateCallBack} from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselButtonRightIcon from '../../svg/ArrowButtonLeftIcon.svg?component'
import CarouselButtonLeftIcon from '../../svg/ArrowButtonRightIcon.svg?component'



const HourlyForecastItemWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 30px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;

  }


`;

const HourlyForecastItemDay = styled.div`
    

`;

const HourlyForecastItemTemperature = styled.div`
    margin-top: 13px;
`;

const HourlyForecastIcon = styled.img`
    width: 40px;
    height: 30px;
    margin-top: 21px;
`;

const HourlyForecastWrapper = styled.div`
  position: relative;
`;

const CarouselButtonsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: end;
  padding-right: 50px;;
  
`

const CarouselButtonRightStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`

const CarouselButtonLeftStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 4
    }
};

interface ICarouselButtonProps {
    previous: () => void;
    next: () => void;
}

const ButtonGroup = function({ next, previous }:ICarouselButtonProps) {
    return (
        <CarouselButtonsContainer>
            <CarouselButtonRightStyle  onClick={() => previous()}>
                <CarouselButtonRightIcon/>
            </CarouselButtonRightStyle>
            <CarouselButtonLeftStyle onClick={() => next()}>
                <CarouselButtonLeftIcon/>
            </CarouselButtonLeftStyle>
        </CarouselButtonsContainer>
    );
}

interface IProps {
    selectedHourlyForecast: any
}


const HourlyForecast = function({selectedHourlyForecast}: IProps) {
    const forecastIconNumberHandler = (iconNumber: number) => {
        if (iconNumber < 10) {
            return `0${iconNumber}`;
        }
        return iconNumber;
    };


    const displayHourlyForecast = selectedHourlyForecast.map((hourlyForecast: any, index: number) => (
        <HourlyForecastItemWrapper key={index}>
            <HourlyForecastItemDay>
                {new Date(hourlyForecast.DateTime).getHours()}
                :
                {new Date(hourlyForecast.DateTime).getMinutes()}
                {new Date(hourlyForecast.DateTime).getMinutes()}
            </HourlyForecastItemDay>
            <HourlyForecastItemTemperature>
                {hourlyForecast.Temperature.Value}
            </HourlyForecastItemTemperature>
            <HourlyForecastIcon
                src={`https://developer.accuweather.com/sites/default/files/${forecastIconNumberHandler(hourlyForecast.WeatherIcon)}-s.png`}
                alt="Icon"
            />
        </HourlyForecastItemWrapper>

    ));
    return (
        <HourlyForecastWrapper>
            <Carousel arrows={false} responsive={responsive}  centerMode customButtonGroup={<ButtonGroup/>} renderButtonGroupOutside>
                {displayHourlyForecast}
            </Carousel>
        </HourlyForecastWrapper>

    );
}

export default HourlyForecast;