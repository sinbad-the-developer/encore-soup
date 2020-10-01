import { ProgrammingLanguage } from '@encsoup/model';

export class Project {
  name: string;
  language: ProgrammingLanguage;
  githubUrl: string;
  description: string;

  constructor(project?: Partial<Project>) {
    if (project) {
      this.name = project.name!;
      this.language = project.language!;
      this.githubUrl = project.githubUrl!;
      this.description = project.description!
    }
  }
}
