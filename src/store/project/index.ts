import { Project } from 'models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch, RootState, Thunk } from '../store';
import { ProjectService } from '../../services/project';
import { Observable, of } from 'rxjs';
import store from 'store/store';

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
      console.log('action in reducer', action);
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
  const { projects } = store.getState().projects;
  console.log('from store', projects)
  const updatedProjects = ProjectService.getProjects();
  dispatch(list(updatedProjects));
};
