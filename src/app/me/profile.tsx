"use client";

import accountApiRequest from "@/apiRequests/account";
import { useEffect } from "react";

const ProfileClient = () => {
  useEffect(() => {
    const fetchRequest = async () => {
      const result = await accountApiRequest.meClient();
      console.log(">> Check | result:", result);
    };
    fetchRequest();
  }, []);
  return <div>profile</div>;
};

export default ProfileClient;
