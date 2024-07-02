import { Outlet, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logo from "../../public/images/activitywatch-logo.png";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 border-b bg-background">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="ActivityWatch Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">ActivityWatch</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <NavLink to="/" className={({ isActive }) => cn("text-lg font-semibold", isActive ? "text-primary" : "text-muted-foreground")}>
            Home
          </NavLink>
          <NavLink to="/leaderboard" className={({ isActive }) => cn("text-lg font-semibold", isActive ? "text-primary" : "text-muted-foreground")}>
            Leaderboard
          </NavLink>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-y-4">
              <NavLink to="/" className={({ isActive }) => cn("text-lg font-semibold", isActive ? "text-primary" : "text-muted-foreground")}>
                Home
              </NavLink>
              <NavLink to="/leaderboard" className={({ isActive }) => cn("text-lg font-semibold", isActive ? "text-primary" : "text-muted-foreground")}>
                Leaderboard
              </NavLink>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-grow p-6 overflow-auto bg-white shadow-md rounded-lg">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;