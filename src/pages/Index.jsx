import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Welcome to MemberStream</h1>
        <p className="text-xl text-muted-foreground mb-8">Your exclusive learning platform</p>
        <Button onClick={() => navigate("/login")}>Login to Access Modules</Button>
      </div>
    </div>
  );
};

export default Index;
