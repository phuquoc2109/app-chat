import React from 'react';
import { Row, Col, Button, Typography} from 'antd';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';


const {Title} = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {

    const handleLogin = async (provider) => {
        const { additionalUserInfo, user} = await auth.signInWithPopup(provider);
        if ( additionalUserInfo?.isNewUser){
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName?.toLowerCase()),
            });
        }
    }

        return (
            <div>
                <Row justify="center" style={{height: 800}}>
                    <Col span={8}>
                        <Title style={{textAlign: 'center' , padding: '10px', fontSize: '50px', fontFamily: 'serif'}} >Fun Chat<i style={{color:"#1E90FF" , marginLeft:"10px", fontSize:"40px" }} class="fab fa-facebook-messenger"></i></Title>
                        <Button 
                        onClick={() =>handleLogin(googleProvider)}
                        style={{width: '100%', marginBottom: 5}}>
                            <i style={{color:"red", fontWeight: 'bold' , marginRight:"10px", fontSize:"20px"}} class="fab fa-google-plus-g"></i>Đăng nhập bằng Google
                        </Button>
                        <Button
                        onClick={() =>handleLogin(fbProvider)}
                        style={{width: '100%'}}>
                            <i style={{color:"blue", fontWeight: 'bold' , marginRight:"10px", fontSize:"20px"}} class="fab fa-facebook-square"></i>Đăng nhập bằng Facebook
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
