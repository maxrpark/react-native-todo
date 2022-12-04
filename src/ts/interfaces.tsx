export interface Item {
  id: string;
  value: string;
  isComplete: boolean;
}

export interface Project {
  gitUrl: string;
  id: string;
  name: string;
  projectUrl: string;
  url: string;
}
export interface AlertMassege {
  message: string;
  type: string;
}
