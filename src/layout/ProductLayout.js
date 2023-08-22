
import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Layout, Menu, theme } from 'antd';
const { Content, Sider } = Layout;
const items1 = ['Stock', 'Series', 'Socket'].map((key) => ({
    key,
    label: `nav ${key}`,
}));


import { Slider } from 'antd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const onChange = (value) => {
    console.log('onChange: ', value);
};
const onAfterChange = (value) => {
    console.log('onAfterChange: ', value);
};
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});
const ProductLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Navbar />
            <Content
                style={{
                    padding: '0 50px',
                    marginBottom: "50px"
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Availability</Breadcrumb.Item>
                    <Breadcrumb.Item>Series</Breadcrumb.Item>
                    <Breadcrumb.Item>Type</Breadcrumb.Item>
                    <Breadcrumb.Item>Socket</Breadcrumb.Item>
                    <Breadcrumb.Item>Number of Core</Breadcrumb.Item>
                    <Breadcrumb.Item>Number of Thread</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: colorBgContainer, }}>

                    <Sider style={{ background: colorBgContainer }} width={200} className='hidden md:block'>
                        <Menu className='mb-5' mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub']} >
                            <Card hoverable className='p-0 m-0'>
                                <div className="">
                                    Price Range
                                </div>
                                <hr />
                                <Slider
                                    range
                                    step={10}
                                    defaultValue={[20, 50]}
                                    onChange={onChange}
                                    onAfterChange={onAfterChange}
                                />
                            </Card>
                        </Menu>

                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub']}

                            items={items2}
                        />
                    </Sider>
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Content>
            <Footer />
        </Layout>
    );
};
export default ProductLayout;