import React from "react";
import styled from "styled-components";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import Cloud from "../../svg/Cloud";
import { ICity } from "../../store/slices/citySlice";
import { IWeatherData } from "../../store/slices/weatherSlice";
import StarIconButton from "../../svg/StarIconButton.svg?component";
import { RootState } from "../../store/store";


const CurrentWeatherContainer = styled.div`
  margin-top: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.media.mobile} {
    align-items: center;
    margin-top: 0;
  }
`;

const FavoriteButton = styled.button`
  outline: none;
  width: 200px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #FFFFFF;
  box-shadow: inset 2px -3px 6px rgba(0, 0, 0, 0.1), inset -6px 4px 4px rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  line-height: 31px;
  gap: 5px;

  &:hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }

`;

const WeatherDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const CityName = styled.div`
  font-weight: bold;
  font-style: normal;
  font-size: 50px;
  line-height: 34px;
  color: #FFFFFF;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
  @media ${({ theme }) => theme.media.mobile} {
    font-size: 22px;
  }

`;

const TemperatureContainer = styled.div`
  display: flex;
  line-height: 135px;

`;

const TemperatureNumber = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 73px;
  color: #FFFFFF;
  height: 120px;
  

`;

const WeatherText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 37px;
  color: #FFFFFF;
  opacity: 0.6;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
  @media ${({ theme }) => theme.media.mobile} {
    display: flex;
    justify-content: center;
  }


`;

const CurrentDate = styled.div`
  font-style: normal;
  font-weight: lighter;
  font-size: 19px;
  line-height: 25px;
  color: #FFFFFF;
  opacity: 0.6;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
`;

interface IProps {
  selectedCity: ICity | null;
  selectedWeatherData: IWeatherData | null;

}

const CurrentWeather = function({ selectedCity, selectedWeatherData }: IProps) {

  const useStore: TypedUseSelectorHook<RootState> = useSelector;
  const weatherUnit = useStore((state) => state.uiReducer.weatherUnit);



  const date = React.useMemo(() => {
    if (selectedWeatherData) {
      return new Date(selectedWeatherData?.LocalObservationDateTime).toDateString();
    }
    return null;
  }, [selectedWeatherData]);


  return selectedWeatherData && selectedCity ? (
    <CurrentWeatherContainer>
      <CityName>
        {selectedCity.LocalizedName}
      </CityName>
      <TemperatureContainer>
        <Cloud />
        <TemperatureNumber>
          {selectedWeatherData.Temperature[weatherUnit].Value}
        </TemperatureNumber>
      </TemperatureContainer>
      <WeatherDescription>
        <div>
          <WeatherText>
            {selectedWeatherData.WeatherText}
          </WeatherText>
          <CurrentDate>
            {date}
          </CurrentDate>
        </div>
        <FavoriteButton>
          <StarIconButton />
          Add to Favorites
        </FavoriteButton>
      </WeatherDescription>
    </CurrentWeatherContainer>
  ) : null;


};

export default CurrentWeather;