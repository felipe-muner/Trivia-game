import create from "zustand";
import { IQuestion } from "../interfaces/question";
import api from "../api";

interface QuestionState {
  questions: IQuestion[];
  answers: string[];
  indexQuestion: number;
  getQuestions: () => void;
  playAgain: () => void;
  answerQuestion: (answerQuestion: string) => void;
}

const initialState: {
  questions: IQuestion[];
  answers: string[];
  indexQuestion: number;
} = {
  questions: [],
  answers: [],
  indexQuestion: 0
}

export const useStore = create<QuestionState>((set, get) => ({
  ...initialState,
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
    set(() => ({ ...initialState }))
  }
}));