import Link from 'next/link';
import { AiFillCaretDown } from 'react-icons/ai';
import { Dropdown, Space, Avatar, Button, Drawer } from 'antd';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/pcBuildLogo.jpg';
import { signOut, useSession } from 'next-auth/react';
import { UserOutlined } from '@ant-design/icons';
import auth from '@/firebase/firebase.auth.js';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

export default function Navbar() {
    const { data: session } = useSession();
    const [user] = useAuthState(auth);
    const [authSignOut] = useSignOut(auth);
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const showDefaultDrawer = () => {
        setSize('default');
        setOpen(true);
    };
    const showLargeDrawer = () => {
        setSize('large');
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const items = [
        {
            key: '1',
            label: (
                <Link href="/category/processor" >
                    CPU / Processor
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link href="/category/motherboard" >
                    Motherboard
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link href="/category/ram" >
                    RAM
                </Link>
            ),
        },
        {
            key: '4',
            label: (
                <Link href="/category/psu" >
                    Power Supply Unit
                </Link>
            ),
        },
        {
            key: '5',
            label: (
                <Link href="/category/storage" >
                    Storage Device
                </Link>
            ),
        },
        {
            key: '6',
            label: (
                <Link href="/category/monitor" > Monitor </Link>
            ),
        },
        {
            key: '7',
            label: (
                <Link href="/category/others" > Others </Link>
            ),
        },
    ];

    return (
        <header className="text-white body-font">
            <div className="bg-blue-600 mx-auto p-3 md:flex-row flex-col items-center justify-between">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <Link href="/" className="font-bold text-xl text-white hover:text-white">
                            <Image src={Logo} width={150} height={150} alt="PC Builder" />
                        </Link>
                        <Dropdown
                            className="md:hidden ml-4"
                            menu={{
                                items,
                            }}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className="hover:text-white">
                                    Categories <AiFillCaretDown />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <nav className="hidden md:flex md:ml-auto md:mr-4 py-1 pl-4 border-l border-white items-center">
                        <Dropdown
                            className="hidden md:block"
                            menu={{
                                items,
                            }}
                        >
                            <a onClick={(e) => e.preventDefault()} className="hover:text-white">
                                Categories <AiFillCaretDown />
                            </a>
                        </Dropdown>
                    </nav>
                    <div className="flex items-center">
                        <Link
                            href="/pc-build"
                            className="inline-flex items-center text-white font-bold bg-gray-900 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 hover:text-white md:ml-4"
                        >
                            PC BUILDER
                        </Link>
                        <div className="items-center flex ml-4 md:mt-0 mt-2">
                            {session?.user ? (
                                <Link href="/profile">
                                    <Avatar size="large" src={session.user.image} />
                                </Link>
                            ) : user?.email ? (
                                <Link href="/profile">
                                    <Avatar size="large" src={user.photoURL} />
                                </Link>
                            ) : (
                                <Avatar size="large" icon={<UserOutlined />} />
                            )}
                            <button className="flex flex-col ml-2 text-sm">
                                Account
                                {session?.user ? (
                                    <span onClick={() => signOut()} className="text-xs">
                                        Logout
                                    </span>
                                ) : user?.email ? (
                                    <button
                                        onClick={async () => {
                                            const success = await authSignOut();
                                            if (success) {
                                                alert('You are sign out');
                                            }
                                        }}
                                    >
                                        Sign out
                                    </button>
                                ) : (
                                    <Link href="/login" className="text-xs">
                                        Register/Login
                                    </Link>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Space>
                            <Button type="primary" onClick={showDefaultDrawer} className="flex items-center justify-center p-2 ml-2 text-white focus:outline-none">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            </Button>
                        </Space>
                        {/* {visible && (
                            <div className="md:hidden absolute top-0 right-0 bg-blue-600 w-64 h-screen z-50 p-4">
                                <div className="flex justify-end">
                                    <button
                                        onClick={onClose}
                                        className="flex items-center justify-center p-2 text-white focus:outline-none"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                                <nav className="flex flex-col space-y-2">
                                    {items.map(item => (
                                        <div key={item.key} className="hover:text-white">
                                            {item.label}
                                        </div>
                                    ))}
                                </nav>
                            </div>
                        )} */}
                        <Drawer
                            title={`${size} Drawer`}
                            placement="right"
                            size={size}
                            onClose={onClose}
                            open={open}
                            extra={
                                <Space>
                                    <Button onClick={onClose}>Cancel</Button>
                                    <Button type="primary" onClick={onClose}>
                                        OK
                                    </Button>
                                </Space>
                            }
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </div>
                </div>
            </div>
        </header>
    );
}
