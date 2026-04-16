export async function getPosts(profileId) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/posts/${profileId}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response;
  } catch (error) {
    console.error("Error fetching user profile", error);
    throw error;
  }
}
