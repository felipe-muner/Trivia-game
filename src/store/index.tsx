import create from "zustand";
import { IQuestion } from "../interfaces/question";
import api from "../api";

interface QuestionState {
  questions: IQuestion[];
  indexQuestion: number;
  answers: string[];
  getQuestions: () => void;
  playAgain: () => void;
  answerQuestion: (answerQuestion: string) => void;
}

export const useStore = create<QuestionState>((set, get) => ({
  questions: [],
  answers: [],
  indexQuestion: 0,
  getQuestions: async () => {
    const { data: { results } } = await api.question.getQuestions();
    set({ questions: results })
  },
  answerQuestion: (answer) => {
    set(() => ({ 
      indexQuestion: get().indexQuestion + 1,
      answers: [...get().answers, answer]
    }))
  },
  playAgain: () => {
    set(() => ({ answers: [], indexQuestion: 0 }))
  }
}));