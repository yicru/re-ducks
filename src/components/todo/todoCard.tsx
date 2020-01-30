import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ToggleChecked, Delete } from 'store/todo';
import { TodoType } from '../../types/todo';

interface Props extends TodoType {
  index: number;
}

export const TodoCard: React.FC<Props> = ({ index, text, isChecked }) => {
  const dispatch = useDispatch();
  const onCheckChange = useCallback(() => {
    dispatch(ToggleChecked({ index }));
  }, [index, dispatch]);
  const onDeleteClick = useCallback(() => {
    dispatch(Delete({ index }));
  }, [index, dispatch]);

  return (
    <div className="flex items-center m-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onCheckChange}
        className="mr-2"
      />
      <p className="mr-2 min-w-full">{text}</p>
      <button
        onClick={onDeleteClick}
        className="border py-2 px-2 rounded text-sm hover:shadow-lg cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};
