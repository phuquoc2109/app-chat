import React from 'react';
import { Row, Col, Button, Typography} from 'antd';
import firebase, { auth, db } from '../../firebase/config';
import { addDocument } from '../../firebase/services';


const {Title} = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {

    const handleFbLogin = async () => {
        const { additionalUserInfo, user} = await auth.signInWithPopup(fbProvider);
        if ( additionalUserInfo?.isNewUser){
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                provider: additionalUserInfo.providerId,
            });
        }
    }

        return (
            <div>
                <Row justify="center" style={{height: 800}}>
                    <Col span={8}>
                        <Title style={{textAlign: 'center'}} >Fun Chat</Title>
                        <Button style={{width: '100%', marginBottom: 5}}>
                            Đăng nhập bằng Google
                        </Button>
                        <Button
                        onClick={handleFbLogin}
                        style={{width: '100%'}}>
                            Đăng nhập bằng Facebook
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
