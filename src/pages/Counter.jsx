import React, { useEffect, useState } from 'react';
import { Container } from "../components/Container";
import { Button } from "../components/Button";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  // 1. useState со строкой
  const [name, setName] = useState("Иван");

  // 2. useState с булевым значением
  const [isVisible, setIsVisible] = useState(true);

  // 3. useState с массивом
  const [items, setItems] = useState(["яблоко", "банан", "вишня"]);
  const [newElement, setNewElement] = useState("");
  // 4. useState с объектом
  const [user, setUser] = useState({ name: "Иван", age: 30 });

  // 1. useEffect срабатывает при каждом рендере
  useEffect(() => {
    console.log("Компонент смонтирован или обновлён");
  });

  // 2. useEffect с пустым массивом зависимостей (выполняется только при первом рендере)
  useEffect(() => {
    console.log("Компонент смонтирован");
  }, []);

  // 3. useEffect с зависимостью (выполняется при изменении name)
  useEffect(() => {
    console.log(`Массив фруктов изменился: ${items}`);
    console.log(`Возраст изменился: ${user.age}`);
  }, [items, user.age]);

  return (
    <Container>
      <div className="flex flex-col gap-4 w-full h-full items-center justify-center">
        <button className="text-2xl" onClick={() => setCount(count + 1)}>
          жми
        </button>
        <div className="text-3xl">{count}</div>

        <h2>Видимость: {isVisible ? "Видно" : "Скрыто"}</h2>
        <Button
          color="secondary"
          size="small"
          title="Изменить видимость"
          onClick={() => setIsVisible(!isVisible)}
        >
          Переключить видимость
        </Button>

        <h3>Список:</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <input onChange={(e) => setNewElement(e.target.value)}></input>
        <button onClick={() => setItems([...items, newElement])}>
          Добавить элемент
        </button>

        <h4>
          Пользователь: {user.name}, возраст: {user.age}
        </h4>
        <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
          Увеличить возраст
        </button>
      </div>
    </Container>
  );
};