import React, { Fragment, useCallback, useState } from 'react';

import Button from '@atlaskit/button';
import { Field, HelperMessage } from '@atlaskit/form';
import Textfield from '@atlaskit/textfield';

import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from '@atlaskit/modal-dialog';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const onSubmit = () => {
    
      e.preventDefault();      
    
    setName("")
  };
  
   
  return (
    <div>
      <Button appearance="primary" onClick={openModal}>
        Open modal
      </Button>

      <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal}>
            <form onSubmit={onSubmit}>
              <ModalHeader>
                <ModalTitle>Create a user</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <Field id="name" name="name" label="Type your name to continue">
                  {({ fieldProps }) => (
                    <Fragment>
                      <Textfield
                        {...fieldProps}
                        defaultValue="Ian Atlas"
                        value={undefined}
                      />
                      <HelperMessage>
                        {name ? `Hello, ${name}` : ''}
                      </HelperMessage>
                    </Fragment>
                  )}
                </Field>
              </ModalBody>
              <ModalFooter>
                <Button appearance="subtle" onClick={closeModal}>
                  Close
                </Button>
                <Button appearance="primary" type="submit">
                  Create
                </Button>
                <Button appearance="primary" type="submit">
                  Add
                </Button>
              </ModalFooter>
            </form>
          </Modal>
        )}
      </ModalTransition>
         
    </div>
  );
}

export default App;
