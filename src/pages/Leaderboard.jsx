import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const exampleUsers = [
  { name: "User1", coding: "120h", gaming: "30h", activitywatch: "150h" },
  { name: "User2", coding: "110h", gaming: "40h", activitywatch: "140h" },
  { name: "User3", coding: "100h", gaming: "50h", activitywatch: "130h" },
  { name: "User4", coding: "90h", gaming: "60h", activitywatch: "120h" },
  { name: "User5", coding: "80h", gaming: "70h", activitywatch: "110h" },
  { name: "User6", coding: "70h", gaming: "80h", activitywatch: "100h" },
  { name: "User7", coding: "60h", gaming: "90h", activitywatch: "90h" },
  { name: "User8", coding: "50h", gaming: "100h", activitywatch: "80h" },
  { name: "User9", coding: "40h", gaming: "110h", activitywatch: "70h" },
  { name: "User10", coding: "30h", gaming: "120h", activitywatch: "60h" },
  { name: "User11", coding: "20h", gaming: "130h", activitywatch: "50h" },
  { name: "User12", coding: "10h", gaming: "140h", activitywatch: "40h" },
];

const Leaderboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["coding", "gaming", "activitywatch"].map((category) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category.charAt(0).toUpperCase() + category.slice(1)}</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Screentime</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exampleUsers.map((user) => (
                    <TableRow key={user.name}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user[category]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;