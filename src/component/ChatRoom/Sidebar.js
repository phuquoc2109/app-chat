import React from 'react'
import RoomList from './RoomList'
import UserInfo from './UserInfo'
import { Row, Col} from 'antd';
import styled from 'styled-components';


const SidebarStyled = styled.div`
    background: #5f0e40;
    color: white;
    height: 100vh;
`;
export default function Sidebar() {
    return (
        <SidebarStyled>
            <Row>
                <Col span={24}><UserInfo /></Col>
                <Col span={24}><RoomList /></Col>
            </Row>
        </SidebarStyled>
    );}
