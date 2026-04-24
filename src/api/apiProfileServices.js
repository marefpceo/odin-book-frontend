export async function getProfile(profileId) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/profile/${profileId}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  } catch (error) {
    console.error('Error fetching profile', error);
    throw error;
  }
}

export async function updateProfile(profileId, updates) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/profile/${profileId}/update`,
      {
        method: 'PUT',
        credentials: 'include',
        body: updates,
      },
    );
    return response;
  } catch (error) {
    console.error('Error updating profile', error);
    throw error;
  }
}
