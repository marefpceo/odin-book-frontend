export async function getPosts(profileId) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/posts/${profileId}`,
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
    console.error('Error fetching user profile', error);
    throw error;
  }
}

export async function createPostService(userId, content) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/posts/${userId}/create`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: content,
        }),
      },
    );
    return response;
  } catch (error) {
    console.error('Error creating new post', error);
    throw error;
  }
}

export async function createLikeRecord(userId, postId) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/posts/${userId}/${postId}/like`,
      {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  } catch (error) {
    console.error('Error creating like record', error);
    throw error;
  }
}
