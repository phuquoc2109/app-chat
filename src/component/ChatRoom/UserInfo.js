import { Button, Typography } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { auth, db } from '../../firebase/config'
import { AuthContext } from '../../Context/AuthProvider'

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82,38,83);

    .username{
        color: white;
        margin-left: 5px;
    }
`;
export default function UserInfo() {

    const data = useContext(AuthContext);
    console.log(data);

    return (
        <WrapperStyled>
            <div>
                <Avatar src={data.photoURL}>{data.photoURL ? '' : data.displayName && data.displayName.charAt(0).toUpperCase()}</Avatar>
                <Typography.Text className="username">{data.displayName}</Typography.Text>
            </div>
            <Button ghost onClick={() => auth.signOut()}>Đăng xuất</Button>
        </WrapperStyled>
    )
}
