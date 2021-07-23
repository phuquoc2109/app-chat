import { Button, Typography } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../Context/AppProvider'
import { AuthContext } from '../../Context/AuthProvider'
import { auth } from '../../firebase/config'
import './UserInfo.css';

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82,38,83);

    .user-info-name{
        color: white;
        margin-left: 5px;
    }
`;
export default function UserInfo() {
    const {
      user: { displayName, photoURL },
    } = React.useContext(AuthContext);
    const { clearState } = React.useContext(AppContext);
  
    return (
      <WrapperStyled className="user-info">
        <div className="user-info-avatar">
          <Avatar src={photoURL}>
            {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
          </Avatar>
          <Typography.Text className='user-info-name'>{displayName}</Typography.Text>
        </div>
        <Button
        className="user-info-button"
          ghost
          onClick={() => {
            // clear state in App Provider when logout
            clearState();
            auth.signOut();
          }}
        >
          Đăng xuất
        </Button>
      </WrapperStyled>
    );
  }
