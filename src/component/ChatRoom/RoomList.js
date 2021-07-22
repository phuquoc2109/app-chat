import { PlusSquareOutlined } from '@ant-design/icons';
import { Button, Collapse, Typography } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../Context/AppProvider';

const {Panel} = Collapse;
const PanelStyled = styled(Panel)`
    &&&{
        .ant-collapse-header, p {
            color: white;
        }
        .ant-collapse-content-box {
            padding: 0 40px;
        }
        .add-room{
            color: white;
            padding: 0px;
        }
    }
`;
const LinkStyle = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;
`;

export default function RoomList() {

    const {rooms} = useContext(AppContext);
    const {setIsAddRoomVisible} = useContext(AppContext);
    const {setSelectedRoomId} = useContext(AppContext);
    
    // const { uid } = useContext(AuthContext);

    // const roomCondition = useMemo(() => {
    //     return {
    //         fieldName: 'members',
    //         operator: 'array-contains',
    //         compareValue: uid
    //     }
    // }, [uid])

    // const rooms = useFirestore('rooms', roomCondition);

    // console.log(rooms);
    const handleAddRoom = () => {
        setIsAddRoomVisible(true);
    }
   
    return (
        <Collapse ghost defaultActiveKey={'1'}>
            <PanelStyled header="Danh sách các phòng " key='1'>
                {
                    rooms.map(room => <LinkStyle key={room.id} onClick={() => setSelectedRoomId(room.id)}>{room.name}</LinkStyle>)
                }
                <Button type="text" icon={<PlusSquareOutlined />} className="add-room" onClick={handleAddRoom}>Thêm phòng</Button>
            </PanelStyled>
        </Collapse>
    )
}
