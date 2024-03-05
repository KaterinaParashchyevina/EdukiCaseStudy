import React, { useEffect, useState, useReducer, useRef } from "react"
import {View, Text, TextInput, ActivityIndicator} from 'react-native'
import { fetchItems } from "../api/items-api"
import { actionCreators, initialState, reducer } from './../reducers/items'
import { FlatList } from "react-native-gesture-handler"
import { ItemCard } from "../components/itemCard"
import {styles} from './Main.styles'

export const Main = () => {
    const [searchValue, setSearchValue] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)
    const [page, setPage] = useState(1);
    const {loading, items, error} = state; 
    const flatListRef = useRef()

    const loadItems = () => {
        fetchItems(searchValue, page).then(response => {
            if(page > 1) {
                dispatch(actionCreators.success([...items, ...response.materials]))

            } else {
                dispatch(actionCreators.success(response.materials))
                flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
            }
        }).catch(e => {
            dispatch(actionCreators.failure())
        })
    }

    useEffect(()=>{
        loadItems()
    },[searchValue, page])

    const handleOnEndReached = () => {
        setPage(prevState => prevState + 1)
    }
    const onSearchValueChange = (value) => {
        setSearchValue(value)
        setPage(1)
    }
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Search</Text>
            </View>
            <View  style={styles.container}>
                <TextInput
                    value={searchValue}
                    onChangeText={onSearchValueChange}
                    placeholder="Search"
                    style={styles.input}
                />
                {!!items.length &&
                <FlatList
                    ref={flatListRef}
                    data={items}
                    renderItem={({item, index})=> <ItemCard data={item} key={index} />}
                    showsVerticalScrollIndicator={false}
                    onEndReached={handleOnEndReached}
                />}
                {loading && 
                    <View>
                        <ActivityIndicator/>
                    </View> 
                }
                {error && 
                    <View>
                        <Text>Something went wrong! Please try again.</Text>
                    </View>
                }
            </View>
        </View>
    )
} 