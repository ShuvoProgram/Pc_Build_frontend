export const getImageUrl = async (image) => {
    const formData = new FormData();
    formData.append('image', image.originFileObj);

    const url = `https://api.imgbb.com/1/upload?key=5f27d941b548ee80fd54f8c811e0d352`; // Replace with your actual imgBB API key

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        if (data && data.data && data.data.display_url) {
            return data.data.display_url;
        } else {
            throw new Error("Error uploading image");
        }
    } catch (error) {
        // console.error("Error uploading image:", error);
        return null; // Return null or handle the error as needed
    }
};
