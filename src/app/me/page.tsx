import { cookies } from "next/headers";

import envConfig from "@/config";
import ProfileClient from "@/app/me/profile";
import accountApiRequest from "@/apiRequests/account";

const Profile = async () => {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");

  const result = await accountApiRequest.me(sessionToken?.value ?? "");

  return (
    <div>
      <h1>Profile</h1>
      <div>Xin chào {result.payload.data.name}</div>
      <ProfileClient />
    </div>
  );
};

export default Profile;
