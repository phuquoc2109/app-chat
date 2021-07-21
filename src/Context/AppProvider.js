import React, { createContext, useContext, useMemo, useState } from 'react';
import { AuthContext } from './AuthProvider';
import useFirestore from '../hooks/useFirestore';

export const AppContext = createContext();

export default function AppProvider({ children }) {

    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
    const [selectedRoomId, setSelectedRoomId] = useState('');

    const { uid } = useContext(AuthContext);

    const roomsCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid
        }
    }, [uid])

    const rooms = useFirestore('rooms', roomsCondition);
    
    const selectedRoom = useMemo(
        () => rooms.find(
            (room) => room.id === selectedRoomId) || {}
    , [rooms, selectedRoomId]);

    const usersCondition = useMemo(() => {
        return {
            fieldName: 'uid',
            operator: 'in',
            compareValue: selectedRoom.members
        }
    }, [selectedRoom.members]);

    const members = useFirestore('users', usersCondition);
    console.log({members});
    console.log({selectedRoom})
    console.log({rooms})

    return (
        <AppContext.Provider value={ 
                            {
                            rooms,
                            members,
                            selectedRoom,
                            isAddRoomVisible, 
                            setIsAddRoomVisible, 
                            selectedRoomId, 
                            setSelectedRoomId } }>
            { children }
        </AppContext.Provider>
    )
}

