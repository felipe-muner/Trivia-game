import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";

export const checkRequirements =
  (Component: any) =>
  ({ ...props }) => {
    const navigate = useNavigate();
    const questions = useStore((state) => state.questions);
    const playAgain = useStore((state) => state.playAgain);

    useEffect(() => {
      if (!questions.length){
        playAgain()
        navigate("/");
      } 
    }, [navigate, playAgain, questions.length]);
    
    return <Component {...props} />;
  };
