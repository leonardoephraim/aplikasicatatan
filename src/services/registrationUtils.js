const registerUser = async (userData) => {
  try {
    console.log('Registering user:', userData);
    const response = await fetch('your_registration_api_endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error('Error registering user');
  }
};

export default registerUser;
