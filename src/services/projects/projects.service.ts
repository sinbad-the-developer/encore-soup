import { PROJECT_LIST } from './project-list';
import { ProgrammingLanguage } from '@encsoup/model';
import { Observable, of } from 'rxjs';
import { Project } from '../../models/project/project';

export class ProjectsService {
  getProjectsByLanguage(language: ProgrammingLanguage): Observable<Project[]> {
    return of(
      this.getProjectData()
        .filter((languageData) => languageData.language === language)
        .map(
          (project) =>
            new Project({
              name: project.name,
              language: project.language,
              githubUrl: project.link,
              description: project.description
            })
        )
    );
  }

  getProjectData(): any[] {
    return PROJECT_LIST;
  }
}
