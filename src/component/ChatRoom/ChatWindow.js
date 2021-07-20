import { UserAddOutlined } from '@ant-design/icons';
import { Button, Tooltip, Avatar, Form , Input } from 'antd';
import React from 'react'
import styled from 'styled-components'
import Message from './Message';


const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    height: 56px;
    padding: 0 16px;
    align-items: center;
    border-bottom: 1px solid rgb(230, 230, 230);
    
    .header__info{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .header__title{
        margin: 0;
        font-weight: bold;
    }
    .header__description{
        font-size: 12px;
    }

    }
`;
const ButtonGroupStyled = styled.div`
    display: flex;
    align-items: center;
`;

const WrapperStyled = styled.div`
    height: 100vh;
`;

const ContentStyled = styled.div`
    height: calc(100% - 56px);
    display: flex;
    flex-direction: column;
    padding: 11px;    
    justify-content: flex-end;
`;

const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 2px 2px 0px;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 2px;

    .ant-form-item{
        flex: 1;
        margin-bottom: 0;
    }
`;

const MessageListStyled = styled.div`
    max-heght: 100%;
    over-flow-y: auto;
`;

export default function ChatWindow() {
    return (
        <WrapperStyled>
            <HeaderStyle>
                <div className="header__info">
                    <p className="header__title">Room 1</p>
                    <span className="header__description">Day la room 1</span>
                </div>
                <ButtonGroupStyled>
                    <Button icon={<UserAddOutlined />} type="text">Mời</Button>
                    
                    
                    <Avatar.Group size='small' maxCount={2}>
                    <Tooltip title="A">
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title="B">
                            <Avatar>B</Avatar>
                        </Tooltip>
                        <Tooltip title="C">
                            <Avatar>C</Avatar>
                        </Tooltip>
                        <Tooltip title="D">
                            <Avatar>D</Avatar>
                        </Tooltip>
                        
                    </Avatar.Group>
                </ButtonGroupStyled>
            </HeaderStyle>
            <ContentStyled>
                <MessageListStyled>
                    <Message text="Test" phoroURL={null} displayName="Quoc" createdAt={11112} />
                    <Message text="Test" phoroURL={null} displayName="Quoc" createdAt={11112} />
                    <Message text="Test" phoroURL={null} displayName="Quoc" createdAt={11112} />
                    <Message text="Test" phoroURL={null} displayName="Quoc" createdAt={11112} />

                </MessageListStyled>
                <FormStyled>
                    <Form.Item>
                        <Input placeholder="Nhập tin nhắn..." bordered={false} autoComplete="off" />
                    </Form.Item>
                    <Button type="primary">Gửi</Button>
                </FormStyled>
            </ContentStyled>
        </WrapperStyled>
    )
}
