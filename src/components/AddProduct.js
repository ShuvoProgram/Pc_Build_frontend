import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
    Button,
    Form,
    Select,
    Upload,
    Spin
} from 'antd';
import { getImageUrl } from '@/utils/uploadImage';
const { Option } = Select;


const AddProduct = () => {
    const categoryOptions = ['processor', 'motherboard', 'ram', 'psu', 'storage', 'monitor', 'others'];
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        keyFeatures: [],
        category: "",
        price: "",
        status: "In Stock",
        image: "",
        reviews: [],
    });

    const normFile = async (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        const imageFile = e?.fileList[0];
        if (imageFile) {
            const imageUrl = await getImageUrl(imageFile);
            setFormData((prevData) => ({
                ...prevData,
                image: imageUrl, // Update image URL in formData
            }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleKeyFeatureChange = (index, key, value) => {
        const updatedKeyFeatures = [...formData.keyFeatures];
        updatedKeyFeatures[index] = { ...updatedKeyFeatures[index], [key]: value };
        setFormData((prevData) => ({
            ...prevData,
            keyFeatures: updatedKeyFeatures,
        }));
    };

    const handleRemoveKeyFeature = (index) => {
        const updatedKeyFeatures = formData.keyFeatures.filter((_, i) => i !== index);
        setFormData((prevData) => ({
            ...prevData,
            keyFeatures: updatedKeyFeatures,
        }));
    };

    const handleAddKeyFeature = () => {
        setFormData((prevData) => ({
            ...prevData,
            keyFeatures: [...prevData.keyFeatures, { key: "", value: "" }],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/v1/products/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            // console.log(formData)
            if (response.ok) {
                alert("Product added successfully!");
            }
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <Form.Item label="Upload Image">
                    <Upload
                        listType="picture"
                        accept="image/*"
                        action={`http://localhost:3000/`}
                        showUploadList={{ showRemoveIcon: true }}
                        beforeUpload={(file) => {
                            return true;
                        }}
                        onChange={normFile}
                        iconRender={() => {
                            return <Spin></Spin>
                        }}
                        progress={{
                            size: 3,
                            strokeColor: {
                                "0%": "#f0f",
                                "100%": "#ff0"
                            },
                            style: { top: 12 }
                        }}
                    >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </Form.Item>

                <label className="block">
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="block w-full border rounded p-1"
                    />
                </label>
                <Form.Item label="Category">
                    <Select
                        placeholder="Select a category"
                        name='category'
                        onChange={(value) => handleSelectChange("category", value)} // Using handleInputChange function
                        allowClear
                    >
                        {categoryOptions.map(option => (
                            <Option key={option} value={option}>
                                {option}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <label className="block">
                    Price:
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="block w-full border rounded p-1"
                    />
                </label>

                {/* Other input fields for other form fields */}

                <label className="block">
                    Key Features:
                </label>
                {formData.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex space-x-4">
                        <input
                            type="text"
                            value={feature.key}
                            onChange={(e) => {
                                handleKeyFeatureChange(index, "key", e.target.value);
                            }}
                            className="block flex-1 border rounded p-1"
                        />
                        <input
                            type="text"
                            value={feature.value}
                            onChange={(e) => {
                                handleKeyFeatureChange(index, "value", e.target.value);
                            }}
                            className="block flex-1 border rounded p-1"
                        />
                        <button
                            type="button"
                            onClick={() => handleRemoveKeyFeature(index)}
                            className="border rounded p-1 bg-red-500 text-white hover:bg-red-600"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddKeyFeature}
                    className="border rounded p-2 bg-blue-500 text-white hover:bg-blue-600"
                >
                    Add Key Feature
                </button>
                <label className="block">
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="block w-full border rounded p-1"
                    />
                </label>
                <button
                    type="submit"
                    className="border rounded p-2 bg-green-500 text-white hover:bg-green-600"
                >
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;

