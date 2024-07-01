import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Our App</h1>
      <p className="text-lg text-muted-foreground">Your journey to productivity starts here.</p>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Subscribe to our Newsletter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleSubscribe} className="w-full">
            Subscribe
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
