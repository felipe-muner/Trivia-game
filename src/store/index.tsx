import create from "zustand";
import { IQuestion } from "../interfaces/question";
import api from "../api";

interface QuestionState {
  questions: IQuestion[];
  indexQuestion: number;
  answers: boolean[];
  getQuestions: () => void;
  playAgain: () => void;
  answerQuestion: (answerQuestion: boolean) => void;
}

export const useStore = create<QuestionState>((set, get) => ({
  questions: [],
  answers: [],
  getQuestions: async () => {
    const { data: { results } } = await api.question.getQuestions();
    set({ questions: results })
  },
  indexQuestion: 0,
  answerQuestion: (answer) => {
    set(() => ({ 
      indexQuestion: get().indexQuestion + 1,
      answers: [...get().answers, answer]
    }))
  },
  playAgain: () => {
    set(() => ({ answers: [] }))
  }
}));

// export const usersStore = create((set, get) => ({
//     users: [],
//     loading: false,
//     hasErrors: false,
//     getUser: (user) => get().users.find((it) => it.id === user.id),
//     addUser: (user) => set(() => ({ users: [...get().users, user] })),
//     removeAll: () => set(() => ({ users: [] })),
//     deleteUser: (user) => set(() => ({ users: get().users.filter((it) => it.id !== user.id) })),
//     updateUser: (user) => set(() => ({
//       users: get().users.map((it) => ((it.id === user.id)
//         ? { id: '50', name: 'felipe updated' }
//         : it)),
//     })),
//     getUsers: async () => {
//       set(() => ({ loading: true }));
//       try {
//         const response = await api.user.getUsers();
//         set(() => ({ users: response.data, loading: false }));
//       } catch (err) {
//         set(() => ({ hasErrors: true, loading: false }));
//       }
//     },
//   }));
