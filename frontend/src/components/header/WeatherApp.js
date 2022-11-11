import { useEffect, useState } from 'react'
import Loading from './Loading'
import WeatherForm from './WeatherForm'
import WeatherDetails from './WeatherDetails'
import WeatherMap from './WeatherMap'

export default function WeatherApp() {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        loadInfo()
    }, [])

    useEffect(() => {
        document.title = `Weather | ${weather?.location.country}`
    }, [weather])

    async function loadInfo(city = 'France') {
        try {
            const data = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
            )
            const response = await data.json()
            setWeather(response)
        } catch (error) {}
    }

    function handleChangeCity(city) {
        setWeather(null)
        loadInfo(city)
    }

    return (
        <div className="weather-app">
            <WeatherForm onChangeCity={handleChangeCity} />
            {weather ? (
                <>
                    <WeatherDetails weather={weather} />{' '}
                    <WeatherMap weather={weather} />
                </>
            ) : (
                <Loading />
            )}
        </div>
    )
}
