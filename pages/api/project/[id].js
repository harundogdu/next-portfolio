import { StringToSlug } from "utils/helper";
import DATA from "assets/projects.json";

export default function handler(req, res) {  
  const projectSlug = req.query.id;

  const project = DATA.find(
    (project) =>
      StringToSlug(project.title).toString() === projectSlug.toString()
  );

  res.status(200).json(project);
}
