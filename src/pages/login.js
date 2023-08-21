import { Button, Form, Input, Space } from 'antd';
import { useEffect, useState } from 'react';
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import auth from "@/firebase/firebase.auth.js";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import HomePageLayout from '@/layout/HomePageLayout';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const router = useRouter();
    const [form] = Form.useForm();
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    console.log(user);
    const [submittable, setSubmittable] = useState(false);
    const values = Form.useWatch([], form);
    useEffect(() => {
        form
            .validateFields({
                validateOnly: true,
            })
            .then(
                () => {
                    setSubmittable(true);
                },
                () => {
                    setSubmittable(false);
                },
            );
    }, [values, form]);

    const onFinish = (values) => {
        createUserWithEmailAndPassword(values.email, values.password);
        router.push("/")
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <HomePageLayout>
            <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                <div
                    className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
                >
                    <div
                        className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                    >
                        <div className="my-3 text-4xl font-bold tracking-wider text-center">
                            <a href="#">PC BUILDER</a>
                        </div>
                        <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                            With the power of pc builder, you can now focus only on functionaries for your digital products, while leaving the
                            UI design on us!
                        </p>
                        <p className="flex flex-col items-center justify-center mt-10 text-center">
                            <span>Dont have an account?</span>
                            <a href="#" className="underline">Get Started!</a>
                        </p>
                        <p className="mt-6 text-sm text-center text-gray-300">
                            Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
                        </p>
                    </div>
                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
                        <Form
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            form={form} name="validateOnly" layout="vertical" autoComplete="off" className="flex flex-col space-y-5">
                            <Form.Item
                                name="email"
                                label="email"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                label="password"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item>
                                <Space>
                                    <Button htmlType="submit" disabled={!submittable}>
                                        Submit
                                    </Button>
                                    <Button htmlType="reset">Reset</Button>
                                </Space>
                            </Form.Item>
                            <div className="flex flex-col space-y-5">
                                <span className="flex items-center justify-center space-x-2">
                                    <span className="h-px bg-gray-400 w-14"></span>
                                    <span className="font-normal text-gray-500">or login with</span>
                                    <span className="h-px bg-gray-400 w-14"></span>
                                </span>
                                <div className="flex flex-col space-y-4">
                                    <Button
                                        onClick={() =>
                                            signIn("github", {
                                                callbackUrl: `http://localhost:3000/`,
                                            })
                                        }
                                        className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                                    >
                                        <span>
                                            <svg
                                                className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span className="text-sm font-medium text-gray-800 group-hover:text-white">Github</span>
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            signIn("google", {
                                                callbackUrl: `http://localhost:3000/`,
                                            })
                                        }

                                        className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                    >
                                        <FcGoogle size={35} className="p-1" />
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </HomePageLayout>
    )
}

export default LoginPage;