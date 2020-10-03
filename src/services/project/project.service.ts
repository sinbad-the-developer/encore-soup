import { PROJECT_LIST } from './project-list';
import { Observable, of } from 'rxjs';
import { ProgrammingLanguage, Project } from 'models';

export class ProjectService {
  static getProjectsByLanguage(language: ProgrammingLanguage): Observable<Project[]> {
    return of(this.getProjectData().filter((languageData) => languageData.language === language));
  }

  static getProjects(): Observable<Project[]> {
    return of(this.getProjectData());
  }

  static getProjectByName(name: string): Observable<Project> {
    return of(this.getProjectData().find((project) => project.name === name) as Project);
  }

  private static getProjectData(): Project[] {
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
