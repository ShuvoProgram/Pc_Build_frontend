import Link from 'next/link'
import { AiFillCaretDown } from 'react-icons/ai';
import { Dropdown, Space, Avatar } from 'antd';
import React, { useState } from 'react'
import Image from 'next/image';
import Logo from '../assets/pcBuildLogo.jpg';
import { signOut, useSession } from 'next-auth/react';
import { UserOutlined } from '@ant-design/icons';
import auth from "@/firebase/firebase.auth.js";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

export default function Navbar() {
    const { data: session } = useSession();
    const [user, loading] = useAuthState(auth);
    const [authSignOut, error] = useSignOut(auth);
    console.log("From home", user);
    console.log(session)
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
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

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <header className="text-white body-font">
            <div className="bg-blue-600 mx-auto flex flex-wrap p-3 md:flex-row flex-col items-center justify-between">
                <div className='flex'>
                    <Link
                        href="/"
                        className='font-bold text-xl text-white hover:text-white'
                    >
                        <Image src={Logo} width={150} height={150} alt='PC Builder' />
                    </Link>
                    <nav className="mr-auto ml-4 py-1 pl-4 border-l border-white flex flex-wrap items-center text-base justify-center hover:text-white">
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className='hover:text-white'>
                                    Categories
                                    <AiFillCaretDown />
                                </Space>
                            </a>
                        </Dropdown>
                    </nav>
                </div>
                <div className='flex items-center'>
                    <Link href="/pc-build" className="inline-flex items-center text-white font-bold bg-gray-900 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 hover:text-white">PC BUILDER </Link>
                    <div className='items-center flex ml-4 md:mt-0 mt-2'>
                        {
                            session?.user ? (
                                <Link href='/profile'>
                                    <Avatar size="large" src={session.user.image} />
                                </Link>
                            ) : user?.email ? (
                                <Link href='/profile'>
                                    <Avatar size="large" src={user.photoURL} />
                                </Link>
                            ) : (
                                <Avatar size="large" icon={<UserOutlined />} />
                            )
                        }
                        <button className='flex flex-col ml-2 text-sm'>
                            Account
                            {
                                session?.user ? (
                                    <span onClick={() => signOut()} className='text-xs'>Logout</span>
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
                                    <Link href="/login" className='text-xs'>Register/Login</Link>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
