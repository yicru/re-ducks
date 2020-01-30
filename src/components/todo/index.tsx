import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm, { FormContext } from 'react-hook-form';
import { Add, GetAllTodos } from 'store/todo';
import { TodoCard } from './todoCard';
import { Input } from '../common/input';
import { TodoType } from '../../types/todo';

export const Todo: React.FC = () => {
  const methods = useForm<TodoType>();
  const dispatch = useDispatch();
  const todos = useSelector(GetAllTodos);
  const onSubmit = methods.handleSubmit(({ text }) => {
    dispatch(Add({ text }));
    methods.reset();
  });

  return (
    <div className="h-screen bg-gray-100 flex">
      <div className="w-1/2 flex justify-center items-center">
        <FormContext {...methods}>
          <form onSubmit={onSubmit} className="mb-10">
            <Input name="title" className="bg-gray-300 p-1 mr-2" />
            <input
              type="submit"
              className="border py-2 px-2 rounded text-sm hover:shadow-lg cursor-pointer"
            />
          </form>
        </FormContext>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        {todos.map((todo, index) => (
          <TodoCard key={index} index={index} {...todo} />
        ))}
      </div>
    </div>
  );
};
