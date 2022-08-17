import {Dialog, Transition} from '@headlessui/react';
import {Fragment, useState} from 'react';
import cn from 'classnames';

import styles from './style.module.scss';

const ModalCreateNew: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  console.log(isOpen);
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={cn(styles['create-new-section'])} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="backdrop" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="panel">
                  {/* <Dialog.Title as="" className=""> */}
                  <div className="panel-wrapper">
                    <Dialog.Title className="heading">Add New To-Do</Dialog.Title>
                    <div className="">
                      <input className="input-your-task" type="text" placeholder="Enter your task" />
                    </div>

                    <div className="button-wrapper">
                      <button type="button" className="btn btn-save-add-new" onClick={closeModal}>
                        Close
                      </button>
                      <button type="button" className="btn btn-close">
                        Add New
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalCreateNew;
