import { PROJECT_LIST } from './project-list';
import { ProgrammingLanguage, Project } from '@encsoup/model';
import { Observable, of } from 'rxjs';

export class ProjectService {
  getProjectsByLanguage(language: ProgrammingLanguage): Observable<Project[]> {
    return of(this.getProjectData().filter((languageData) => languageData.language === language));
  }

  getProjects(): Observable<Project[]> {
    return of(this.getProjectData());
  }

  getProjectByName(name: string): Observable<Project> {
    return of(this.getProjectData().find((project) => project.name === name) as Project);
  }

  getProjectData(): Project[] {
    return PROJECT_LIST.map(
      (project) =>
        new Project({
          name: project.name,
          language: project.language,
          githubUrl: project.link,
          description: project.description
        })
    );
  }
}
