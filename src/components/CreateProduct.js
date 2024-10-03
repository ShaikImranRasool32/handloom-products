import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = () => {
    const [productDto, setProductDto] = useState({
        name: '',
        brand: '',
        category: '',
        price: '',
        description: ''
    });
    const [imageFile, setImageFile] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProductDto({ ...productDto, [name]: value });
    };

    const handleFileChange = (event) => {
        setImageFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('product', JSON.stringify(productDto));
        formData.append('imageFile', imageFile);

        try {
            const response = await axios.post('/api/products/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Product created:', response.data);
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={productDto.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="brand" value={productDto.brand} onChange={handleChange} placeholder="Brand" required />
            <input type="text" name="category" value={productDto.category} onChange={handleChange} placeholder="Category" required />
            <input type="number" name="price" value={productDto.price} onChange={handleChange} placeholder="Price" required />
            <textarea name="description" value={productDto.description} onChange={handleChange} placeholder="Description" required />
            <input type="file" onChange={handleFileChange} required />
            <button type="submit">Create Product</button>
        </form>
    );
};

export default CreateProduct;
