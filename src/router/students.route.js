const { Router } = require("express");
const { readData, writeData } = require("../utils/utils");

const route = Router();

route.post("/", (req, res) => {
  const students = readData();
  const newStudent = {
    id: !students.length ? 1 : students.at(-1).id + 1,
    ...req.body,
  };
  students.push(newStudent);
  writeData(students);
  return res.send(students);
});

route.get("/", (_, res) => {
  const students = readData();
  return res.send(students);
});
route.get("/:id", (req, res) => {
  const id = +req.params.id;
  const students = readData();
  const student = students.find((student) => student.id == id);
  if (!student) {
    return res.send(`No Student with ${id}`);
  }
  res.send(student);
});
route.put("/:id", (req, res) => {
  const id = +req.params.id;
  const students = readData();
  const index = students.findIndex((student) => student.id == id);
  if (index == -1) {
    return res.send(`No Student with ${id}`);
  }
  students[index] = { id, ...req.body };
  writeData(students);
  return res.send(students[index]);
});
route.delete("/:id", (req, res) => {
  const id = +req.params.id;
  const students = readData();
  const index = students.findIndex((student) => student.id == id);
  if (index == -1) {
    return res.send(`No Student with ${id}`);
  }
  students.splice(index, 1);
  return res.send({});
});
module.exports = route;
