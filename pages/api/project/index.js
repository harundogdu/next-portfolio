import DATA from "assets/projects.json";

export default function handler(req, res) {
  res.status(200).json(DATA);
}
