import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Activity Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">Discover the best way to track your activities and compete with others.</p>
          <div className="flex justify-center mt-4 space-x-2">
            <Button onClick={() => navigate("/leaderboard")}>View Leaderboard</Button>
            <Button variant="outline" onClick={() => navigate("/about")}>Learn More</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;