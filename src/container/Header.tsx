import React, {useState} from 'react';
import {useQuery} from 'react-query';
import Search from '../components/Search';
import City from '../components/City';
import {fetchCity} from '../services/api'

const Header = function () {
    const [inputValue, setInputValue] = useState('')
    const {data, refetch} = useQuery('city', () => fetchCity(inputValue), {enabled: false});

    React.useEffect(() => {
        if (inputValue) {
            refetch();
        }
    }, [inputValue]);

    return (
        <div>
            <Search
                inputValue={inputValue}
                onInputChange={setInputValue}
                data={data}
                renderListItem={(city) => (
                    <div style={{
                        padding: 20, display: 'flex', alignItems: 'center', height: 50,
                    }}
                    >
                        {city.LocalizedName}
                    </div>
                )}
            />
        </div>
    );
};

export default Header;
