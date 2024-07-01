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
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-extrabold">Welcome to Our App</h1>
      <p className="text-xl text-gray-200">Your journey to productivity starts here.</p>
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Subscribe to our Newsletter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
            <Button onClick={handleSubscribe} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>
    <footer className="mt-8 text-center text-gray-300">
        <p>&copy; 2023 Our App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
