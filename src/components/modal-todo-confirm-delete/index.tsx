import cls from 'classnames';
import {useRouter} from 'next/router';
import React, {FC} from 'react';

import API, {ITodo} from '@/api/network/todo';
import {ROUTES} from '@/configs/routes.config';
import Button from '@/core-ui/button';
import {Modal} from '@/core-ui/modal';
import useToast from '@/core-ui/toast';

import styles from './style.module.scss';

interface IProps {
  data: ITodo;
  open: boolean;
  page?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const ModalTodoConfirmDelete: FC<IProps> = ({data, open, page, onCancel, onConfirm}) => {
  const router = useRouter();
  const toast = useToast();

  const deletePost = () => {
    if (data?.id)
      API.deleteTodo(data?.id).then(() => {
        onConfirm?.();
        toast.show({type: 'success', title: 'Delete list', content: 'Successful!'});
        if (page == 'detail') {
          router.push(ROUTES.TODO_LIST);
        }
      });
  };

  if (!data) return null;

  return (
    <Modal
      className={cls(styles['com-modal-todo-confirm-delete'], 'max-w-3xl')}
      variant="center"
      open={open}
      onClose={() => onCancel?.()}
    >
      <Modal.Header>
        <h3 className="title-des">
          Are you sure you want to delete list:&nbsp;<i>{data.name}</i>{' '}
        </h3>
        <h3 className="title-mob">Are you sure you want to delete list: </h3>
        <h3 className="title-mob">{data.name}</h3>
      </Modal.Header>

      <Modal.Footer>
        <div className="flex w-full gap-x-3 md:gap-x-4">
          <Button
            className="w-full"
            variant="outlined"
            color="primary"
            text="No"
            onClick={() => onCancel?.()}
            type="button"
          />
          <Button
            className="w-full"
            variant="contained"
            color="primary"
            text="Yes"
            type="submit"
            onClick={() => deletePost()}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTodoConfirmDelete;