import HttpClient from "./axios";

export default async function UserLogin() {
  try {
    const resp = await HttpClient.post("/user/login", {});
    return resp.data;
  } catch (error) {
    console.error("Error during user login:", error);
    throw error;
  }
}
