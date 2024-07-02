import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const exampleUsers = {
  User1: { name: "User1", coding: "120h", gaming: "30h", activitywatch: "150h", achievements: ["Top Coder", "Gaming Guru"], badges: ["🏆", "🎮"] },
  User2: { name: "User2", coding: "110h", gaming: "40h", activitywatch: "140h", achievements: ["Code Master", "Game Enthusiast"], badges: ["🥇", "🕹️"] },
  User3: { name: "User3", coding: "100h", gaming: "50h", activitywatch: "130h", achievements: ["Coding Pro", "Game Lover"], badges: ["🥈", "🎲"] },
  User4: { name: "User4", coding: "90h", gaming: "60h", activitywatch: "120h", achievements: ["Code Novice", "Game Player"], badges: ["🥉", "🎯"] },
  User5: { name: "User5", coding: "80h", gaming: "70h", activitywatch: "110h", achievements: ["Beginner Coder", "Casual Gamer"], badges: ["🏅", "🎳"] },
  User6: { name: "User6", coding: "70h", gaming: "80h", activitywatch: "100h", achievements: ["Intermediate Coder", "Avid Gamer"], badges: ["🎖️", "🎰"] },
  User7: { name: "User7", coding: "60h", gaming: "90h", activitywatch: "90h", achievements: ["Advanced Coder", "Hardcore Gamer"], badges: ["🏵️", "🎲"] },
  User8: { name: "User8", coding: "50h", gaming: "100h", activitywatch: "80h", achievements: ["Pro Coder", "Expert Gamer"], badges: ["🎗️", "🎮"] },
  User9: { name: "User9", coding: "40h", gaming: "110h", activitywatch: "70h", achievements: ["Master Coder", "Ultimate Gamer"], badges: ["🏅", "🕹️"] },
  User10: { name: "User10", coding: "30h", gaming: "120h", activitywatch: "60h", achievements: ["Elite Coder", "Supreme Gamer"], badges: ["🎖️", "🎯"] },
  User11: { name: "User11", coding: "20h", gaming: "130h", activitywatch: "50h", achievements: ["Legendary Coder", "Champion Gamer"], badges: ["🏵️", "🎳"] },
  User12: { name: "User12", coding: "10h", gaming: "140h", activitywatch: "40h", achievements: ["Epic Coder", "Grandmaster Gamer"], badges: ["🎗️", "🎰"] },
};

const UserProfile = () => {
  const { username } = useParams();
  const user = exampleUsers[username];

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <TooltipProvider>
      <div className="container mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle>{user.name}'s Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Coding: {user.coding}</p>
            <p>Gaming: {user.gaming}</p>
            <p>Activity Watch: {user.activitywatch}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Achievements</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {user.achievements.map((achievement, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger>
                      <Badge variant="outline">{achievement}</Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{achievement}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Badges</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {user.badges.map((badge, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger>
                      <Badge variant="outline">{badge}</Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{badge}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default UserProfile;