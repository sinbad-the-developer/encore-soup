import { Project } from 'models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch, RootState, Thunk } from '../store';
import { ProjectService } from '../../services/project';
import { Observable, of } from 'rxjs';

interface ProjectState {
  projects: Observable<Project[]>;
}

const initialState: ProjectState = {
  projects: of([new Project()])
};

// Slice
const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    list: (state, action: PayloadAction<Observable<Project[]>>) => {
      const { payload } = action;
      state.projects = payload;
    }
  }
});

//Reducers
export default projectSlice.reducer;

//Selectors
export const projectSelector = (state: RootState) => state.projects;

//Actions
const { list } = projectSlice.actions;

//Thunks
export const listProjects = (): Thunk => (dispatch: Dispatch) => {
  dispatch(list(ProjectService.getProjects()));
};
