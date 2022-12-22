import React, { useEffect, useState, useRef, useContext } from "react";

import Searchbox from "../components/searchbox";
import Board from "../components/board";
import Header from "../components/header";

import todos from "../demo.json";
import ThemeContext from "../utils/themeContext";

function Homepage() {
  const [data, setData] = useState(todos);
  const [statusOption, setStatusOption] = useState("all");
  const [filteredData, setFilteredData] = useState([]);

  const { theme, setTheme } = useContext(ThemeContext);

  const dragItem = useRef();
  const dragOverItem = useRef();

  useEffect(() => {
    generateData();
  }, [statusOption, data]);

  const generateData = () => {
    const filtered =
      statusOption === "all"
        ? data
        : data.filter((item) => item.status === statusOption);

    setFilteredData(filtered);
  };

  const handleTheme = ({ currentTarget: input }) => {
    if (input.value === "light") setTheme("dark");
    else setTheme("light");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const newTodo = {
        todo: e.target.value,
        status: "active",
        id: data.length.toString() + "new",
      };
      const newData = [newTodo, ...data];
      setData(newData);
      e.target.value = "";
    }
  };

  const handleCheck = ({ currentTarget: input }) => {
    let newData = [...data];
    let i = 0;
    newData.forEach((item, index) => {
      if (item.id === input.id) {
        i = index;
      }
    });

    if (newData[i].status === "active") newData[i]["status"] = "completed";
    else newData[i]["status"] = "active";

    setData(newData);
  };

  const handleCross = ({ currentTarget: input }) => {
    const newData = data.filter((item) => item.id !== input.value);
    setData(newData);
  };

  const handleStatus = ({ target: input }) => {
    setStatusOption(input.value);
    //console.log(input);
  };

  const handleClear = () => {
    const newData = data.filter((item) => item.status === "active");
    setData(newData);
  };

  const handleDragStart = ({ currentTarget: e }, index) => {
    dragItem.current = index;
  };

  const handleDragEnter = ({ currentTarget: e }, index) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    const copyData = [...data];
    const dragItemContent = copyData[dragItem.current];
    copyData.splice(dragItem.current, 1);
    copyData.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setData(copyData);
  };

  return (
    <>
      <Header theme={theme} onThemeClick={handleTheme} />
      <Searchbox onKeyDown={handleSearch} />
      <Board
        length={filteredData.length}
        data={filteredData}
        status={statusOption}
        onStatusClick={handleStatus}
        onCrossClick={handleCross}
        onClearClick={handleClear}
        onCheckClick={handleCheck}
        onDragStart={handleDragStart}
        onDragEnter={handleDragEnter}
        onDragEnd={handleDragEnd}
      />
    </>
  );
}

export default Homepage;
