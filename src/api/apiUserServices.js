// Gets all users and related friendships, if any.
export async function getUsers() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Error returning all users', error);
    throw error;
  }
}

// Sends add request to selected user
export async function requestFriend(userId, userToAdd) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/users/${userId}/add`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userToAdd: userToAdd,
        }),
      },
    );
    return response;
  } catch (error) {
    console.error('Error sending friend request', error);
    throw error;
  }
}

// Updates friendship status
export async function updateFriendship(userId, friendId, status) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/users/${userId}/update`,
      {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user1Id: userId,
          status: status,
        }),
      },
    );
    return response;
  } catch (error) {
    console.error('Error updating friendship status', error);
    throw error;
  }
}
