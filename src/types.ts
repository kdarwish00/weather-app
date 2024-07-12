export type ConvertTempType = (temp:number, unit:string ) => number;

export interface WeatherSearchProps {
    location: LocationType;
    setLocation: React.Dispatch<React.SetStateAction<LocationType>>;
}

interface WeatherProps {
    unit: string;
}

export interface Day  {
    humidity: number; 
    cloudcover:number;
    tempmin: number; 
    tempmax: number 
    sunrise:string;
    sunset: string;
    conditions: string;
    temp: number; 
    datetime: string;

}
export interface DayOverviewProps extends WeatherProps {
    day: Day;
}

export interface FiveDayForecastProps extends WeatherProps {
    days: Day[];
}

export interface WeatherTodayProps extends WeatherProps {
    weatherData: WeatherDataInterface;
}
export interface WeatherDataInterface {
    address: string;
    days: Day[];
    latitude: number;
    longitude: number;
    queryCost: number;
    resolvedAddress: string;
    timezone: string;
    tzoffset: number;
}

export type LocationType = string | undefined;