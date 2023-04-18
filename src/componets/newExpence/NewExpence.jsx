import { useState } from "react";
import { ExpensesForm } from "./ExpensesForm";
import ExpenceItem from "./ExpenceItem";
import ExpenceFilter from "./ExpenceFilter";
import { ExpenceChart } from "./ExpenceChart";
import styled from "styled-components";

export function NewExpence() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [select, setSelect] = useState("2023");
  const [expence, setExpence] = useState([
    {
      title: "Smart TV",
      price: 590,
      date: "2023-03-12",
      id: "01",
    },
    {
      title: "Egg",
      price: 10,
      date: "2023-05-12",
      id: "02",
    },
    {
      title: "Sprite",
      price: 9,
      date: "2023-01-12",
      id: "03",
    },
    {
      title: "Toilet paper",
      price: 12,
      date: "2022-12-02",
      id: "04",
    },
    {
      title: "Toyota Camry",
      price: 2000,
      date: "2021-09-02",
      id: "05",
    },
  ]);

  const titleChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const closeHandler = () => {
    setOpen(false);
  };
  const addNewExpence = () => {
    if (value && price && date !== "") {
      const data = {
        title: value,
        price: +price,
        date: date,
        id: Date.now().toString(),
      };
      setExpence([...expence, data]);
    } else {
      alert("Please fill in all field!");
    }

    setValue("");
    setPrice("");
    setDate("");
    closeHandler();
  };

  function openExpensesFormHandler() {
    setOpen(true);
  }

  const getSelectValue = (e) => {
    setSelect(e.target.value);
  };

  const filteredYear = expence.filter(({ date }) => {
    const stringify = new Date(date).getFullYear().toString();
    return stringify === select;
  });

  return (
    <div>
      {open ? (
        <ExpensesForm
          onClick={closeHandler}
          addNewExpence={addNewExpence}
          dateChangeHandler={dateChangeHandler}
          priceChangeHandler={priceChangeHandler}
          titleChangeHandler={titleChangeHandler}
          setValue={setValue}
          value={value}
          price={price}
          date={date}
        />
      ) : (
        <ContainerBtn>
          <BtnG onClick={openExpensesFormHandler}>Добавить новый расход</BtnG>
        </ContainerBtn>
      )}
      <ExpenceCont>
        <ExpenceFilter
          getValue={getSelectValue}
          price={expence}
          setExpence={setExpence}
          select={select}
        />
        <ExpenceChart
          price={price}
          expence={expence}
          filteredYear={filteredYear}
          filteredExpenses={filteredYear}
        />
        {filteredYear.map((item) => {
          return (
            <ExpenceItem
              key={item.id}
              filteredYear={filteredYear}
              globalData={expence}
              setExpence={setExpence}
              item={item}
            />
          );
        })}
      </ExpenceCont>
    </div>
  );
}

const BtnG = styled.button`
  background-color: #4a026b;
  width: 228px;
  height: 51px;
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  border: 0;
`;

const ContainerBtn = styled.div`
  background-color: #ad9be9;
  width: 780px;
  height: fit-content;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ExpenceCont = styled.div`
  width: 780px;
  background: #1f1f1f;
  border-radius: 12px;
  margin-top: 30px;
  padding: 10px;
  
`;
