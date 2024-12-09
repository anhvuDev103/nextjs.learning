"use client";

import accountApiRequest from "@/apiRequests/account";
import { handleErrorApi } from "@/lib/utils";
import { useEffect } from "react";

const ProfileClient = () => {
  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const result = await accountApiRequest.meClient();
        console.log(">> Check | result:", result);
      } catch (error) {
        handleErrorApi({ error });
      }
    };
    fetchRequest();
  }, []);
  return <div>profile</div>;
};

export default ProfileClient;
