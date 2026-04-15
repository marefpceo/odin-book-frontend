export default async function userLogin(emailInput, passwordInput) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      },
    );
    return response;
  } catch (error) {
    console.error("Error fetching log in", error);
    throw error;
  }
}

export async function validateSession() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/auth/validate-session`,
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
    console.error("Error validating the session", error);
    throw error;
  }
}

export async function userLogout() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/auth/logout`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response;
  } catch (error) {
    console.error("Error fetching log out", error);
    throw error;
  }
}
