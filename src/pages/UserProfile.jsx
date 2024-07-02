import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const exampleUsers = {
  User1: { name: "User1", coding: "120h", gaming: "30h", activitywatch: "150h" },
  User2: { name: "User2", coding: "110h", gaming: "40h", activitywatch: "140h" },
  User3: { name: "User3", coding: "100h", gaming: "50h", activitywatch: "130h" },
  User4: { name: "User4", coding: "90h", gaming: "60h", activitywatch: "120h" },
  User5: { name: "User5", coding: "80h", gaming: "70h", activitywatch: "110h" },
  User6: { name: "User6", coding: "70h", gaming: "80h", activitywatch: "100h" },
  User7: { name: "User7", coding: "60h", gaming: "90h", activitywatch: "90h" },
  User8: { name: "User8", coding: "50h", gaming: "100h", activitywatch: "80h" },
  User9: { name: "User9", coding: "40h", gaming: "110h", activitywatch: "70h" },
  User10: { name: "User10", coding: "30h", gaming: "120h", activitywatch: "60h" },
  User11: { name: "User11", coding: "20h", gaming: "130h", activitywatch: "50h" },
  User12: { name: "User12", coding: "10h", gaming: "140h", activitywatch: "40h" },
};

const UserProfile = () => {
  const { username } = useParams();
  const user = exampleUsers[username];

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>{user.name}'s Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Coding: {user.coding}</p>
          <p>Gaming: {user.gaming}</p>
          <p>Activity Watch: {user.activitywatch}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;