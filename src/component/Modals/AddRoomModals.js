import { Form, Input, Modal } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppProvider';
import { AuthContext } from '../../Context/AuthProvider';
import { addDocument } from '../../firebase/services';

export default function AddRoomModals() {
    const {isAddRoomVisible} = useContext(AppContext);
    const {setIsAddRoomVisible} = useContext(AppContext);
    const  {user : {uid}}  = useContext(AuthContext);
    const [form] = useForm();

    const handleOk = () => {
       
        addDocument('rooms', {...form.getFieldsValue(), members: [uid] })
        
        form.resetFields();

        setIsAddRoomVisible(false);

    }

    const handleCancel = () => {

        form.resetFields();
        setIsAddRoomVisible(false);
    }

    return (
        <div>
            <Modal
                title="Tạo phòng"
                visible={isAddRoomVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item label="Tên phòng" name='name'>
                        <Input placeholder="Nhập tên phòng"/>
                    </Form.Item>
                    <Form.Item label="Mô tả" name='description'>
                        <Input.TextArea placeholder="Nhập mô tả"/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
