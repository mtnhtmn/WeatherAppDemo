import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Search, ISearchProps} from '../components/Search'

const meta: Meta = {
    title: 'Input',
    component: Search
}

export default meta


// @ts-ignore
export const CitySearch = () => <Search data={[]}
                                     onInputChange={() => null}
                                     placeholder={'Search for a city'}
                                     renderListItem={() => <div></div>}
                                     inputValue={''}
                                     variant={'primary'}>
</Search>


// @ts-ignore
export const FavoriteSearch = () => <Search data={[]}
                                        onInputChange={() => null}
                                        placeholder={'Search for a favorite city'}
                                        renderListItem={() => <div></div>}
                                        inputValue={''}
                                        variant={'primary'}>
</Search>