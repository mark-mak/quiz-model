import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface QuizState {
  score: number;
}

const initialState: QuizState = {
  score: 0,
};


export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addScore: (state: QuizState) => {
      state.score += 1;
    },
    resetScore: (state: QuizState) => {
      state.score = 0;
    }
  },
});

export const { addScore, resetScore } = quizSlice.actions;

export const quizScore = (state: RootState) => state.quiz.score;

export default quizSlice.reducer;
