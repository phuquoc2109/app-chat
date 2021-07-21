import React, { useContext, useState } from 'react'
import { Modal, Form, Input } from 'antd';
import { AppContext } from '../../Context/AppProvider';
import { useForm } from 'antd/lib/form/Form';
import { addDocument } from '../../firebase/services';
import { AuthContext } from '../../Context/AuthProvider';

export default function AddRoomModals() {
    const {isAddRoomVisible} = useContext(AppContext);
    const {setIsAddRoomVisible} = useContext(AppContext);
    const  uid  = useContext(AuthContext);
    const [form] = useForm();

    const handleOk = () => {
        console.log({ formData: form.getFieldsValue() })
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
